import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Equipo } from './Equipo';

export const EquiposSlider = () => {
  return (
    <section className='equipos'>
        <div className="container">
            <h2 >Equipos</h2>
            
        </div> 
        <div className="container-equipos">
        <Swiper
        
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            initialSlide: 1,
            loop: true,
          },
          480: {
            slidesPerView: 1.3,
            spaceBetween: 20,
            initialSlide: 1,
            loop: true,
          },
          768: { 
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4.4,
            spaceBetween: 25,
          },
          1800: {
            slidesPerView: 6,
            spaceBetween: 15,
          }
        }}
      >
        {/* <SwiperSlide className='swiperSlide'></SwiperSlide> */}
        <SwiperSlide>
          <Equipo />
        </SwiperSlide>
        <SwiperSlide>
          <Equipo />
        </SwiperSlide>
        <SwiperSlide>
          <Equipo />
        </SwiperSlide>
        <SwiperSlide>
          <Equipo />
        </SwiperSlide>
        <SwiperSlide>
          <Equipo />
        </SwiperSlide>
        <SwiperSlide>
          <Equipo />
        </SwiperSlide>
        <SwiperSlide>
          <Equipo />
        </SwiperSlide>
        
        
      </Swiper>
        </div>
    </section>
    
  )
}