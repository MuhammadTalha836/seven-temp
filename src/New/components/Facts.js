import React from 'react'
import { FaReact } from "react-icons/fa"
import "../style/facts.scss";
import CountUp from 'react-countup';
function Facts() {
  return (
    // here is facts section
    <div className="container-fluid facts" id='facts' >
      {/* this is facts header content */}
      <div className="container">
        <div>

          <div className="row mb-5">
            <div className="col text-center fact-content" data-aos="fade-up" data-aos-duration="800">
              <h2 className='text-uppercase fw-bold text-white'>who are we</h2>
              <span className='d-flex justify-content-center align-items-center'>
                <hr className='line' />
              </span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam consequatur distinction</p>
            </div>
          </div>
          {/* here is all card of fact section */}
          <div className="row m-0 mt-3 d-flex justify-content-between fact-card" data-aos="fade-up" data-aos-duration="800">
            {/* this is a single card data of fact section  */}
            <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center align-items-center" id='cardCenter' style={{ maxWidth: "300px", }}>
              <div className="card border-0" style={{ backgroundColor: "transparent" }}>
                <div className="row">
                  <div className="col text-center">
                    <FaReact className='text-white' size="50px" />
                  </div>
                </div>
                <div className="row ">
                  <div className="col text-white mt-3 ">
                    <p className='fs-5'>vehicle purchased</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col fs-1 fw-bold text-white text-center">
                    <CountUp start={0} end={1300} duration={5}></CountUp>+
                  </div>
                </div>
              </div>
            </div>

            {/* this is a single card data of fact section  */}
            <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center align-items-center" id='cardCenter' style={{ maxWidth: "300px", }}>
              <div className="card border-0" style={{ backgroundColor: "transparent" }}>
                <div className="row">
                  <div className="col text-center">
                    <FaReact className='text-white' size="50px" />
                  </div>
                </div>
                <div className="row ">
                  <div className="col text-white mt-3 ">
                    <p className='fs-5'>Happy Customers</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col fs-1 fw-bold text-white text-center">
                    <CountUp start={145} end={1500} duration={5}></CountUp>+
                  </div>
                </div>
              </div>
            </div>

            {/* this is a single card data of fact section  */}
            <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center align-items-center" id='cardCenter' style={{ maxWidth: "300px", }}>
              <div className="card border-0" style={{ backgroundColor: "transparent" }}>
                <div className="row">
                  <div className="col text-center">
                    <FaReact className='text-white' size="50px" />
                  </div>
                </div>
                <div className="row ">
                  <div className="col text-white mt-3 ">
                    <p className='fs-5'>Dealers Verified</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col fs-1 fw-bold text-white text-center">
                    <CountUp start={0} end={1900} duration={5}></CountUp>+
                  </div>
                </div>
              </div>
            </div>

            {/* this is a single card data of fact section  */}
            <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center align-items-center" id='cardCenter' style={{ maxWidth: "300px", }}>
              <div className="card border-0" style={{ backgroundColor: "transparent" }}>
                <div className="row">
                  <div className="col text-center">
                    <FaReact className='text-white' size="50px" />
                  </div>
                </div>
                <div className="row ">
                  <div className="col text-white mt-3 ">
                    <p className='fs-5'>Clients Satisfaction</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col fs-1 fw-bold text-white text-center">
                    <CountUp start={0} end={1100} duration={5}></CountUp>+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facts