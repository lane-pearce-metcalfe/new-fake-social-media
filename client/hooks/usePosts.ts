import { useQuery } from '@tanstack/react-query'
import { getPostsFromUser } from '../api/posts'

export function useGetPostsFromUser(userId: number) {
  const query = useQuery({
    queryKey: ['posts from user: ', userId],
    queryFn: () => getPostsFromUser(userId),
  })
  return query
}
