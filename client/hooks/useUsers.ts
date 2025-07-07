import { useQuery } from '@tanstack/react-query'
import { getUserById } from '../api/users'

export function useGetUserById(userId: number) {
  const query = useQuery({
    queryKey: ['user: ', userId],
    queryFn: () => getUserById(userId),
  })
  return query
}
