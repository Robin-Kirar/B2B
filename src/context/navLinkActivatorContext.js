import { useState, createContext } from 'react'

export const NavLinkActivatorContext = createContext(null)

const NavLinkActivatorContextProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('dashboard')
  return (
    <NavLinkActivatorContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </NavLinkActivatorContext.Provider>
  )
}

export default NavLinkActivatorContextProvider
