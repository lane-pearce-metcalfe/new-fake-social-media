import { useState } from 'react'
import { Upload, X } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { useGetUserByAuth0Sub } from '../hooks/useUsers'
import { useAddPost } from '../hooks/usePosts'
import { useNavigate } from 'react-router-dom'

export default function ImageUploadComponent() {
  const { user } = useAuth0()
  const { data: userData, isLoading: userLoading } = useGetUserByAuth0Sub(
    user?.sub,
  )

  const addPost = useAddPost()

  const navigate = useNavigate()

  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLoaction] = useState('')

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)

      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target.result)
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile)

      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target.result)
      reader.readAsDataURL(droppedFile)
    }
  }

  const handleDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  const handleUpload = async () => {
    if (!file || !userData) return

    setUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'fakeSocialMedia')
      formData.append('cloud_name', 'dd15g8vmk')

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/dd15g8vmk/image/upload`,
        { method: 'POST', body: formData },
      )

      if (!cloudinaryResponse.ok) {
        throw new Error('Failed to upload')
      }

      const cloudinaryData = await cloudinaryResponse.json()
      const uploadedImageurl = cloudinaryData.secure_url
      setImageUrl(uploadedImageurl)
      const now = new Date()
      addPost.mutateAsync(
        {
          UserId: Number(userData.Id),
          ImgUrl: uploadedImageurl,
          Location: location,
          Description: description,
          CreatedAt: String(now.toDateString()),
        },
        {
          onSuccess: () => {
            navigate('/')
          },
        },
      )
    } catch (error) {
      console.error('Upload error:', error)
    } finally {
      setUploading(false)
    }
  }

  const handleClear = () => {
    setFile(null)
    setPreview(null)
    setImageUrl('')
  }

  if (!userLoading && !userData && !user) {
    return <p>Loading...</p>
  }

  if (!userData) {
    return <p>Please sign in to upload posts</p>
  }

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
        Upload Image to Cloudinary
      </h2>
      <div
        className="rounded-lg border-2 border-dashed border-gray-300 p-6 text-center transition-colors hover:border-gray-400"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {preview ? (
          <div className="space-y-4">
            <img
              src={preview}
              alt="Preview"
              className="mx-auto h-40 max-w-full rounded-lg object-cover"
            />
            <button
              onClick={handleClear}
              className="mx-auto flex items-center gap-1 text-red-500 hover:text-red-700"
            >
              <X size={16} />
              Clear
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <Upload size={48} className="mx-auto text-gray-400" />
            <div>
              <p className="mb-2 text-gray-600">
                Drag and drop an image here, or click to select
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>
        )}
      </div>

      {file && (
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {uploading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
              Uploading...
            </>
          ) : (
            <>
              <Upload size={16} />
              Upload to Cloudinary
            </>
          )}
        </button>
      )}
      {imageUrl && (
        <div className="mt-4 rounded-lg bg-gray-100 p-3">
          <p className="mb-2 text-sm font-medium text-gray-700">
            Uploaded Image URL:
          </p>
          <p className="break-all text-xs text-gray-600">{imageUrl}</p>
        </div>
      )}
      <h1>Add a description</h1>
      <input
        type="text"
        onChange={(e) => {
          e.preventDefault()
          setDescription(e.target.value)
        }}
        style={{
          boxShadow: '4px 4px 7px rgba(0, 0, 0, 0.2)',
          margin: '10px 0px',
          borderRadius: '10px',
          width: '100%',
        }}
      />
      <h1>Add a Location</h1>
      <input
        type="text"
        onChange={(e) => {
          e.preventDefault()
          setLoaction(e.target.value)
        }}
        style={{
          boxShadow: '4px 4px 7px rgba(0, 0, 0, 0.2)',
          margin: '10px 0px',
          borderRadius: '10px',
          width: '100%',
        }}
      />
    </div>
  )
}
