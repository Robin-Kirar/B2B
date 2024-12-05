import Page from '../components/page'

const AddWallet = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Page>
      <>
        <div className="title">Add Wallet Balance</div>
        <section className="page-section">
          <div className="px-2 py-2 px-md-4 mb-4">
            <div>
              <p className="mb-2">
                <span className="fw-bold">Company Name:</span> Tripocio Carnival
                Pvt Ltd Indore
              </p>
              <p className="mb-2">
                <span className="fw-bold">Name:</span> Tripocio Carnival Pvt Ltd
                Indore
              </p>
              <p className="mb-2">
                <span className="fw-bold">Email:</span> ajeem@tripocio.com
              </p>
              <p className="mb-2">
                <span className="fw-bold">Address:</span> Tripocio Carnival Pvt
                Ltd Indore
              </p>
              <p className="mb-2">
                <span className="fw-bold">Contact Person Name:</span> Ajeem
              </p>
              <p className="mb-2">
                <span className="fw-bold">Mobile Number:</span> 7746821792
              </p>
            </div>

            <div className="mt-5 p-3 shadow rounded">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-7">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3 d-flex">
                      <div className="col-lg-3 col-md-12">
                        <label htmlFor="name" className="form-label">
                          Amount
                        </label>
                      </div>
                      <div className="col-lg-9 col-md-12">
                        {' '}
                        <input type="text" className="form-control" id="name" />
                      </div>
                    </div>
                    <div className="mb-3 d-flex">
                      <div className="col-lg-3 col-md-12">
                        <label htmlFor="email" className="form-label">
                          Date
                        </label>
                      </div>
                      <div className="col-lg-9 col-md-12">
                        <input
                          type="date"
                          id="travel_date"
                          className="form-control mt-1"
                        />
                      </div>
                    </div>
                    <div className="mb-3 d-flex">
                      <div className="col-lg-3 col-md-12">
                        <label htmlFor="phone" className="form-label">
                          Description
                        </label>
                      </div>
                      <div className="col-lg-9 col-md-12">
                        <input type="tel" className="form-control" />
                      </div>
                    </div>
                    <div className="mb-3 d-flex">
                      <div className="col-lg-3 col-md-12">
                        <label htmlFor="phone" className="form-label">
                          Attachment
                        </label>
                      </div>
                      <div className="col-lg-9 col-md-12">
                        <input
                          type="file"
                          name="attachment"
                          id="attachment"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="d-flex">
                      <div className="ml-4 p-2">
                        <button type="submit" className="btn btn-primary">
                          Add Payment
                        </button>
                      </div>
                      <div className="ml-4 p-2">
                        <button type="submit" className="btn btn-primary">
                          Back
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="col-md-12 col-sm-12 col-lg-5">
                  <div>
                    <div className="row">
                      <div className="col-md-6 col-sm-12 col-lg-12">
                        <h4 className="mb-4">INDIAN ACCOUNT</h4>
                        <div className="mb-3 d-flex">
                          <div className="col-lg-5 col-md-12">
                            <label htmlFor="name" className="form-label">
                              <b>UPI Id</b>
                            </label>
                          </div>
                          <div className="col-lg-7 col-md-12">
                            <b>K1travels@hdfcbank</b>
                          </div>
                        </div>
                        <div className="mb-3 d-flex">
                          <div className="col-lg-5 col-md-12">
                            <label htmlFor="name" className="form-label">
                              <b>Bank name</b>
                            </label>
                          </div>
                          <div className="col-lg-7 col-md-12">
                            <b>HDFC BANK</b>
                          </div>
                        </div>
                        <div className="mb-3 d-flex">
                          <div className="col-lg-5 col-md-12">
                            <label htmlFor="name" className="form-label">
                              <b>Account holder name</b>
                            </label>
                          </div>
                          <div className="col-lg-7 col-md-12">
                            <b> K1 TRAVELS PRIVATE LIMITED</b>
                          </div>
                        </div>

                        <div className="mb-3 d-flex">
                          <div className="col-lg-5 col-md-12">
                            <label htmlFor="name" className="form-label">
                              <b>Account number</b>
                            </label>
                          </div>
                          <div className="col-lg-7 col-md-12">
                            <b> 50200095153502</b>
                          </div>
                        </div>
                        <div className="mb-3 d-flex">
                          <div className="col-lg-5 col-md-12">
                            <label htmlFor="name" className="form-label">
                              <b>IFSC Code</b>
                            </label>
                          </div>
                          <div className="col-lg-7 col-md-12">
                            <b> HDFC0000210</b>
                          </div>
                        </div>
                        <div className="mb-3 d-flex">
                          <div className="col-lg-5 col-md-12">
                            <label htmlFor="name" className="form-label">
                              <b>Account Type</b>
                            </label>
                          </div>
                          <div className="col-lg-7 col-md-12">
                            <b>CURRENT</b>
                          </div>
                        </div>
                        <div className="mb-3 d-flex">
                          <div className="col-lg-5 col-md-12">
                            <label htmlFor="name" className="form-label">
                              <b>Branch</b>
                            </label>
                          </div>
                          <div className="col-lg-7 col-md-12">
                            <b> Model Town YNR</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Page>
  )
}
export default AddWallet
