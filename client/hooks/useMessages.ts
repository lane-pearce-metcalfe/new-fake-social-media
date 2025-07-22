import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addMessage, getConversationsMessages } from '../api/messages'
import { AddMessage } from '#models'

export function useGetConversationMessages(convoId: number) {
  const query = useQuery({
    queryKey: ['messages in convo: ', convoId],
    queryFn: () => getConversationsMessages(convoId),
  })
  return query
}

export function useSendMessage() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (message: AddMessage) => {
      addMessage(message)
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['messages in convo', variables.ConversationId],
      })
    },
  })
}
