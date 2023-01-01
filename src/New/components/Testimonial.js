import React from "react";
import "../style/testimonial.scss"
import { Carousel } from 'antd';
const contentStyle = {
  minHeight: '400px',
  color: '#fff',
  textAlign: 'center',
  background: '#000',
  padding: "40px"
};

export default function Testimonial() {
  return (

    // Here is testimonial setion 
    <div className="container-fluid bg-black testimonial" id="testimonial">
      <div className="container"  data-aos="fade-up" data-aos-duration="800">

        {/*  ant design carousel use here */}
        <Carousel autoplay>
          <div >
            <div style={contentStyle} className="d-flex justify-content-center align-items-center">

              {/*  testimonial content is here */}
              <div className="row text-center d-flex justify-content-center align-items-center">
                {/* a single testimonial */}
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3 text-white">Maria Smantha</h5>
                  <h6 className="text-primary mb-3 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo natus sed, totam optio quod asperiores quos aspernatur necessitatibus tempore vero dignissimos neque, blanditiis similique voluptas ut, quisquam reiciendis est architecto?</h6>
                </div>
              </div>
            </div>
          </div>

          <div >
            <div style={contentStyle} className="d-flex justify-content-center align-items-center">

              {/* testominal content is here */}
              <div className="row text-center d-flex justify-content-center align-items-center">
                {/* a single testimonial */}
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3 text-white">Lisa Cudrow</h5>
                  <h6 className="text-primary mb-3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo natus sed, totam optio quod asperiores quos aspernatur necessitatibus tempore vero dignissimos neque, blanditiis similique voluptas ut, quisquam reiciendis est architecto?</h6>
                </div>
              </div>
            </div>
          </div>


          <div >
            <div style={contentStyle} className="d-flex justify-content-center align-items-center">
              {/* testominal content is here */}

              <div className="row text-center d-flex justify-content-center align-items-center">
                {/* a single testimonial */}

                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3 text-white">John Smith</h5>
                  <h6 className="text-primary mb-3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo natus sed, totam optio quod asperiores quos aspernatur necessitatibus tempore vero dignissimos neque, blanditiis similique voluptas ut, quisquam reiciendis est architecto?</h6>

                </div>
              </div>
            </div>
          </div>

        </Carousel>

      </div>
    </div>
  );
}