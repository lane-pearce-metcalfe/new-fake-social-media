import { useAuth0 } from '@auth0/auth0-react'

export default function Header() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0()

  console.log(user)

  function handleLogin() {
    loginWithRedirect()
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
          <>
            <button onClick={handleLogout}>Log Out</button>
            <img src={user?.picture} alt={user?.nickname} />
          </>
        )}
      </div>
    </header>
  )
}
