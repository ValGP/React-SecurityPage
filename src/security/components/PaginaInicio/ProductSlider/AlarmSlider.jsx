import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

import { AlarmCard } from './AlarmCard';


export const AlarmSlider = () => {

 

  return (

    <div className="container lista-alarmas">
      <Swiper
        loop={true}
        navigation={true} 
        modules={[Navigation]} 
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <AlarmCard />
        </SwiperSlide>
        <SwiperSlide>
          <AlarmCard />
        </SwiperSlide>
        <SwiperSlide>
          <AlarmCard />
        </SwiperSlide>
        <SwiperSlide>
          <AlarmCard />
        </SwiperSlide>
        
      </Swiper>
    </div>
    
  );
};