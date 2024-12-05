import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import './login.css'
import { useAuth } from '../context/authContext'

const Login = () => {
  const { login } = useAuth()
  const [data, setData] = useState({
    username: '',
    password: '',
    role: '',
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
    if (data.username && data.password) {
      login({ username: data.username, role: data.role })
    }
  }

  return (
    <div className="login">
      <section className="h-100 login-form" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10 pb-5">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="mt-5">
                        <h4 className="">Sign In</h4>
                        <p
                          className="small text-muted"
                          style={{ fontWeight: '600' }}
                        >
                          to access your account
                        </p>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3 mt-3">
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter Username"
                            name="username"
                            required
                            value={data.username}
                            onChange={handleChange}
                          />
                          <label htmlFor="username">Username</label>
                        </div>

                        <div className="form-floating mb-3 mt-3">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Password"
                            name="password"
                            required
                            value={data.password}
                            onChange={handleChange}
                          />
                          <label htmlFor="password">Password</label>
                        </div>

                        <div className="form-floating mb-3 mt-3">
                          <select
                            className="form-select"
                            id="role"
                            name="role"
                            required
                            value={data.role}
                            onChange={handleChange}
                          >
                            <option value="">-- select --</option>
                            <option value="Admin">Admin</option>
                            <option value="Agent">Agent</option>
                            <option value="Staff">Staff</option>
                          </select>
                          <label htmlFor="role" className="form-label">
                            User Type:
                          </label>
                        </div>

                        <button
                          className="btn btn-primary w-100 mb-3"
                          type="submit"
                        >
                          Log in
                        </button>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <a href="/register">Register</a>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* login-custom-col */}
                  <div className="col-lg-6 d-flex align-items-center border-start border-light-subtle">
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

export default Login
