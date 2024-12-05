import { useState, useContext } from 'react'
import { NavLinkActivatorContext } from '../context/navLinkActivatorContext'

const NavLinkDropdown = ({ title, iconClass, children }) => {
  const [navDropdown, setNavDropdown] = useState(false)
  const { activeLink } = useContext(NavLinkActivatorContext)

  const handleDropdown = () => {
    setNavDropdown(!navDropdown)
  }
  return (
    <div className="nav-link-dropdown-cont">
      <button
        className={`nav-link nav-dropdown-btn ${
          activeLink === title.toLowerCase() && 'active'
        }`}
        onClick={handleDropdown}
      >
        <div className="nav-dropdown-title">
          <i className={`${iconClass} nav-icons`}></i>
          <span className="no-display">{title}</span>
        </div>
        <i className="fa-solid fa-chevron-right nav-dropdown-icons no-display"></i>
      </button>
      <div className={`nav-link-dropdown-menu ${navDropdown ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default NavLinkDropdown
