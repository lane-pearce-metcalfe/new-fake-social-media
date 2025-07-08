import { useGetAllPosts } from '../hooks/usePosts'
import HomePost from './HomePost'

export default function HomeFeed() {
  const { data: postsData } = useGetAllPosts()

  if (!postsData) {
    return <p>Loading...</p>
  }

  return postsData.map((post) => {
    return <HomePost post={post} key={`Post ${post.Id}`} />
  })
}
