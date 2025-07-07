import { useQuery } from '@tanstack/react-query'
import { getParticipantsByConvoId } from '../api/conversationParticipants'

export function useGetParticipantsByConvoId(convoId: number) {
  const query = useQuery({
    queryKey: ['conversation particpants: ', convoId],
    queryFn: () => getParticipantsByConvoId(convoId),
  })
  return query
}
