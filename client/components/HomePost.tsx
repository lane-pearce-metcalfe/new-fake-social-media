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
      <div className="postUserInfo">
        <img src={userData.PfpUrl} alt={userData.UserName} />
        <div className="postUserNameContainer">
          <p className="postUserName">{userData.UserName}</p>
          {!post.Location ? null : (
            <p className="postLocation">{post.Location}</p>
          )}
        </div>
      </div>
      <Link to={`/post/${post.Id}`}>
        <img src={post.ImgUrl} alt={post.Location} className="postImg" />
      </Link>
    </div>
  )
}
