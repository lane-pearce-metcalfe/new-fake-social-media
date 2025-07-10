import { Link } from 'react-router-dom'
import { useGetUserById } from '../hooks/useUsers'
import { Post } from '#models'
import '../styles/homePost.css'

interface Props {
  post: Post
}

export default function HomePost({ post }: Props) {
  const { data: userData } = useGetUserById(Number(post.UserId))

  if (!userData) {
    return <p>Loading...</p>
  }

  return (
    <div className="postContainer">
      <p>{userData.UserName}</p>
      <Link to={`/post/${post.Id}`}>
        <img src={post.ImgUrl} alt={post.Location} className="postImg" />
      </Link>
    </div>
  )
}
