import { Post } from '#models'
import { useGetPostsLikes } from '../hooks/useLikes'

export default function UserPagePost({ post }: { post: Post }) {
  const { data: postLikes } = useGetPostsLikes(post.Id)

  if (!postLikes) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div>
        <h1>{postLikes}</h1>
      </div>
      <img src={post.ImgUrl} alt={post.Description} />
    </div>
  )
}
