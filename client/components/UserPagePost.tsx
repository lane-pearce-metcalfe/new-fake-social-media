import { Post } from '#models'
import { useGetPostsLikes } from '../hooks/useLikes'
import '../styles/userPagePosts.css'

export default function UserPagePost({ post }: { post: Post }) {
  const { data: postLikes } = useGetPostsLikes(post.Id)

  if (!postLikes) {
    return <p>Loading...</p>
  }

  return (
    <div className="postContainer">
      <div className="likes">
        <h1>{postLikes}</h1>
      </div>
      <img src={post.ImgUrl} alt={post.Description} className="postImg" />
    </div>
  )
}
