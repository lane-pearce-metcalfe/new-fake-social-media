import { useGetUserById } from '../hooks/useUsers'

export default function HomePost({ post }) {
  const { data: userData } = useGetUserById(Number(post.UserId))

  if (!userData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <p>{userData.UserName}</p>
      <img src={post.ImgUrl} alt={post.Location} />
    </div>
  )
}
