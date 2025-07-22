import { useParams } from 'react-router-dom'
import { useGetUserById } from '../hooks/useUsers'
import { useGetUserProfileInfo } from '../hooks/useUserProfile'
import { useGetPostsFromUser } from '../hooks/usePosts'
import { Post } from '#models'
import UserPagePost from './UserPagePost'

export default function UserPage() {
  const { id } = useParams()

  const { data: userData } = useGetUserById(Number(id))

  const { data: userProfileData } = useGetUserProfileInfo(Number(id))

  const { data: userPostData } = useGetPostsFromUser(Number(id))

  if (!userData || !userProfileData || !userPostData) {
    return <p>Loading...</p>
  }

  return (
    <div className="userPageContainer">
      <h1>{userData.UserName}</h1>
      <img src={userData.PfpUrl} alt={userData.UserName} />
      <p>{userProfileData.Description}</p>
      <p>{userProfileData.Location}</p>
      <div>
        {userPostData.map((post: Post, i) => {
          return <UserPagePost post={post} key={`post ${i}`} />
        })}
      </div>
    </div>
  )
}
