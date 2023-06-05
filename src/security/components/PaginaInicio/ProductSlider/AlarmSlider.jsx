import { AlarmCard } from './AlarmCard';


export const AlarmSlider = () => {

 

  return (

    <div className="container lista-alarmas">
      
        <div className="row">
          <div className="col-xs-12 col-md-6 col-xl-3">
             <AlarmCard title={"Alarma Monitoreada"}/>
          </div>
          <div className="col-xs-12 col-md-6 col-xl-3">
             <AlarmCard title={"Control de accesos"}/>
          </div>
          <div className="col-xs-12 col-md-6 col-xl-3">
             <AlarmCard title={"Sistemas de rastreo"}/>
          </div>
          <div className="col-xs-12 col-md-6 col-xl-3">
             <AlarmCard title={"Deteccion de incendios"}/>
          </div>
        </div>

    </div>
    
  );
};