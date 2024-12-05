import { useState, useContext, useEffect } from 'react'

/* -- Modal -- */
import Modal from '../../components/modal'

import useFetch from '../../hooks/useFetch'
import { NavLinkActivatorContext } from '../../context/navLinkActivatorContext'

import './common.css'
import Page from '../../components/page'

const Hotels = () => {
  /* -- Nav Activator -- */

  const { setActiveLink } = useContext(NavLinkActivatorContext)
  useEffect(() => {
    setActiveLink('settings')
  }, [])

  /* -- Table Logic -- */
  let output, outputData, filteredData
  let totalPageNo = 0

  /* -- data fetch Hook -- */
  const { data, loading } = useFetch('/data/dummydata.json')

  /* -- state variables -- */
  const [searchValue, setSearchValue] = useState('')
  let [perPage, setPerPage] = useState(10)
  let [currPageNo, setCurrPageNo] = useState(0)

  /* -- render data -- */
  if (!loading) {
    // filtering
    filteredData = data.filter((item) =>
      item.Name.toLowerCase().includes(searchValue.toLowerCase())
    )

    totalPageNo = Math.ceil(filteredData.length / perPage)

    // pagination
    outputData = filteredData.slice(
      perPage * currPageNo,
      perPage * currPageNo + perPage
    )

    // render
    output = outputData.map((item) => (
      <tr key={item.ID}>
        <td>{item.Name}</td>
        <td>{item.Country}</td>
        <td style={{ width: '1%' }}>
          <button
            className="btn"
            onClick={() => {
              handleEditable(item)
            }}
          >
            <i className="fa-solid fa-pencil"></i>
          </button>
        </td>
      </tr>
    ))
  } else {
    output = (
      <tr>
        <td>Loading...</td>
      </tr>
    )
  }

  /* -- functions -- */

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    setCurrPageNo(0)
  }

  const handlePageInc = () => {
    if (currPageNo + 1 < totalPageNo) {
      setCurrPageNo((item) => item + 1)
    }
  }
  const handlePageDec = () => {
    if (currPageNo > 0) {
      setCurrPageNo((item) => item - 1)
    }
  }

  /* -- Modal -- */
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [importModalOpen, setImportModalOpen] = useState(false)

  // Function to handle opening the modal
  const handleAddModalOpen = () => setAddModalOpen(true)
  const handleImportModalOpen = () => setImportModalOpen(true)

  // Function to handle closing the modal
  const handleAddModalClose = () => setAddModalOpen(false)
  const handleEditModalClose = () => setEditModalOpen(false)
  const handleImportModalClose = () => setImportModalOpen(false)

  /* -- Add Form Data -- */
  // ** Edit data here
  const [addFormData, setAddFormData] = useState({
    name: '',
    hotel_type: '',
    address: '',
    contact_no: '',
    tariff: '',
    destination_id: '',
    room_types: '',
    meals: '',
  })
  const handleAddFormData = ({ currentTarget }) => {
    setAddFormData((item) => ({
      ...item,
      [currentTarget.name]: currentTarget.value,
    }))
  }
  const submitAddFormData = () => {
    console.log(addFormData)
  }

  /* -- Edit Form Data -- */
  // ** Edit data here
  const [editFormData, setEditFormData] = useState({
    id: null,
    name: '',
    country: '',
  })
  // ** Edit data here
  const handleEditable = (data) => {
    setEditFormData((item) => ({
      ...item,
      id: data.ID,
      name: data.Name,
      country: data.Country,
    }))
    setEditModalOpen(true)
  }
  const handleEditFormData = ({ currentTarget }) => {
    setEditFormData((item) => ({
      ...item,
      [currentTarget.name]: currentTarget.value,
    }))
  }
  const submitEditFormData = () => {
    // ** Edit
    console.log(editFormData)
  }

  return (
    <Page>
      <section className="display-section">
        <Modal
          open={addModalOpen}
          handleClose={handleAddModalClose}
          title={'Add Hotel'}
        >
          <form onSubmit={submitAddFormData}>
            <div className="container p-3 border border-bottom border-light-subtle">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Hotel Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Hotel name..."
                  name="name"
                  value={addFormData.name}
                  onChange={handleAddFormData}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="hotel_type" className="form-label">
                  Hotel Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hotel_type"
                  placeholder="Hotel Type..."
                  name="hotel_type"
                  value={addFormData.hotel_type}
                  onChange={handleAddFormData}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Hotel Address..."
                  name="address"
                  value={addFormData.address}
                  onChange={handleAddFormData}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact_no" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contact_no"
                  placeholder="Contact Number..."
                  name="contact_no"
                  value={addFormData.contact_no}
                  onChange={handleAddFormData}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tariff" className="form-label">
                  Tariff
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tariff"
                  placeholder="Tariff..."
                  name="tariff"
                  value={addFormData.tariff}
                  onChange={handleAddFormData}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="destination_id" className="form-label">
                  Destination
                </label>
                <select
                  className="form-control"
                  name="destination_id"
                  id="destination_id"
                  value={addFormData.destination_id}
                  onChange={handleAddFormData}
                >
                  <option value="">-- select --</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="room_type" className="form-label">
                  Room Type
                </label>
                <select
                  className="form-control"
                  name="room_type"
                  id="room_type"
                  value={addFormData.room_type}
                  onChange={handleAddFormData}
                >
                  <option value="">-- select --</option>
                </select>
              </div>
            </div>
            <div className="container p-3">
              <button className="btn btn-primary" type="submit">
                Save
              </button>
            </div>
          </form>
        </Modal>
        <Modal
          open={editModalOpen}
          handleClose={handleEditModalClose}
          title={'Edit Hotel'}
        >
          <div className="container p-3 border border-bottom border-light-subtle">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Hotel..."
                name="name"
                value={editFormData.name}
                onChange={handleEditFormData}
              />
            </div>
            <div className="">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                placeholder="Country..."
                name="country"
                value={editFormData.country}
                onChange={handleEditFormData}
              />
            </div>
          </div>
          <div className="container p-3">
            <button className="btn btn-primary" onClick={submitEditFormData}>
              Save
            </button>
          </div>
        </Modal>
        <Modal
          open={importModalOpen}
          handleClose={handleImportModalClose}
          title={'Import Hotels Excel'}
        >
          <div className="container p-3 border border-bottom border-light-subtle">
            <div className="">
              <label htmlFor="name" className="form-label">
                Import Excel
              </label>
              <input
                type="file"
                className="form-control"
                id="name"
                placeholder="Hotel..."
                name="name"
                value={editFormData.name}
                onChange={handleEditFormData}
              />
            </div>
          </div>
          <div className="container p-3">
            <button className="btn btn-primary" onClick={submitEditFormData}>
              Save
            </button>
          </div>
        </Modal>
        <div className="display-header">
          <h2 className="display-title">Hotels</h2>
          <input
            type="text"
            className="form-control display-search"
            placeholder="search by name..."
            onChange={handleSearch}
          />
          <div className="btn-group">
            <button
              className="btn btn-sm btn-secondary me-1"
              onClick={handleImportModalOpen}
            >
              Import
            </button>
            <a
              href=""
              className="btn btn-sm btn-secondary me-1"
              download="Hotels"
            >
              Export
            </a>
            <button
              className="btn btn-sm btn-primary"
              onClick={handleAddModalOpen}
            >
              Add Hotel
            </button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {output.length > 0 ? (
                output
              ) : (
                <tr>
                  <td colSpan="3" className="text-center">
                    No record found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="display-footer">
            <small>
              Total records: {output.length > 0 ? filteredData.length : 0}
            </small>
            <ul className="pagination mt-4">
              <li className="page-item">
                <button
                  className={`page-link ${currPageNo <= 0 && 'disabled'}`}
                  onClick={handlePageDec}
                >
                  Prev
                </button>
              </li>
              <li className="page-item">
                <button
                  className={`page-link ${
                    currPageNo + 1 >= totalPageNo && 'disabled'
                  }`}
                  onClick={handlePageInc}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Hotels
