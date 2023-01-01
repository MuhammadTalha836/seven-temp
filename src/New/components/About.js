import React from 'react'
import '../style/about.scss'
import { FaCarAlt } from 'react-icons/fa';


function About() {
  return (
    // how to work section is here
    <div className=' container-fluid about bg-black min-vh-100 d-flex justify-content-center align-items-center' id="about" >
      <div className="container" data-aos="fade-up" data-aos-duration="800">
        <div className="row mb-5">
          {/* work content is here */}
          <div className="col text-center">
            <h2 className='text-white'>The Process</h2>
            <h2 className='text-white'>How i works</h2>
            <span className='d-flex justify-content-center align-items-center'>
              <hr style={{ height: "4px", backgroundColor: "red", border: "none", width: "200px" }} />
            </span>
          </div>
        </div>

        {/* all cards row is here */}
        <div className="row about-cards" >

          {/* this is bootstrap grid */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
            {/* a single cards */}
            <div className="card bg-transparent text-center">
              <span className='mb-3'>
                <FaCarAlt size="80px" className="text-white text-center" />
              </span>
              <span className='d-flex justify-content-center align-items-center'>
                <hr className='w-25 line' />
              </span>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          {/* this is bootstrap grid */}
          <div className="col-12 col-md-6 col-lg-4  d-flex justify-content-center align-items-center">
            {/* a single cards */}

            <div className="card bg-transparent text-center">
              <span className='mb-3'>
                <FaCarAlt size="80px" className="text-white text-center" />
              </span>
              <span className='d-flex justify-content-center align-items-center'>
                <hr className='w-25 line' />
              </span>
              <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          {/* this is bootstrap grid */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
            {/* a single cards */}

            <div className="card bg-transparent text-center">
              <span className='mb-3'>
                <FaCarAlt size="80px" className="text-white text-center" />
              </span>
              <span className='d-flex justify-content-center align-items-center'>
                <hr className='w-25 line' />
              </span>
              <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default About