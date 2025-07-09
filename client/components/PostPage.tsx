import { useParams } from 'react-router-dom'
import { useGetPostById } from '../hooks/usePosts'
import { useGetUserById } from '../hooks/useUsers'
import { useGetCommentsOnPost } from '../hooks/useComments'
import { Comment } from '#models'

export default function PostPage() {
  const { id } = useParams()

  const { data: postData } = useGetPostById(Number(id))

  const { data: postUserData } = useGetUserById(postData?.UserId)

  const { data: commentsData } = useGetCommentsOnPost(Number(id))

  if (!postData || !postUserData || !commentsData) {
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
      {commentsData.map((comment: Comment, i) => {
        return <p key={`Comment ${i}`}>{comment.Comment}</p>
      })}
    </>
  )
}
