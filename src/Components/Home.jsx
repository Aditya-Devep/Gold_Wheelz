import React from 'react';
import '../CSS/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {

  const numarr = [
    {
      id: 1,
      num: "10+",
      word: "Years of Experience",

    },
    {
      id: 2,
      num: "1000+",
      word: "Happy Clients",
    },
    {
      id: 3,
      num: "200+",
      word: "Vehicles",
    },
    {
      id: 4,
      num: "10+",
      word: "Locations",
    },
  ]

  const car = [
    {
      id: 1,
      img: "/images/bmw.jpg",
      cname: 'BMW M4 Competition',
      year: '2020',
      ccur: 'RS',
      cmoney: '5000',
      cday: '/Day',
      pic1: '/images/avg.svg',
      davg: '5800',
      pic2: '/images/control.svg',
      dcon: 'Automatic',
      pic3: '/images/seats.svg',
      dseat: '4',
      pic4: "/images/baggage.svg",
      dbag: '5',

    },
    {
      id: 2,
      img: "/images/ferrari.jpg",
      year: '2023',
      cname: 'Ferrari 992',
      ccur: 'RS',
      cmoney: '4500',
      cday: '/Day',
      pic1: '/images/avg.svg',
      davg: '5800',
      pic2: '/images/control.svg',
      dcon: 'Manual',
      pic3: '/images/seats.svg',
      dseat: '2',
      pic4: "/images/baggage.svg",
      dbag: '2',

    },
    {
      id: 3,
      img: "/images/RR.jpg",
      cname: 'Range Rover Autobiography',
      year: '2024',
      ccur: 'RS',
      cmoney: '8000',
      cday: '/Day',
      pic1: '/images/avg.svg',
      davg: '5800',
      pic2: '/images/control.svg',
      dcon: 'Automatic',
      pic3: '/images/seats.svg',
      dseat: '4',
      pic4: "/images/baggage.svg",
      dbag: '3',

    },
    {
      id: 4,
      img: "/images/porsche2.jpg",
      year: '2025',
      cname: 'Porsche Cayenne Coupe ',
      ccur: 'RS',
      cmoney: '3500',
      cday: '/Day',
      pic1: '/images/avg.svg',
      davg: '5800',
      pic2: '/images/control.svg',
      dcon: 'Manual',
      pic3: '/images/seats.svg',
      dseat: '5',
      pic4: "/images/baggage.svg",
      dbag: '5',
     

    },
  ]


  const loc = [
    {
      id: 1,
      img: "/images/city1.jpg",
      lname: 'Kharadi'
    },
    {
      id: 2,
      img: "/images/city2.jpg",
      lname: 'Kothrud'

    },
    {
      id: 3,
      img: "/images/city3.jpg",
      lname: 'Lavasa'

    },
    {
      id: 4,
      img: "/images/city4.jpg",
      lname: 'Sarasbaug'

    },
  ]

  const service = [
    {
      id: 1,
      img: '/images/search.png',
      text: 'Browse Our Fleet',
    },
    {
      id: 2,
      img: '/images/Scar.png',
      text: 'Select Your Vehicle',
    },
    {
      id: 3,
      img: '/images/order.png',
      text: 'Submit an Enquiry',
    },
    {
      id: 4,
      img: '/images/drive.png',
      text: 'Pick Up & Drive',
    },
  ]

  // AOS Animation call
  useEffect(() => {
    AOS.init({ duration: 2000 }); // duration in ms
  }, []);

  return (
    <>
      {/* main background div  */}
      <div className="bg-main  d-flex align-items-center justify-content-center text-center text-white" >

        <div className="bgblur container-fluid" style={{ padding: 170, height: '100%', }}>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10" data-aos="fade-right">
              <h1 className="fw-bold display-4 display-md-3 mb-3 mt-5">Explore the Road Ahead</h1>
              <h1 className="fw-bold display-4 display-md-3 mb-4 mt-5">
                with <span style={{ color: 'orangered' }}> <i>Gold Wheelz</i> </span> Rentals
              </h1>
              {/* <p className="fw-semibold fs-5 mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolor,
                <br className="d-none d-md-block" />
                minima dicta vitae neque rem.
              </p>
               */}
            </div>
          </div>
        </div>
      </div>




      {/* main background div-end */}



      {/* service div */}
      <div className="info py-5">
        <div className="container">
          <div className="row">
            {numarr.map((val, index) => (
              <div className="col-12 col-sm-6 col-md-3 mb-4 "  data-aos="fade-up" key={index}>
                <h1 className="fw-bold text-center" style={{ color: 'orangered' }}>
                  {val.num}
                </h1>
                <h5 className="text-dark text-center fw-bold">{val.word}</h5>
                <p className="text-center my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eos!
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* service div end  */}



      {/* Feature Car div  */}
      <div className="cars py-5">
        <div className="cards">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <h2 className="fs-1">Featured Cars</h2>
              </div>
              <div className="col-12 col-md-6 text-md-end">
               <NavLink to='/showdetails'> <button className="btn btn-lg text-light fw-bold" style={{ backgroundColor: 'orangered' }}>
                  SHOW Details
                </button> </NavLink>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <div className="row g-4">
              {
                car.map((val, index) => (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up" key={index}>
                    <div className="card h-100" style={{ borderRadius: 20 }}>
                      <div className="card-body ">
                        <div
                          className="position-absolute px-3 py-1 text-light"
                          style={{
                            right: '20px',
                            top: '20px',
                            borderRadius: 30,
                            backgroundColor: 'orangered',
                            fontSize: '0.9rem',
                          }}
                        >
                          {val.year}
                        </div>
                        <img
                          src={val.img}
                          alt={val.cname}
                          className="img-fluid w-100"
                          style={{ borderRadius: 20, height: '200px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="card-body text-center">
                        <h6>{val.cname}</h6>
                        <div>
                          <span>{val.ccur}</span>
                          <span className="fw-bold fs-4"> {val.cmoney}</span>
                          <span>{val.cday}</span>
                        </div>

                        <div
                          className="px-2 py-1 mt-3"
                          style={{ backgroundColor: 'rgba(1,1,1,0.05)', borderRadius: 20 }}
                        >
                          <div className="d-flex justify-content-between mt-2">
                            <img src={val.pic1} alt="car_info" height="33px" />
                            <img src={val.pic2} alt="car_info" height="33px" />
                            <img src={val.pic3} alt="car_info" height="33px" />
                            <img src={val.pic4} alt="car_info" height="33px" />
                          </div>
                          <div className="d-flex justify-content-between mt-1 text-dark" style={{ fontSize: 'small' }}>
                            <span>{val.davg}</span>
                            <span>{val.dcon}</span>
                            <span>{val.dseat}</span>
                            <span>{val.dbag}</span>
                          </div>
                        </div>

                      
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* Feature Car div-end*/}

  


      {/* loaction div  */}
      <div className="loca my-5">
                <div className="container">
                    <h1 className="fs-1 text-center text-md-start mb-4">Our Locations</h1>
                    <div className="row g-4">
                        {loc.map((val, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 text-center">
                                <div className="location-card p-3 h-100 d-flex flex-column align-items-center justify-content-center rounded-4 shadow-sm">
                                    <img
                                        src={val.img}
                                        alt={val.lname}
                                        className="img-fluid rounded-3 mb-3"
                                        style={{ height: 200, width: '100%', objectFit: 'cover' }}
                                    />
                                    <span className="fw-bold text-secondary fs-5">{val.lname}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

      {/* location div-end */}


      {/* values div  */}
      <div className="service py-5">
        <div className="container">
          <div className="row g-4">
            {service.map((val, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center"  data-aos="fade-up" key={index}>
                <div className="Rimage">
                  <img src={val.img} alt="" height={60} className="my-3" />
                </div>
                <h4 className="my-3">{val.text}</h4>
                <p className="px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* values div - end  */}





    </>
  )
}

export default Home
