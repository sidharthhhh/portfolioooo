import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.webp'
import AVTR2 from '../../assets/avatar2.webp'
import AVTR3 from '../../assets/avatar3.webp'
import AVTR4 from '../../assets/avatar5.jpeg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: `lololo`,
    review: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam tempore sapiente omnis. At, quas rem nemo ex quasi architecto quod odio delectus obcaecati ducimus earum suscipit totam exercitationem eius! Facil`,

  },
  {
    avatar: AVTR2,
    name: `lololo`,
    review: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam tempore sapiente omnis. At, quas rem nemo ex quasi architecto quod odio delectus obcaecati ducimus earum suscipit totam exercitationem eius! Facil`,
    
  },
  {
    avatar: AVTR3,
    name: `lololo`,
    review: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam tempore sapiente omnis. At, quas rem nemo ex quasi architecto quod odio delectus obcaecati ducimus earum suscipit totam exercitationem eius! Facil`,
    
  },
  {
    avatar: AVTR4,
    name: `lololo`,
    review: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam tempore sapiente omnis. At, quas rem nemo ex quasi architecto quod odio delectus obcaecati ducimus earum suscipit totam exercitationem eius! Facil`,
    
  },
]



const Testimonials = () => {
  return (
   <section id="testimonials">
     <h5>Review from clients</h5>
     <h2>Testimonials</h2>

     <Swiper className="container testimonials__container"
    
     
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>


       {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testiminial'>
            <div className="client__avatar">
              <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">
                 {review}
              </small>
            </SwiperSlide>
          )
        })
       }
     </Swiper>
   </section>
  )
}

export default Testimonials