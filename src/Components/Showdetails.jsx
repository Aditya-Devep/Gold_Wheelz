import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Navigate} from 'react-router-dom'


const Showdetails = () => {

    const Details = [
        {
            id: 1,
            cSlogan: "Drive with power, style, and freedom on every open road.",
            cName: 'BMW A-8',
            cImg: '/images/bmw.jpg',
            cCurrency: "RS",
            Cmileage: '2000',
            cMoney: "5000",
            cDay: " DAY",
            cYear: "2022",
            cButton: "See Full Details",
            cModel: "Sedan",
            cBrand: "BMW",
            cLocation: "",
            img1: "/images/show_Details/bmq1.jpg",
            img2: "/images/show_Details/bmw2.jpg",
            img3: "/images/show_Details/bmw3.jpg",
            mileag: "5800",
            type: "Automatic",
            person: "4",
            bags: "4",
            cText: 'BMW offers various car models in India, and you can find details like prices, photos, mileage, and engine specifications. Different BMW series are available.',
            buttonEdit: "Edit",
            buttonDelete: "Delete",

        },

        {
            id: 2,
            cSlogan: "Drive with power, style, and freedom on every open road.",
            cName: 'Ferrari 992',
            cImg: '/images/ferrari.jpg',
            cCurrency: "RS",
            Cmileage: '3000',
            cMoney: "4500",
            cDay: " DAY",
            cYear: "2023",
            cButton: "See Full Details",
            cModel: "Sedan",
            cBrand: "BMW",
            cLocation: "",
            img1: "/images/show_Details/fr1.jpg",
            img2: "/images/show_Details/fr2.jpg",
            img3: "/images/show_Details/fr3.jpg",
            mileag: "5800",
            type: "Automatic",
            person: "2",
            bags: "2",
            cText: 'Ferrari offers various car models in India, and you can find details like prices, photos, mileage, and engine specifications. Different Ferrari series are available.',
            buttonEdit: "Edit",
            buttonDelete: "Delete",

        },

        {
            id: 3,
            cSlogan: "Drive with power, style, and freedom on every open road.",
            cName: 'Ranger Rover Autobiography',
            cImg: '/images/RR.jpg',
            cCurrency: "RS",
            Cmileage: '2000',
            cMoney: "8000",
            cDay: " DAY",
            cYear: "2024",
            cButton: "See Full Details",
            cModel: "SUV",
            cBrand: "Land Rover",
            cLocation: "",
            img1: "/images/show_Details/RR1.jpg",
            img2: "/images/show_Details/RR2.jpg",
            img3: "/images/show_Details/RR3.jpg",
            mileag: "5800",
            type: "Automatic",
            person: "4",
            bags: "4",
            cText: 'BMW offers various car models in India, and you can find details like prices, photos, mileage, and engine specifications. Different BMW series are available.',
            buttonEdit: "Edit",
            buttonDelete: "Delete",

        },

        {
            id: 4,
            cSlogan: "Drive with power, style, and freedom on every open road.",
            cName: 'Porsche Cayenne Coupe',
            cImg: '/images/Porsche2.jpg',
            cCurrency: "RS",
            Cmileage: '4000',
            cMoney: "3500",
            cDay: " DAY",
            cYear: "2025",
            cButton: "See Full Details",
            cModel: "SUV",
            cBrand: "Porsche",
            cLocation: "",
            img1: "/images/show_Details/po1.jpg",
            img2: "/images/show_Details/po2.jpg",
            img3: "/images/show_Details/po3.jpg",
            mileag: "5800",
            type: "Automatic",
            person: "4",
            bags: "4",
            cText: 'BMW offers various car models in India, and you can find details like prices, photos, mileage, and engine specifications. Different BMW series are available.',
            buttonEdit: "Edit",
            buttonDelete: "Delete",

        },
    ]

    return (
        <>
            <div className="container-fluid pb-5 " style={{ backgroundColor: "#81b29a" }}>
                <div className="container">
                    <div className="row">
                        {Details.map((val, index) => (
                            <div className="col-12 " style={{marginTop:120}} key={index}>
                                <div className="row">
                                    {/* Left Section */}
                                    <div className="col-12 col-lg-6 mb-5">
                                        <div className="mb-3">
                                            <img src={val.cImg} alt="" className="img-fluid rounded-4 w-100" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                                        </div>

                                        {/* Sub Images */}
                                        <div className="d-flex flex-wrap gap-3 justify-content-between">
                                            <img src={val.img1} className="img-fluid rounded-4" style={{ maxWidth: '32%' }} alt="" />
                                            <img src={val.img2} className="img-fluid rounded-4" style={{ maxWidth: '32%' }} alt="" />
                                            {/* <img src={val.img3} className="img-fluid rounded-4" style={{ maxWidth: '32%' }} alt="" /> */}
                                        </div>

                                        {/* Pricing & Contact Card */}
                                        <div className="card rounded-4 my-4">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center flex-wrap mb-4">
                                                    <div className="fs-4 me-2">{val.cCurrency}</div>
                                                    <div className="fw-bold fs-1">{val.cMoney}</div>
                                                    <div className="fs-4 ms-2">/ {val.cDay}</div>
                                                </div>
                                                <hr />
                                                <h2>Interested in Renting This Car?</h2>
                                                <NavLink to='/form'><button className="btn btn-warning my-3">Submit an Enquiry</button></NavLink>
                                                <hr />
                                                <h2>Contact Us</h2>
                                                <div className="mt-3">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <img src="/images/card-svg/email.png" height="25" alt="" />
                                                        <span className="ms-3 h6"><i className="bi bi-envelope"></i> goldwheelz@gmail.com</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <img src="/images/card-svg/telephone.png" height="25" alt="" />
                                                        <span className="ms-3 h6"> <i class="bi bi-telephone"></i> +91-8888800000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Section */}
                                    <div className="col-12 col-lg-6 text-light">
                                        <h1 className="fw-bold">{val.cName}</h1>

                                        {/* Features Summary */}
                                        <div className="d-flex flex-wrap gap-3 mt-3">
                                            <div className="bg-light text-dark px-3 py-2 rounded-3 d-flex align-items-center">
                                                <img src="/images/avg.svg" alt="" height="25" className="me-2" />
                                                {val.Cmileage}
                                            </div>
                                            <div className="bg-light text-dark px-3 py-2 rounded-3 d-flex align-items-center">
                                                <img src="/images/control.svg" alt="" height="25" className="me-2" />
                                                {val.type}
                                            </div>
                                            <div className="bg-light text-dark px-3 py-2 rounded-3 d-flex align-items-center">
                                                <img src="/images/seats.svg" alt="" height="25" className="me-2" />
                                                {val.person}
                                            </div>
                                            <div className="bg-light text-dark px-3 py-2 rounded-3 d-flex align-items-center">
                                                <img src="/images/baggage.svg" alt="" height="25" className="me-2" />
                                                {val.bags}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="my-4">
                                            <p className="fs-5">{val.cText}</p>
                                        </div>
                                        <hr />

                                        {/* Specifications */}
                                        <h2>Specifications</h2>
                                        <div className="my-4 d-flex flex-column gap-3">
                                            {[
                                                ["Mileage", val.Cmileage],
                                                ["Transmission", val.type],
                                                ["Seats", val.person],
                                                ["Baggage", val.bags],
                                                ["Year", val.cYear],
                                                ["Type", val.cModel],
                                                ["Brand", val.cBrand]
                                            ].map(([label, value]) => (
                                                <div key={label} className="bg-light text-dark px-4 py-2 rounded-3 d-flex justify-content-between">
                                                    <span className="fw-bold">{label}</span>
                                                    <span>{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <hr />

                                        {/* Features */}
                                        <h2>Features</h2>
                                        <div className="row mt-3">
                                            {[
                                                ["bluetooth", "Bluetooth"],
                                                ["control", "Cruise Control"],
                                                ["gps", "Built-in GPS"],
                                                ["camera", "Rear Camera"],
                                                ["charging", "Wireless Charging"],
                                                ["sensor", "Parking Sensors"]
                                            ].map(([img, label]) => (
                                                <div className="col-12 col-sm-6 d-flex text-dark fw-bold align-items-center gap-3 mb-3" key={label}>
                                                    <img src={`/images/features/${img}.svg`} height="27" alt="" />
                                                    <h5 className="mb-0 fw-normal">{label}</h5>
                                                </div>
                                                
                                            ))}
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
            </div>




        </>
    )
}

export default Showdetails
