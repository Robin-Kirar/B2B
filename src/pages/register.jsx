import { useState } from 'react'

const Register = () => {
  const [data, setData] = useState({
    username: '',
    company_name: '',
    phoneno: '',
    address: '',
    company_documents: null,
    company_logo: null,
    reffered_by: '',
    role: '',
    email: '',
    password: '',
    confirm_password: '',
  })

  const handleChange = ({ currentTarget }) => {
    const { name, value, type } = currentTarget
    console.log(type == 'file' ? currentTarget.files[0] : value)

    setData((item) => ({
      ...item,
      [name]: type == 'file' ? currentTarget.files[0] : value,
    }))
  }
  const handleSubmit = () => {
    console.log(data)
  }

  return (
    <div className="login">
      <section className="h-100 login-form" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10 pb-5">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="mt-5">
                        <h4 className="">Register</h4>
                        <p
                          className="small text-muted"
                          style={{ fontWeight: '600' }}
                        >
                          to create your account
                        </p>
                      </div>

                      <div className="myForm">
                        <div className="row g-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-2 mt-2">
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter Username"
                                name="username"
                                value={data.username}
                                onChange={handleChange}
                              />
                              <label htmlFor="username">Username</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-2 mt-2">
                              <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter Email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                              />
                              <label htmlFor="email">Email</label>
                            </div>
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-2 mt-2">
                              <input
                                type="text"
                                className="form-control"
                                id="company_name"
                                placeholder="Enter Company Name"
                                name="company_name"
                                value={data.company_name}
                                onChange={handleChange}
                              />
                              <label htmlFor="company_name">Company Name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-2 mt-2">
                              <input
                                type="text"
                                className="form-control"
                                id="phoneno"
                                placeholder="Enter Phone"
                                name="phoneno"
                                maxLength="10"
                                value={data.phoneno}
                                onChange={handleChange}
                              />
                              <label htmlFor="phoneno">Phone Number</label>
                            </div>
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-md-12">
                            <div className="form-floating mb-2 mt-2">
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder="Enter Address"
                                name="address"
                                value={data.address}
                                onChange={handleChange}
                              />
                              <label htmlFor="address">Address</label>
                            </div>
                          </div>
                        </div>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-2 mt-2">
                              <input
                                type="text"
                                className="form-control"
                                id="reffered_by"
                                placeholder="Enter Reffered By"
                                name="reffered_by"
                                value={data.reffered_by}
                                onChange={handleChange}
                              />
                              <label htmlFor="reffered_by">Reffered By</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-2 mt-2">
                              <select
                                className="form-select"
                                id="role"
                                name="role"
                                value={data.role}
                                onChange={handleChange}
                              >
                                <option value="Agent">Agent</option>
                                <option value="Staff">Staff</option>
                              </select>
                              <label htmlFor="role" className="form-label">
                                User Type:
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-2 mt-2">
                              <label
                                htmlFor="company_documents"
                                className="text-muted mb-2"
                              >
                                Company Documnets
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="company_documents"
                                placeholder="Enter Company Documnets"
                                name="company_documents"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-2 mt-2">
                              <label
                                htmlFor="company_logo"
                                className="text-muted mb-2"
                              >
                                Company Logo
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                id="company_logo"
                                placeholder="Enter Company Logo"
                                name="company_logo"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row g-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-2 mt-2">
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                              />
                              <label htmlFor="password">Password</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-2 mt-2">
                              <input
                                type="password"
                                className="form-control"
                                id="confirm_password"
                                placeholder="Confirm Password"
                                name="confirm_password"
                                value={data.confirm_password}
                                onChange={handleChange}
                              />
                              <label htmlFor="confirm_password">
                                Confirm Password
                              </label>
                            </div>
                          </div>
                        </div>

                        <button
                          className="btn btn-primary w-100 mb-2 mt-2 py-3"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Register
                        </button>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Already have an account?</p>
                          <a href="/login">Login</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* login-custom-col */}
                  <div className="col-lg-4 d-flex align-items-center border-start border-light-subtle">
                    <div className="text-center text-muted px-3 py-4 p-md-5 mx-md-4">
                      <img
                        src="https://thailand.k1travels.com/admin/images/l1.png"
                        className="mb-4 w-100"
                        style={{ maxWidth: '200px' }}
                        alt="logo"
                      />
                      <h4 className="mb-2 h5">System Features</h4>
                      <p className="small mb-0">
                        CRM system for query management proposal itinerary,
                        client, marketing and much more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register