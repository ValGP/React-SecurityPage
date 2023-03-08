import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Equipo } from './Equipo';

export const EquiposSlider = () => {
  return (
    <section className='equipos'>
        <div className="container">
            <h2 >EQUIPOS</h2>
            <hr />
        </div>
        <div className="container-equipos">
        <Swiper
        
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1.3,
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
            slidesPerView: 3.5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide className='swiperSlide'></SwiperSlide>
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