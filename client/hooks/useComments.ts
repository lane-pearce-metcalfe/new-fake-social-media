import { useQuery } from '@tanstack/react-query'
import { getCommentsByPostId } from '../api/comments'

export function useGetCommentsOnPost(postId: number) {
  const query = useQuery({
    queryKey: ['comments post: ', postId],
    queryFn: () => getCommentsByPostId(postId),
  })
  return query
}
