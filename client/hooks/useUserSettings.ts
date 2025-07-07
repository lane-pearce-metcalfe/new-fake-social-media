import { useQuery } from '@tanstack/react-query'
import { getUsersTheme } from '../api/userSettings'

export function useGetUsersTheme(userId: number) {
  const query = useQuery({
    queryKey: ['theme for user: ', userId],
    queryFn: () => getUsersTheme(userId),
  })
  return query
}
