import { useQuery } from '@tanstack/react-query'
import { getAllConversations } from '../api/conversations'

export function useGetAllConversations() {
  const query = useQuery({
    queryKey: ['all conversations'],
    queryFn: getAllConversations,
  })
  return query
}
