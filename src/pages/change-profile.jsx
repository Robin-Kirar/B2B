import { useEffect, useContext, useState } from 'react'
import { NavLinkActivatorContext } from '../context/navLinkActivatorContext'

import Page from '../components/page'

const ChangeProfile = () => {
  /* -- contexts -- */
  const { setActiveLink } = useContext(NavLinkActivatorContext)
  useEffect(() => {
    setActiveLink('change-profile')
  }, [])

  /* -- Form -- */
  const [data, setData] = useState({})

  // handle submit

  return (
    <Page>
      <section className="page-section">
        <div className="page-header">
          <h1 className="page-title">Change Profile</h1>
        </div>

        <div className="px-2 py-2 px-md-4 mt-4">
          <form>
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="row g-3">
                  <div className="col-12">
                    <label
                      htmlFor="contact_person_name"
                      className="fw-bold mb-1"
                    >
                      Contact Person Name
                    </label>
                    <input
                      type="text"
                      id="contact_person_name"
                      className="form-control"
                      placeholder="Your Name..."
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="username" className="fw-bold mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      placeholder="Your Username..."
                      disabled
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="password" className="fw-bold mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Your Password..."
                      disabled
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="company_name" className="fw-bold mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      className="form-control"
                      placeholder="Your Company's Name..."
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone_number" className="fw-bold mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone_number"
                      className="form-control"
                      placeholder="Your Phone Number..."
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="fw-bold mb-1">
                      Address
                    </label>
                    <textarea
                      id="address"
                      placeholder="Your Address..."
                      className="form-control"
                    ></textarea>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="company_logo" className="fw-bold mb-1">
                      Company Logo
                    </label>
                    <input
                      type="file"
                      id="company_logo"
                      className="form-control"
                      placeholder="Your Company's Logo..."
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="company_documents" className="fw-bold mb-1">
                      Company Documents
                    </label>
                    <input
                      type="file"
                      id="company_documents"
                      className="form-control"
                      placeholder="Your Company's Documents..."
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="referred_by" className="fw-bold mb-1">
                      Referred By
                    </label>
                    <input
                      type="text"
                      id="referred_by"
                      className="form-control"
                      placeholder="Referred By..."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </section>
    </Page>
  )
}

export default ChangeProfile
