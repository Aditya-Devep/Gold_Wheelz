import React from 'react';
import '../CSS/Contact.css'

import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <>

      {/* Navbar div  */}
      <div className="navbar bg-dark h-100 p-5">
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Contact Info */}
          <div className="col-12 col-md-5 mb-4" data-aos="fade-right">
            <h2 className="mt-3 mt-md-5">Get in Touch</h2>
            <p className="fs-5 text-secondary">Lorem ipsum dolor amet adipisicing elit.</p>

            {/* Email */}
            <div className="d-flex align-items-center gap-3 mt-4">
              <div
                className="d-flex justify-content-center align-items-center flex-shrink-0"
                style={{
                  backgroundColor: 'orangered',
                  height: 75,
                  width: 75,
                  borderRadius: '50%',
                }}
              >
                <img
                  src="./images/Contact/email.png"
                  alt="email icon"
                  height={40}
                  width={40}
                />
              </div>
              <div>
                <h6 className="fs-4 text-dark mb-1">Email</h6>
                <p className="text-secondary fw-bold mb-0">goldwheelz@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="d-flex align-items-center gap-3 mt-4">
              <div
                className="d-flex justify-content-center align-items-center flex-shrink-0"
                style={{
                  backgroundColor: 'orangered',
                  height: 75,
                  width: 75,
                  borderRadius: '50%',
                }}
              >
                <img
                  src="./images/Contact/phone.png"
                  alt="phone icon"
                  height={40}
                  width={40}
                />
              </div>
              <div>
                <h6 className="fs-4 text-dark mb-1">Phone</h6>
                <p className="text-secondary fw-bold mb-0">+91-8888800000</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="col-12 col-md-7 p-4" data-aos="fade-left"
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            }}
          >
            <form>
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="fs-5 fw-bold">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ backgroundColor: 'lightgrey' }}
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <label className="fs-5 fw-bold">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ backgroundColor: 'lightgrey' }}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="fs-5 fw-bold">Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    style={{ backgroundColor: 'lightgrey' }}
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-md-6">
                  <label className="fs-5 fw-bold">Phone No.</label>
                  <input
                    type="tel"
                    className="form-control"
                    style={{ backgroundColor: 'lightgrey' }}
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  style={{ backgroundColor: 'lightgrey' }}
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                className="btn text-white btn-lg px-4 fw-bold w-100 w-md-auto"
                type="submit"
                style={{ backgroundColor: 'orangered' }}
              >
                SEND MESSAGE
              </button>

              {/* Social Icons */}
              <div className="mt-4 d-flex flex-wrap gap-3">
                {['twitter', 'insta', 'fb', 'phone'].map((icon) => (
                  <div

                    className="border p-2 text-center"
                    style={{ backgroundColor: 'orangered', borderRadius: 50 }}
                  >
                    <NavLink><img src={`./images/Contact/${icon}.png`} alt={icon} height={25} /></NavLink>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>



    </>
  )
}

export default Contact
