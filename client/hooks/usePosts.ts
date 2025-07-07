import { useQuery } from '@tanstack/react-query'
import { getPostById, getPostsFromUser } from '../api/posts'

export function useGetPostsFromUser(userId: number) {
  const query = useQuery({
    queryKey: ['posts from user: ', userId],
    queryFn: () => getPostsFromUser(userId),
  })
  return query
}

export function useGetPostById(postId: number) {
  const query = useQuery({
    queryKey: ['post: ', postId],
    queryFn: () => getPostById(postId),
  })
  return query
}
