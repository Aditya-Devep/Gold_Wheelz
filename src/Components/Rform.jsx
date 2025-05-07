import React from 'react';
import '../CSS/Rform.css';
const Rform = () => {
    return (
        <>
            <div className="navbar bg-dark h-100 p-5">

            </div>

            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100"  >
                <div
                    className="container p-4" data-aos="fade-up"
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                        maxWidth: 800,
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    <form>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <label className='fs-5 fw-bold'>First Name</label>
                                <input type="text" className="form-control bg-light" placeholder="First Name" />
                            </div>
                            <div className="col-md-6">
                                <label className='fs-5 fw-bold'>Last Name</label>
                                <input type="text" className="form-control bg-light" placeholder="Last Name" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <label className='fs-5 fw-bold'>Email ID</label>
                                <input type="email" className="form-control bg-light" placeholder="Email Address" />
                            </div>
                            <div className="col-md-6">
                                <label className='fs-5 fw-bold'>Phone No.</label>
                                <input type="tel" className="form-control bg-light" placeholder="Phone Number" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className='fs-5 fw-bold'>Choose Your Car</label>
                            <select name="Ccar" className="form-control bg-light" id="Ccar">
                                <option value="None">Choose Car</option>
                                <option value="BMW">BMW</option>
                                <option value="Porsche">Porsche</option>
                                <option value="Audi">Audi</option>
                                <option value="Lamborgini">Lamborgini</option>
                            </select>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <label className='fs-5 fw-bold'>Enter Aadhar card no.</label>
                                <input type="text" className="form-control bg-light" placeholder="Aadhar Card No." />
                            </div>
                            <div className="col-md-6">
                                <label className='fs-5 fw-bold'>Driving License No.</label>
                                <input type="text" className="form-control bg-light" placeholder="Driving License No." />
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <label className='fs-5 fw-bold'>Choose Date</label>
                                <input type="date" className="form-control bg-light" placeholder="Aadhar Card No." />
                            </div>
                            <div className="col-md-6">
                                <label className='fs-5 fw-bold'>Payment Mode</label>
                                <select name="Ccar" className="form-control bg-light" id="Ccar">
                                <option value="None">Select</option>
                                <option value="UPI">UPI</option>
                                <option value="Cash">Cash</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Cheque">Cheque</option>
                            </select>
                            </div>
                        </div>

                        <div className='text-center mb-4'>
                            <button className="btn text-white btn-lg px-4 fw-bold" type="submit" style={{ backgroundColor: 'orangered' }}>
                                Submit Details
                            </button>
                        </div>

                       

                    </form>
                </div>
            </div>

        </>

    )
}

export default Rform
