import { useContext, useEffect } from 'react'
import { NavLinkActivatorContext } from '../context/navLinkActivatorContext'
import { Link } from 'react-router-dom'

/* -- components -- */
import './dashboard.css'
import Page from '../components/page'
import Table from '../components/table'

const Dashboard = () => {
  /* -- contexts -- */
  const { setActiveLink } = useContext(NavLinkActivatorContext)
  useEffect(() => {
    setActiveLink('dashboard')
  }, [])

  return (
    <Page>
      <div className="dashboard">
        <marquee className="sliding-txt">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </marquee>
        <section className="dashboard-section">
          <h1 className="dashboard-title">Dashboard</h1>
          <div className="dashboard-grid-container">
            <div className="dashboard-grid">
              <article className="dashboard-grid-card">
                <i className="fa-regular fa-circle-xmark icon text-danger"></i>
                <span className="nums">3</span>
                <small>Unpaid Booking</small>
              </article>
              <article className="dashboard-grid-card">
                <i className="fa-regular fa-circle-check icon text-success"></i>
                <span className="nums">3</span>
                <small>Unpaid Booking</small>
              </article>
              <article className="dashboard-grid-card">
                <i className="fa-regular fa-file-lines icon text-primary"></i>
                <span className="nums">3</span>
                <small>Unpaid Booking</small>
              </article>
              <article className="dashboard-grid-banner">
                <p className="title">
                  Explore
                  <br />
                  <span>Thailand</span>
                </p>
                <Link
                  to={''}
                  className="btn btn-responsive rounded-4 text-primary bg-white py-2 px-4"
                >
                  Get Quotation
                </Link>
              </article>
              <article className="dashboard-grid-details">
                <img
                  src="https://thailand.k1travels.com/admin/images/l1.png"
                  alt="B2B"
                  className="detail-logo"
                />
                <div className="detail-cont">
                  <h4>Account Manager</h4>
                  <p>Firstname Surname</p>
                  <p>9876543210</p>
                </div>
                <div className="detail-cont">
                  <h4>Support Team</h4>
                  <p>+91 9876543210</p>
                  <p>someone@mail.to</p>
                </div>
                <div className="detail-cont">
                  <h4>Group Desk</h4>
                  <p>+91 9876543210</p>
                  <p>someone@mail.to</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <h1 className="dashboard-title">Upcoming Booking</h1>

          <div className="mt-4">
            <Table dataUrl="/data/dummydata.json" />
          </div>
        </section>
      </div>
    </Page>
  )
}

export default Dashboard
