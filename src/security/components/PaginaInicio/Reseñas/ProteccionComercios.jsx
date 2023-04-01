import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

export const ProteccionComercios = () => {
  return (
    <div className="container-90 marcas">
        <h2 className="mb-5">Protegiendo <b>+250 hogares</b> y <b>+50 comercios</b> en la Argentina</h2>
        <Swiper
            loop={true}
            autoplay={true} 
            modules={[Autoplay]} 
            grabCursor={true}
            className="mySwiper"
            breakpoints={{
            0: { 
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
            }}
        >

            <SwiperSlide>
                <img src="/public/img/marca.png" alt="" />
            </SwiperSlide>  
            <SwiperSlide>
                <img src="/public/img/marca.png" alt="" />
            </SwiperSlide>  
            <SwiperSlide>
                <img src="/public/img/marca.png" alt="" />
            </SwiperSlide>  
            <SwiperSlide>
                <img src="/public/img/marca.png" alt="" />
            </SwiperSlide>  
            <SwiperSlide>
                <img src="/public/img/marca.png" alt="" />
            </SwiperSlide>  

        </Swiper>
    </div>
  )
} 