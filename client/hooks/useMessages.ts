import { useQuery } from '@tanstack/react-query'
import { getConversationsMessages } from '../api/messages'

export function useGetConversationMessages(convoId: number) {
  const query = useQuery({
    queryKey: ['messages in convo: ', convoId],
    queryFn: () => getConversationsMessages(convoId),
  })
  return query
}
