import React, { useState } from 'react';
import Slider from 'react-slick';
import '../style/cards.scss';
import { dataDigitalBestSeller } from './CardData';
import imgGirl from '../images/card-img-1.webp';


function Cards() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (

    // Card section is here 
    <div className='cards container-fluid d-flex justify-content-center align-items-center' id="cards">
      <div className="container">
        <div className="row ">
          {/* this is card top header */}
          <div className="col text-center card-content" data-aos="fade-up" data-aos-duration="800">
            <h2 className='text-white'>Purchased Cars</h2>
            <span className='d-flex justify-content-center align-items-center'>
              <hr className='line' />
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque at quae, perfect</p>
          </div>
        </div>
        {/* this is all cards row is here */}
        <div className="row">
          <div className="col">
            <div className="App px-3 w-100 pb-5">
              <Slider {...settings}>
                {dataDigitalBestSeller.map((item) => (
                  <div className="card">

                    <img
                      src={
                        defaultImage[item.title] === item.title
                          ? defaultImage.linkDefault
                          : item.linkImg
                      }
                      alt={item.title}
                      onError={handleErrorImage}
                    />

                  </div>

                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Cards