import React from 'react'
import './Home.css'
import a from '../../images/ii.png'
import b from '../../images/12.png'
import c from '../../images/13.png'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


function Description() {
  return (
    <div className="dis">
      <div className="up">
        <h1>INDIAN RAILWAYS</h1>
        <p>IRCTC is India's largest e-commerce website, managing online ticketing and catering services for trains. It also offers online booking for flights, hotels, and tours. The website's innovative initiatives include the Shubh Yatra loyalty program and the e-catering service. The IRCTC website is a crucial part of the Indian travel industry and contributes significantly to the country's digital economy.</p>
      </div>
      <div className="down">
        <div className="box">
          <div className="ud">
            <img src={a} alt="" />
          </div>
          <div className="dd">
            <p>Known for its beautiful beaches, vibrant nightlife, and Portuguese-influenced architecture, Goa is a popular tourist destination in...   <b>Read More</b></p>
          </div>
        </div>
        <div className="box">
          <div className="ud">
            <img src={b} alt="" />
          </div>
          <div className="dd">
            <p>A high-altitude desert in the Himalayas, Ladakh is known for its stunning landscapes, remote monasteries, and adventure...       <b>Read More</b></p>
          </div>
        </div>
        <div className="box">
          <div className="ud">
            <img src={c} alt="" />
          </div>
          <div className="dd">
            <p>Located on India's southwestern coast, Kerala is known for its serene backwaters, lush greenery, and diverse wildlife. It's....       <b>Read More</b></p>
          </div>
        </div>
      </div>
      {/* <div className='carousel'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  )
}

export default Description