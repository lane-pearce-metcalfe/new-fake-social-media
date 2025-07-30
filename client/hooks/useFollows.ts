import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  getUsersFollowers,
  getUsersFollows,
  getRelationship,
  followUser,
  unfollowUser,
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

export function useFollowUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({
      userId,
      followedUserId,
    }: {
      userId: number
      followedUserId: number
    }) => followUser(userId, followedUserId),
    onSuccess: (data, params) => {
      queryClient.invalidateQueries({
        queryKey: ['follows for user: ', params.userId],
      })
      queryClient.invalidateQueries({
        queryKey: ['followers for user ', params.followedUserId],
      })
      queryClient.invalidateQueries({
        queryKey: [
          'relationship for user',
          params.userId,
          params.followedUserId,
        ],
      })
    },
  })
}

export function useUnfollowUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({
      userId,
      followedUserId,
    }: {
      userId: number
      followedUserId: number
    }) => unfollowUser(userId, followedUserId),
    onSuccess: (data, params) => {
      queryClient.invalidateQueries({
        queryKey: ['follows for user: ', params.userId],
      })
      queryClient.invalidateQueries({
        queryKey: ['followers for user ', params.followedUserId],
      })
      queryClient.invalidateQueries({
        queryKey: [
          'relationship for user',
          params.userId,
          params.followedUserId,
        ],
      })
    },
  })
}
