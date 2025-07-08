import { useParams } from 'react-router-dom'
import { useGetUserById } from '../hooks/useUsers'
import { useGetUserProfileInfo } from '../hooks/useUserProfile'

export default function UserPage() {
  const { id } = useParams()

  const { data: userData } = useGetUserById(Number(id))

  const { data: userProfileData } = useGetUserProfileInfo(Number(id))

  return (
    <>
      <h1>{userData.UserName}</h1>
      <img src={userData.PfpUrl} alt={userData.UserName} />
      <p>{userProfileData.Description}</p>
      <p>{userProfileData.Location}</p>
    </>
  )
}
