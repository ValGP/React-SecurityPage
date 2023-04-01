import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

import { AlarmCard } from './AlarmCard';


export const AlarmSlider = () => {

 

  return (

    <div className="container lista-alarmas">
      
        <div className="row">
          <div className="col">
             <AlarmCard/>
          </div>
          <div className="col">
             <AlarmCard/>
          </div>
          <div className="col">
             <AlarmCard/>
          </div>
          <div className="col">
             <AlarmCard/>
          </div>
        </div>

    </div>
    
  );
};