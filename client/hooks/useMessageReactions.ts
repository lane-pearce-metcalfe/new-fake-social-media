import { useQuery } from '@tanstack/react-query'
import { getMessageReactions } from '../api/messageReactions'

export function useGetMessageReactions(messageId: number) {
  const query = useQuery({
    queryKey: ['reactions for message: ', messageId],
    queryFn: () => getMessageReactions(messageId),
  })
  return query
}
