import { useQuery } from '@tanstack/react-query'
import { getUserByAuth0Sub, getUserById } from '../api/users'

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
