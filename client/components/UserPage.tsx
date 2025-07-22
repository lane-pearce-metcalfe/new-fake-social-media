import { useParams } from 'react-router-dom'
import { useGetUserById } from '../hooks/useUsers'
import { useGetUserProfileInfo } from '../hooks/useUserProfile'
import { useGetPostsFromUser } from '../hooks/usePosts'
import { Post } from '#models'
import UserPagePost from './UserPagePost'

import '../styles/userPage.css'

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
      <div className="userInfoContainer">
        <div className="pfpDiv">
          <img
            src={userData.PfpUrl}
            alt={userData.UserName}
            className="userPfp"
          />
          <div className="usernameDiv">
            <h1>{userData.UserName}</h1>
            <p>{userProfileData.Location}</p>
          </div>
        </div>
        <p>{userProfileData.Description}</p>
      </div>
      <div className="usersPosts">
        {userPostData.map((post: Post, i) => {
          return <UserPagePost post={post} key={`post ${i}`} />
        })}
      </div>
    </div>
  )
}
