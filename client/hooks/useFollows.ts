import { useQuery } from '@tanstack/react-query'
import {
  getUsersFollowers,
  getUsersFollows,
  getRelationship,
} from '../api/follows'

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

export function useGetRelationships(userId: number, followedUserId: number) {
  const query = useQuery({
    queryKey: ['relationship for user', userId, followedUserId],
    queryFn: () => getRelationship(userId, followedUserId),
  })
  return query
}
