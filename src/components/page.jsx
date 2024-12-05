import { useContext, useEffect } from 'react'
import { NavLinkActivatorContext } from '../context/navLinkActivatorContext'

import { NavContext } from '../context/navContext'

/* -- components -- */
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'

const Page = ({ children }) => {
  /* -- contexts -- */
  const { setActiveLink } = useContext(NavLinkActivatorContext)
  const { navActive } = useContext(NavContext)

  useEffect(() => {
    setActiveLink('dashboard')
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      <main className={navActive ? 'active' : ''}>
        <div className="page-wrapper">{children}</div>
        <Footer />
      </main>
    </>
  )
}

export default Page
