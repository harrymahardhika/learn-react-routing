import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('token', '')
  const [isAuthenticated, setIsAuthenticated] = useState(!!token)

  const login = () => {
    setToken(Date.parse(new Date()))
  }

  const logout = () => {
    setToken('')
  }

  useEffect(() => {
    token ? setIsAuthenticated(true) : setIsAuthenticated(false)
  }, [token])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }
