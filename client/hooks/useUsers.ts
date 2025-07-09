import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addUser, getUserByAuth0Sub, getUserById } from '../api/users'

export function useGetUserById(userId: number) {
  const query = useQuery({
    queryKey: ['user: ', userId],
    queryFn: () => getUserById(userId),
  })
  return query
}

export function useGetUserByAuth0Sub(auth0Sub: string | undefined) {
  const query = useQuery({
    queryKey: ['auth0 sub: ', auth0Sub],
    queryFn: () => getUserByAuth0Sub(auth0Sub),
    enabled: !!auth0Sub,
  })
  return query
}

export function useAddUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (user: {
      UserName: string
      FullName: string
      Email: string
      PfpUrl: string
      UserSince: string
      Auth0Sub: string
    }) => {
      addUser(user)
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['auth0 sub: ', variables.Auth0Sub],
      })
    },
  })
}
