import { useParams } from 'react-router-dom'
import { useGetPostById } from '../hooks/usePosts'
import { useGetUserById } from '../hooks/useUsers'

export default function PostPage() {
  const { id } = useParams()

  const { data: postData } = useGetPostById(Number(id))

  const { data: postUserData } = useGetUserById(postData?.UserId)

  if (!postData || !postUserData) {
    return <p>Loading...</p>
  }

  return (
    <>
      <p>{postUserData.UserName}</p>
      <img
        src={postUserData.PfpUrl}
        alt={postUserData.UserName}
        style={{ width: '10vw' }}
      />
      <img
        src={postData.ImgUrl}
        alt={postData.Location}
        style={{ width: '30vw' }}
      />
      <p>{postData.CreatedAt}</p>
    </>
  )
}
