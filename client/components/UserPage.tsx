import { useParams } from 'react-router-dom'
import {
  useGetUserById,
  useGetUserProfileInfo,
  useGetPostsFromUser,
  useFollowUser,
  useUnfollowUser,
  useGetRelationships,
  useGetUserByAuth0Sub,
  useGetUserFollowCounts,
} from '../hooks'
import { Post } from '#models'
import UserPagePost from './UserPagePost'

import '../styles/userPage.css'
import { useAuth0 } from '@auth0/auth0-react'

export default function UserPage() {
  const { id } = useParams()

  const { data: userData } = useGetUserById(Number(id))

  const { data: userProfileData } = useGetUserProfileInfo(Number(id))

  const { data: userPostData } = useGetPostsFromUser(Number(id))

  const { data: followCounts } = useGetUserFollowCounts(Number(id))

  const { user } = useAuth0()

  const { data: userDataFromAuth } = useGetUserByAuth0Sub(user?.sub)

  const follow = useFollowUser()
  const unfollow = useUnfollowUser()

  const handleFollow = () => {
    if (userData && userData.Id) {
      follow.mutate({ userId: userDataFromAuth.Id, followedUserId: Number(id) })
    }
  }

  const handleUnfollow = () => {
    if (userData && userData.Id) {
      unfollow.mutate({
        userId: userDataFromAuth.Id,
        followedUserId: Number(id),
      })
    }
  }

  const { data: relationshipData } = useGetRelationships(
    userDataFromAuth?.Id,
    Number(id),
  )

  console.log(followCounts)

  if (
    !userData ||
    !userProfileData ||
    !userPostData ||
    !relationshipData ||
    !followCounts
  ) {
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
            <div className="followButtonDiv">
              <h1>{userData.UserName}</h1>
              {relationshipData === 'none' ? (
                <button onClick={() => handleFollow()}>Follow</button>
              ) : relationshipData === 'following' ? (
                <button onClick={() => handleUnfollow()}>Following</button>
              ) : relationshipData === 'followed' ? (
                <button onClick={() => handleFollow()}>Follow Back</button>
              ) : (
                <button onClick={() => handleUnfollow()}>Unfriend</button>
              )}
              <h1>Following: {`${followCounts.follows}`}</h1>
              <h1>Followers: {`${followCounts.followers}`}</h1>
            </div>
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
