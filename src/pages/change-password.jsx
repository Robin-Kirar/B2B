import { useEffect, useContext, useState } from 'react'
import { NavLinkActivatorContext } from '../context/navLinkActivatorContext'

import Page from '../components/page'

const ChangePassword = () => {
  /* -- contexts -- */
  const { setActiveLink } = useContext(NavLinkActivatorContext)
  useEffect(() => {
    setActiveLink('change-password')
  }, [])

  /* -- form -- */
  const [data, setData] = useState({
    old_password: '',
    new_password: '',
    confirm_password: '',
  })

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget

    setData((item) => ({
      ...item,
      [name]: value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Page>
      <section className="page-section">
        <div className="page-header">
          <h1 className="page-title">Change Password</h1>
        </div>

        <div className="px-2 py-2 px-md-4 mt-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="old_password" className="fw-bold mb-1">
                Old Password
              </label>
              <input
                type="text"
                id="old_password"
                className="form-control"
                placeholder="Your Old Password..."
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="new_password" className="fw-bold mb-1">
                New Password
              </label>
              <input
                type="text"
                id="new_password"
                className="form-control"
                placeholder="Your New Password..."
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm_password" className="fw-bold mb-1">
                Confirm Password
              </label>
              <input
                type="text"
                id="confirm_password"
                className="form-control"
                placeholder="Confirm Password..."
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <button className="btn btn-success" type="submit">
                Change
              </button>
            </div>
          </form>
        </div>
      </section>
    </Page>
  )
}

export default ChangePassword
