import { useQuery } from '@tanstack/react-query'
import { getAllPosts, getPostById, getPostsFromUser } from '../api/posts'
import { PostId, UserId } from '#models'

export function useGetPostsFromUser(userId: UserId) {
  const query = useQuery({
    queryKey: ['posts from user: ', userId],
    queryFn: () => getPostsFromUser(userId),
  })
  return query
}

export function useGetPostById(postId: PostId) {
  const query = useQuery({
    queryKey: ['post: ', postId],
    queryFn: () => getPostById(postId),
  })
  return query
}

export function useGetAllPosts() {
  const query = useQuery({
    queryKey: ['all posts'],
    queryFn: () => getAllPosts(),
  })
  return query
}
