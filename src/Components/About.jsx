import React from 'react';
import '../CSS/About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const About = () => {

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

    const values = [
        {
            id: 1,
            img: './images/About/Aex.png',
            text: 'Excellence',
        },
        {
            id: 2,
            img: './images/About/Arelia.png',
            text: 'Reliability',
        },
        {
            id: 3,
            img: './images/About/Afford.png',
            text: 'Affordability',
        },
        {
            id: 4,
            img: './images/About/Aloyal.png',
            text: 'Loyalty',
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

    // AOS Animation call
    useEffect(() => {
        AOS.init({ duration: 2000 }); // duration in ms
    }, []);
    return (

        <>
            {/* Main */}
            <div className="bgmain">
                <div className="bgblur text-center text-white py-5">
                    <div id="about" data-aos="fade-right">
                        <h1 className="fs-1 fw-bold">
                            About <span style={{ color: 'orangered' }}>Gold Wheels</span>
                        </h1>
                        <p className="my-3 fs-5 px-3 px-md-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia eligendi nemo officia.
                        </p>
                    </div>
                </div>
            </div>

            {/* Journey & Mission */}
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h1>Our Journey</h1>
                        <p className="fs-5 text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae maiores doloremque, quia atque nulla blanditiis repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae maiores doloremque, quia atque nulla blanditiis repellendus.
                        </p>

                        <h1 className="mt-4">Our Mission</h1>
                        <p className="fs-5 text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae maiores doloremque, quia atque nulla blanditiis repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae maiores doloremque, quia atque nulla blanditiis repellendus.
                        </p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="./images/About/Acras.jpg" alt="" className="img-fluid rounded-4" />
                    </div>
                </div>
            </div>

            {/* Customer Info */}
            <div className="info1 mt-5 py-5 bg-light">
                <div className="container">
                    <div className="row text-center">
                        {numarr.map((val, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-3 mb-4" data-aos="fade-up">
                                <h1 className="fw-bold" style={{ color: 'orangered' }}>{val.num}</h1>
                                <h5 className="fw-bold text-dark">{val.word}</h5>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Founder Section */}
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center mb-4 mb-md-0">
                        <img src="./images/About/person.jpg" alt="" className="img-fluid rounded-4" />
                    </div>
                    <div className="col-md-6">
                        <h1>Meet Our Founder</h1>
                        <p className="fs-5 text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae maiores doloremque, quia atque nulla blanditiis repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae maiores doloremque, quia atque nulla blanditiis repellendus.
                        </p>

                        <h1 className="mt-4">Leadership & Expertise</h1>
                        <p className="fs-5 text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae maiores doloremque, quia atque nulla blanditiis repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae maiores doloremque, quia atque nulla blanditiis repellendus.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="values bg-light py-5">
                <div className="container">
                    <div className="row text-center">
                        {values.map((val, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-3 mb-4" data-aos="fade-up">
                                <div className="Valimage d-flex align-items-center justify-content-center mx-auto mb-3">
                                    <img src={val.img} alt="Values" height={60} className="img-fluid" />
                                </div>
                                <h4>{val.text}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Locations */}
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



        </>
    )
}

export default About
