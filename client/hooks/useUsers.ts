import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addUser, getUserByAuth0Sub, getUserById } from '../api/users'
import { AddUser, Auth0Sub, UserId } from '#models'

export function useGetUserById(userId: UserId) {
  const query = useQuery({
    queryKey: ['user: ', userId],
    queryFn: () => getUserById(userId),
  })
  return query
}

export function useGetUserByAuth0Sub(auth0Sub: Auth0Sub | undefined) {
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
    mutationFn: async (user: AddUser) => {
      addUser(user)
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['auth0 sub: ', variables.Auth0Sub],
      })
    },
  })
}
