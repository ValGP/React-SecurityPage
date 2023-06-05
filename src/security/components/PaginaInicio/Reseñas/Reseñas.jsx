import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const Reseñas = () => {
 
    useEffect(() => {
        Aos.init({ duration: 750, once: 'true' });
      }, [])
    

    return (
        <>
        <div className="row estrellas w-100">
            <div className="col-xs-12 col-sm-4">
                <img src="/public/img/estrellas.png" alt="" />
            </div>
            <div className="col-xs-12 col-sm-4">
                <h2><b>+4.9 estrellas</b> por parte de <br /> todos nuestros clientes protegidos</h2>
            </div>
        </div>

        <div className="reseñas">
            
            <div className="container container_reseñas">
                
            
                <Swiper
                    // data-aos="fade-up"
                    loop={true}
                    pagination={true}
                    autoplay={true} 
                    modules={[Pagination, Autoplay]} 
                    grabCursor={true}
                    className="swiper_reseñas"
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
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    }}
                >
                <SwiperSlide>
                    <div className="reseña">
                        <img src="/public/img/circle.png" alt="" />
                        <p>Excelente servicio. Entre
                            todos los que me contacte
                            fueron los únicos que nos
                            asesoraron en el lugar,
                            viendo las zonas vulnerables
                            del galpón y reforzando la</p>

                        <h3>Jane Jones</h3>
                    </div>            
                </SwiperSlide>
                <SwiperSlide>
                    <div className="reseña">
                        <img src="/public/img/circle.png" alt="" />
                        <p>Excelente servicio. Entre
                            todos los que me contacte
                            fueron los únicos que nos
                            asesoraron en el lugar,
                            viendo las zonas vulnerables
                            del galpón y reforzando la</p>

                        <h3>Jane Jones</h3>
                    </div>            
                </SwiperSlide>
                <SwiperSlide>
                    <div className="reseña">
                        <img src="/public/img/circle.png" alt="" />
                        <p>Excelente servicio. Entre
                            todos los que me contacte
                            fueron los únicos que nos
                            asesoraron en el lugar,
                            viendo las zonas vulnerables
                            del galpón y reforzando la</p>

                        <h3>Jane Jones</h3>
                    </div>            
                </SwiperSlide>
                
                
                </Swiper>

            </div>
        </div>
        </>
    )
}

