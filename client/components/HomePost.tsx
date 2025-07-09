import { Link } from 'react-router-dom'
import { useGetUserById } from '../hooks/useUsers'
import { Post } from '#models'

interface Props {
  post: Post
}

export default function HomePost({ post }: Props) {
  const { data: userData } = useGetUserById(Number(post.UserId))

  if (!userData) {
    return <p>Loading...</p>
  }

  return (
    <Link to={`/post/${post.Id}`}>
      <div>
        <p>{userData.UserName}</p>
        <img src={post.ImgUrl} alt={post.Location} />
      </div>
    </Link>
  )
}
