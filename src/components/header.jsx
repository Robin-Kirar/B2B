import { useContext } from 'react'
import { useAuth } from '../context/authContext'
import { NavContext } from '../context/navContext'

import './header.css'

const Header = () => {
  const { authUser } = useAuth()
  const { navActive, setNavActive } = useContext(NavContext)
  const activateNav = () => {
    setNavActive(!navActive)
  }

  return (
    <header>
      <div className="header-left">
        <div className={`header-logo ${navActive ? 'deactive' : ''}`}>
          <img
            src="https://thailand.k1travels.com/admin/images/l1.png"
            alt="logo"
          />
        </div>
        <button className="header-btn" onClick={activateNav}>
          <i className="fa-solid fa-bars fs-5"></i>
        </button>
      </div>

      <div className="d-flex gap-3 align-items-center">
        <span>Balance: ₹ 61,140 CR</span>
        <button className="header-btn">
          <i className="fa-solid fa-user me-2"></i>
          <span>{authUser.username}</span>
        </button>
      </div>
    </header>
  )
}

export default Header
