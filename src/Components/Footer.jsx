import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>

    {/* Website Info  */}
     <footer id='foot'>
        <div className="container">
          <div className="col-md-12 ">
            <div className="row ">
              <div className="col-md-6 p-5 mt-5">
                <div className='d-flex gap-3'>
                <img src="/images/logo.png" alt="" height={40} /> <span><h3 className='text-light'> Gold Wheelz</h3></span>
                </div>
                <h5 className='text-light mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt dolore quas.consectetur adipisicing elit</h5>
                <div className='my-3'>
                  <NavLink to='/'><img src="/images/twitter.png" alt="" height={25} className='mx-2' /></NavLink>
                  <NavLink to='/'><img src="/images/insta.png" alt="" height={25} className='mx-2' /></NavLink>
                  <NavLink to='/'><img src="/images/fb.png" alt="" height={25} className='mx-2' /></NavLink>
                  <NavLink to='/'><img src="/images/call.png" alt="" height={25} className='mx-2' /></NavLink>
                </div>
              </div>

              {/* website info end  */}

              {/* Newslater */}
              <div className="col-md-6  text-light p-5 mt-5">
                <h4>Subscribe to our Newsletter</h4>
                <input type="email" name="email" id="email" className='form-control h-25 w-75 text-center mt-3' placeholder='example@gmail.com' />
                <button type="submit" className='btn  mt-4 btn-lg fw-bold' style={{ backgroundColor: 'orangered' }}>Submit</button>
              </div>

              {/* Newslater end  */}
            </div>
          </div>
          <hr className='text-light fs-2'></hr>
        </div>

        <div className="container-fluid" style={{backgroundColor:'black'}}>
        <div className="container ">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <h4 className='text-light mt-5'>Pages</h4>
                <NavLink to='/' style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Home</h5></NavLink>
                <NavLink to='/about' style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>About Us</h5></NavLink>
                <NavLink to='' style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Our Fleet</h5></NavLink>
                <NavLink to='/contact' style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Contact Us</h5></NavLink>
              </div>

              <div className="col-md-3">
                <h4 className='text-light mt-5'>Template Pages</h4>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Cars Template</h5></NavLink>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Cars Type Template</h5></NavLink>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Cars Location Template</h5></NavLink>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Brand Car Template</h5></NavLink>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Features Template</h5></NavLink>
              </div>

              <div className="col-md-3">
                <h4 className='text-light mt-5'>Utility Pages</h4>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Password Protected</h5></NavLink>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>404 Not Found</h5></NavLink>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Style Guide</h5></NavLink>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Licenses</h5></NavLink>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Changelog </h5></NavLink>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'>Instructions </h5></NavLink>
              </div>

              <div className="col-md-3">
                <h4 className='text-light mt-5'>Get in Touch</h4>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'> +91-8888800000</h5></NavLink>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'> goldwheelz@gmail.com</h5></NavLink>
                <NavLink style={{ textDecoration: 'none' }}><h5 className='text-light my-4'> Pune </h5></NavLink>
              </div>
            </div>
          </div>
          <hr className='text-light fs-2'></hr>
        </div>
        </div>

        <div className="container my-5" style={{backgroundColor:'black'}}>
          <h6 className='text-light'>Copyright <i class="bi bi-c-circle"></i> Gold Wheelz | Powered by <NavLink style={{ color: 'orangered' }}>
            Adi's Sites </NavLink> | Designed by <NavLink style={{ color: 'orangered' }}> Developer </NavLink> </h6>
        </div>
      </footer>
    
    </>
  )
}

export default Footer
