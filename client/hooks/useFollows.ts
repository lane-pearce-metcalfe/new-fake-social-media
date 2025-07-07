import { useQuery } from '@tanstack/react-query'
import { getUsersFollows } from '../api/follows'

export function useGetUsersFollows(userId: number) {
  const query = useQuery({
    queryKey: ['follows for user:  ', userId],
    queryFn: () => getUsersFollows(userId),
  })
  return query
}
