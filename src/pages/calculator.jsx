import { useContext, useEffect } from 'react'
import { NavLinkActivatorContext } from '../context/navLinkActivatorContext'

import Page from '../components/page'

const Calculator = () => {
  /* -- contexts -- */
  const { setActiveLink } = useContext(NavLinkActivatorContext)
  useEffect(() => {
    setActiveLink('')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Page>
      <>
        <div className="title">Make your package</div>
        <section className="page-section">
          <form onSubmit={handleSubmit}>
            <div className="px-2 py-2 px-md-4 mb-4">
              <div className="title-line">
                <span>Basic info</span>
              </div>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="col mb-3 mb-md-4">
                  <label htmlFor="customer_number" className="fw-bold">
                    Customer Number
                  </label>
                  <input
                    type="text"
                    id="customer_number"
                    className="form-control mt-1"
                  />
                </div>
                <div className="col mb-3 mb-md-4">
                  <label htmlFor="phone_number" className="fw-bold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone_number"
                    className="form-control mt-1"
                  />
                </div>
                <div className="col mb-3 mb-md-4">
                  <label htmlFor="travel_date" className="fw-bold">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    id="travel_date"
                    className="form-control mt-1"
                  />
                </div>
                <div className="col mb-3 mb-md-4">
                  <label htmlFor="nights_spending" className="fw-bold">
                    Nights Spending
                  </label>
                  <select id="nights_spending" className="form-control mt-1">
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                  </select>
                </div>
                <div className="col mb-3 mb-md-4">
                  <label htmlFor="adults" className="fw-bold">
                    Adults
                  </label>
                  <select id="adults" className="form-control mt-1">
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                  </select>
                </div>
                <div className="col mb-3 mb-md-4">
                  <label htmlFor="children" className="fw-bold">
                    Children
                  </label>
                  <select id="children" className="form-control mt-1">
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Hotel Info */}
            <div className="px-2 py-2 px-md-4 mb-4">
              <div className="title-line">
                <span>Hotel info</span>
              </div>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="col mb-3 mb-md-4">
                  <label htmlFor="hotel_city" className="fw-bold">
                    City
                  </label>
                  <select id="hotel_city" className="form-control mt-1">
                    <option value="">-- select --</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="hotel_hotel" className="fw-bold">
                    Hotel
                  </label>
                  <select id="hotel_hotel" className="form-control mt-1">
                    <option value="">-- select --</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="hotel_category" className="fw-bold">
                    Category
                  </label>
                  <select id="hotel_category" className="form-control mt-1">
                    <option value="">-- select --</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="hotel_rooms" className="fw-bold">
                    Rooms
                  </label>
                  <select id="hotel_rooms" className="form-control mt-1">
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="hotel_nights" className="fw-bold">
                    Nights
                  </label>
                  <select id="hotel_nights" className="form-control mt-1">
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="hotel_adults" className="fw-bold">
                    Adults
                  </label>
                  <select id="hotel_adults" className="form-control mt-1">
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="hotel_children" className="fw-bold">
                    Children
                  </label>
                  <select id="hotel_children" className="form-control mt-1">
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="check_in_date" className="fw-bold">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    id="check_in_date"
                    className="form-control mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Transport Info */}
            <div className="px-2 py-2 px-md-4 mb-4">
              <div className="title-line">
                <span>Transport info</span>
              </div>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col mb-3 mb-md-4">
                  <label htmlFor="transport_city" className="fw-bold">
                    City
                  </label>
                  <select id="transport_city" className="form-control mt-1">
                    <option value="">-- select --</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="transport_transport" className="fw-bold">
                    Transport
                  </label>
                  <select
                    id="transport_transport"
                    className="form-control mt-1"
                  >
                    <option value="">-- select --</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="no_of_people" className="fw-bold">
                    No Of People
                  </label>
                  <select id="no_of_people" className="form-control mt-1">
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="transport_date" className="fw-bold">
                    Date
                  </label>
                  <input
                    type="date"
                    id="transport_date"
                    className="form-control mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Sightseeing Info */}
            <div className="px-2 py-2 px-md-4 mb-4">
              <div className="title-line">
                <span>Sightseeing info</span>
              </div>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col mb-3 mb-md-4">
                  <label htmlFor="sightseeing_city" className="fw-bold">
                    City
                  </label>
                  <select id="sightseeing_city" className="form-control mt-1">
                    <option value="">-- select --</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="sightseeing_sightseeing" className="fw-bold">
                    Sightseeing
                  </label>
                  <select
                    id="sightseeing_sightseeing"
                    className="form-control mt-1"
                  >
                    <option value="">-- select sightseeing --</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="sightseeing_adults" className="fw-bold">
                    No Of Adult
                  </label>
                  <select id="sightseeing_adults" className="form-control mt-1">
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="sightseeing_children" className="fw-bold">
                    No Of Children
                  </label>
                  <select
                    id="sightseeing_children"
                    className="form-control mt-1"
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="sightseeing_date" className="fw-bold">
                    Date
                  </label>
                  <input
                    type="date"
                    id="sightseeing_date"
                    className="form-control mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Remarks */}
            <div className="px-2 py-2 px-md-4 mb-4">
              <div className="row row-cols-1">
                <div className="col mb-3 mb-md-4">
                  <label htmlFor="remarks" className="fw-bold">
                    Remarks
                  </label>
                  <textarea
                    className="form-control"
                    style={{ resize: 'vertical' }}
                    name=""
                    id="remarks"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="px-2 py-2 px-md-4 mb-4">
              <div className="title-line">
                <span>Pricing</span>
              </div>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="col mb-3 mb-md-4">
                  <label htmlFor="inr_rate" className="fw-bold">
                    INR Rate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inr_rate"
                    value="2.60"
                    disabled
                  />
                </div>

                <div className="col mb-3 mb-md-4">
                  <label htmlFor="service_charge" className="fw-bold">
                    Service Charge
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="service_charge"
                  />
                </div>
              </div>
            </div>

            <div className="px-2 py-2 px-md-4 mb-4">
              <button className="btn btn-primary" type="submit">
                Calculate
              </button>
            </div>
          </form>
        </section>
      </>
    </Page>
  )
}
export default Calculator
