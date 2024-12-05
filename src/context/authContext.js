import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
  const storedUser = localStorage.getItem('user')
  const [authUser, setAuthUser] = useState(storedUser || null)
  const [loggedIn, setLoggedIn] = useState(storedUser ? true : false)

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    setLoggedIn(true)
    setAuthUser(userData)
  }
  const logout = () => {
    localStorage.removeItem('user')
    setLoggedIn(false)
    setAuthUser(null)
  }

  /* Check if the user is logged in based on localStorage */
  useEffect(() => {
    const storedUser = localStorage.getItem('user')

    if (storedUser) {
      login(JSON.parse(storedUser))
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ authUser, loggedIn, setAuthUser, setLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
