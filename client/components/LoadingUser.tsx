import { useAuth0 } from '@auth0/auth0-react'
import { useAddUser, useGetUserByAuth0Sub } from '../hooks/useUsers'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoadingUser() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const [userAdded, setUserAdded] = useState(false)
  const navigate = useNavigate()
  const addUser = useAddUser()

  const { data: userData, isLoading: userLoading } = useGetUserByAuth0Sub(
    user?.sub,
  )

  useEffect(() => {
    if (
      isAuthenticated &&
      user &&
      !isLoading &&
      !userData &&
      !userLoading &&
      !userAdded
    ) {
      addUser.mutateAsync(
        {
          UserName: String(user.nickname),
          FullName: String(user.name),
          Email: String(user.email),
          PfpUrl: String(user.picture),
          UserSince: 'Test date',
          Auth0Sub: String(user.sub),
        },
        {
          onSuccess: () => {
            setUserAdded(true)
          },
          onError: (error) => {
            console.error('Failed to create user: ', error)
          },
        },
      )
    }
  }, [user, isAuthenticated, isLoading, userAdded, userData, userLoading])

  useEffect(() => {
    if (userAdded || userData) {
      navigate(userData?.id ? `/profile/${userData.id}` : `/`)
    }
  }, [userAdded, userData, navigate])

  return <p>Loading...</p>
}
