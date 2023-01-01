import React from 'react'
import '../style/home.scss'
import { RiVideoFill } from "react-icons/ri"

function HeaderName() {

  return (
    // home section is here
    <div className="home" id="home">
      <div className='home-header container' data-aos="fade-up" data-aos-duration="800">
        {/* home content */}
        <div className='home-content text-center'>
          <h1>Get the best value for your Car </h1>
          <p className='text-white'>Pay off your vehicle and & cash the remainder </p>
          <button>Instant cash offer</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderName