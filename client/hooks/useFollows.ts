import { useQuery } from '@tanstack/react-query'
import { getUsersFollowers, getUsersFollows } from '../api/follows'

export function useGetUsersFollows(userId: number) {
  const query = useQuery({
    queryKey: ['follows for user:  ', userId],
    queryFn: () => getUsersFollows(userId),
  })
  return query
}

export function useGetUsersFollowers(userId: number) {
  const query = useQuery({
    queryKey: ['followers for user ', userId],
    queryFn: () => getUsersFollowers(userId),
  })
  return query
}
