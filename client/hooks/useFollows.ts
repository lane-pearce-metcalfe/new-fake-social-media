import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  getUsersFollowCounts,
  getRelationship,
  followUser,
  unfollowUser,
} from '../api/follows'

export function useGetUserFollowCounts(userId: number) {
  const query = useQuery({
    queryKey: ['follow counts for user:', userId],
    queryFn: () => getUsersFollowCounts(userId),
    enabled: userId !== undefined,
  })
  return query
}

export function useGetRelationships(userId: number, followedUserId: number) {
  const query = useQuery({
    queryKey: ['relationship for user:', userId, followedUserId],
    queryFn: () => getRelationship(userId, followedUserId),
    enabled: userId !== undefined && followedUserId !== undefined,
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
        queryKey: [
          'relationship for user:',
          params.userId,
          params.followedUserId,
        ],
      })
      queryClient.invalidateQueries({
        queryKey: ['follow counts for user:', params.followedUserId],
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
        queryKey: [
          'relationship for user:',
          params.userId,
          params.followedUserId,
        ],
      })
    },
  })
}
