import { useQuery } from '@tanstack/react-query'
import { getUserProfileInfo } from '../api/userProfile'

export function useGetUserProfileInfo(userId: number) {
  const query = useQuery({
    queryKey: ['profile for user: ', userId],
    queryFn: () => getUserProfileInfo(userId),
  })
  return query
}
