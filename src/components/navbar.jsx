import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { useAuth } from '../context/authContext'
import { NavContext } from '../context/navContext'
import { NavLinkActivatorContext } from '../context/navLinkActivatorContext'

import './navbar.css'
import NavLinkDropdown from './navLinkDropdown'

const Navbar = () => {
  const adminRole = 'Admin'
  const { authUser, logout } = useAuth()
  const { navActive } = useContext(NavContext)

  const { activeLink, setActiveLink } = useContext(NavLinkActivatorContext)

  const linkActivator = (name) => {
    setActiveLink(name)
  }

  return (
    <nav className={navActive ? 'active' : ''}>
      <div className="nav-links">
        <Link
          to={'/dashboard'}
          className={`nav-link ${activeLink === 'dashboard' && 'active'}`}
          onClick={() => {
            linkActivator('dashboard')
          }}
        >
          <i className="fa-solid fa-gauge nav-icons"></i>
          <span className="no-display">Dashboard</span>
        </Link>
        {authUser.role == adminRole && (
          <NavLinkDropdown title={'Settings'} iconClass={'fa-solid fa-gear'}>
            <div className="nav-dropdown-link-cont">
              <Link to="/destinations" className="nav-dropdown-link">
                <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
                Destinations
              </Link>
              <Link to="/hotels" className="nav-dropdown-link">
                <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
                Hotels
              </Link>
              <Link to="/sightseeing" className="nav-dropdown-link">
                <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
                Sightseeing
              </Link>
              <Link to="/activities" className="nav-dropdown-link">
                <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
                Activities
              </Link>
              <Link to="/transportation" className="nav-dropdown-link">
                <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
                Transportation
              </Link>
              <Link to="/currencies" className="nav-dropdown-link">
                <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
                Currencies
              </Link>
            </div>
          </NavLinkDropdown>
        )}

        <Link
          to={'/customers'}
          className={`nav-link ${activeLink === 'customers' && 'active'}`}
          onClick={() => {
            linkActivator('customers')
          }}
        >
          <i className="fa-solid fa-user nav-icons"></i>
          <span className="no-display">Customers</span>
        </Link>
        <Link
          to={'/final-customers'}
          className={`nav-link ${activeLink === 'final-customers' && 'active'}`}
          onClick={() => {
            linkActivator('final-customers')
          }}
        >
          <i className="fa-regular fa-user nav-icons"></i>
          <span className="no-display">Final Customers</span>
        </Link>
        <Link
          to={'/confirmation-list'}
          className={`nav-link ${
            activeLink === 'confirmation-list' && 'active'
          }`}
          onClick={() => {
            linkActivator('confirmation-list')
          }}
        >
          <i className="fa-solid fa-list-ul nav-icons"></i>
          <span className="no-display">Confirmation List</span>
        </Link>
        <NavLinkDropdown
          title={'Price'}
          iconClass={'fa-solid fa-indian-rupee-sign'}
        >
          <div className="nav-dropdown-link-cont">
            <Link to="/room-price" className="nav-dropdown-link">
              <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
              Room Price
            </Link>
            <Link to="/transport-price" className="nav-dropdown-link">
              <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
              Transport Price
            </Link>
            <Link to="/sightseeing-price" className="nav-dropdown-link">
              <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
              Sightseeing Price
            </Link>
          </div>
        </NavLinkDropdown>
        <Link
          to={'/wallet'}
          className={`nav-link ${activeLink === 'wallet' && 'active'}`}
          onClick={() => {
            linkActivator('wallet')
          }}
        >
          <i className="fa-brands fa-google-wallet nav-icons"></i>
          <span className="no-display">Wallet</span>
        </Link>
        <Link
          to={'/payments'}
          className={`nav-link ${activeLink === 'payments' && 'active'}`}
          onClick={() => {
            linkActivator('payments')
          }}
        >
          <i className="fa-regular fa-credit-card nav-icons"></i>
          <span className="no-display">Payments</span>
        </Link>
        <Link
          to={'/rewards'}
          className={`nav-link ${activeLink === 'rewards' && 'active'}`}
          onClick={() => {
            linkActivator('rewards')
          }}
        >
          <i className="fa-solid fa-star nav-icons"></i>
          <span className="no-display">Rewards</span>
        </Link>
        <Link
          to={'/change-password'}
          className={`nav-link ${activeLink === 'change-password' && 'active'}`}
          onClick={() => {
            linkActivator('change-password')
          }}
        >
          <i className="fa-solid fa-key nav-icons"></i>
          <span className="no-display">Change Password</span>
        </Link>
        <Link
          to={'/change-profile'}
          className={`nav-link ${activeLink === 'change-profile' && 'active'}`}
          onClick={() => {
            linkActivator('change-profile')
          }}
        >
          <i className="fa-solid fa-user-pen nav-icons"></i>
          <span className="no-display">Change Profile</span>
        </Link>

        <button type="button" className={`nav-link`} onClick={logout}>
          <i className="fa-solid fa-power-off nav-icons"></i>
          <span className="no-display">Logout</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
