import { useQuery } from '@tanstack/react-query'
import { getMentionsOnPost } from '../api/mentions'

export function useGetMentionsOnPost(postId: number) {
  const query = useQuery({
    queryKey: ['mentions on post: ', postId],
    queryFn: () => getMentionsOnPost(postId),
  })
  return query
}
