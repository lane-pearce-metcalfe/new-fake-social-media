import { Post } from '#models'
import { useGetAllPosts } from '../hooks'
import HomePost from './HomePost'
import '../styles/homeFeed.css'

export default function HomeFeed() {
  const { data: postsData } = useGetAllPosts()

  if (!postsData) {
    return <p>Loading...</p>
  }

  return (
    <div className="homeFeed">
      {postsData.map((post: Post) => {
        return <HomePost post={post} key={`Post ${post.Id}`} />
      })}
    </div>
  )
}
