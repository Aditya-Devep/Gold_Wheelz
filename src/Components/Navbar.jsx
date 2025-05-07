import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute w-100 z-1">
      <div className="container-fluid">
        <NavLink className="navbar-brand ps-5" to="#">
          <span className='d-flex gap-4'><img src="/images/logo.png" alt="logo" height={70} /><h1 className="brand-name fw-bold  display-3 fw-bold" style={{color:'gold'}}>Gold Wheelz</h1></span>
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink  className="{({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} nav-link text-light fs-5 fw-bold mx-2" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="{({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} nav-link text-light fs-5 fw-bold mx-2" to="/about">About</NavLink></li>

            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle fs-5 fw-bold text-light" id="pagesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </button>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li><h6 className="{({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} dropdown-header ">Select a Page</h6></li>
                <li><NavLink className="dropdown-item " to="/">Home</NavLink></li>
                <li><NavLink className="dropdown-item" to="about">About Us</NavLink></li>
                <li><NavLink className="dropdown-item" to="contact">Contact Us</NavLink></li>
              </ul>
            </li>

            <li className="nav-item"><NavLink className="{({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} nav-link text-light fs-5 fw-bold mx-2" to="/contact">Contact Us</NavLink></li>
            <li className="nav-item pe-5">
              <NavLink to="form">
                <button className="btn btn-lg text-light fw-semibold" style={{ backgroundColor: 'orangered' }}>
                  RENT NOW
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
