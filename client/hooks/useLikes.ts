import { useQuery } from '@tanstack/react-query'
import { getPostsLikes } from '../api/likes'

export function useGetPostsLikes(postId: number) {
  const query = useQuery({
    queryKey: ['likes for post: ', postId],
    queryFn: () => getPostsLikes(postId),
  })
  return query
}
