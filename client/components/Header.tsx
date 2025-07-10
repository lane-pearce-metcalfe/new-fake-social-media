import { useAuth0 } from '@auth0/auth0-react'
import '../styles/header.css'

export default function Header() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0()

  console.log(user)

  function handleLogin() {
    loginWithRedirect({
      appState: { returnTo: '/loadUser' },
    })
  }

  function handleLogout() {
    logout()
  }

  return (
    <header>
      <h1>Logo</h1>
      <div>
        {!isAuthenticated ? (
          <button onClick={handleLogin}>Sign in</button>
        ) : (
          <div className="headerUserInfo">
            <button onClick={handleLogout}>Log Out</button>
            <img
              src={user?.picture}
              alt={user?.nickname}
              className="headerPfp"
            />
          </div>
        )}
      </div>
    </header>
  )
}
