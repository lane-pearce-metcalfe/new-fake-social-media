import { useQuery } from '@tanstack/react-query'
import { getCommentsByPostId } from '../api/comments'
import { PostId } from '#models'

export function useGetCommentsOnPost(postId: PostId) {
  const query = useQuery({
    queryKey: ['comments post: ', postId],
    queryFn: () => getCommentsByPostId(postId),
  })
  return query
}
