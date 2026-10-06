import { useEffect } from 'react'
import {format, parse} from 'date-fns'
const CurrentWeather = ({data,location}) => {

  useEffect(() => {
    console.log("Current weather component is rendered");
  }, [])
  

  const {localtime,name}=location;
  const {temp_c,condition,feelslike_c,mintemp_c,maxtemp_c,wind_kph,humidity,uv}=data;

  const getDayAndTime=(rawData)=>{
    const data=parse(rawData,'yyyy-MM-dd HH:mm', new Date());
    return format(data,'EEEE, hh:m a');
  }

  const getWindDesc=(val)=>{
    if(val<10)  return 'calm';
    else if(val<20) return 'Little wind';
    else if(val>30) return 'Windy';
    else  return 'Very windy'
  }

  const getHumidityDesc=(val)=>{
    if(val>30)  return 'Dry';
    else if(val>60)  return 'Comfortable';  
    else if(val>80)  return 'Humid';
    else  return 'Sticky'; 
  }

  const getUvDesc=(val)=>{
    if(val>3) return 'Low';
    else if(val>6)  return 'Moderate';
    else if(val>8)  return 'High';
    else if(val>11)  return 'Very high';
    else  return 'Extreme';
  }
    return (
    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 gap-8 text-white w-[400px] sm:w-[600px] md:w-[800px]'>
        <div className='bg-gray-700 rounded-2xl p-8 border flex justify-between sm:w-[50%] w-full'>
          <div className='flex flex-col gap-3'>
            <h2>{name}</h2>
            <h1>{Math.round(temp_c)}°C</h1>
            <p>↑{maxtemp_c} / ↓{mintemp_c}</p>
            <p>Feels like {feelslike_c}</p>
            <p>{getDayAndTime(localtime)}</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={condition.icon} alt={condition.text} />
            <p>{condition.text}</p>
          </div>
        </div>
        <div className='bg-gray-700 rounded-2xl p-8 border sm:w-[50%] w-full'>
          <div className='flex justify-between my-2 font-bold'>
            <span>💨Wind</span> 
            <span className='flex flex-col items-center'>
              {wind_kph}km/h
              <br />
              <small>{getWindDesc(wind_kph)}</small>
            </span>
          </div>
          <div className='flex justify-between my-2 font-bold'>
            <span>💧Humidity</span>
            <span className='flex flex-col items-center'>
              {humidity}%
              <br />
              <small>{getHumidityDesc(humidity)}</small>
            </span>
          </div>
          <div className='flex justify-between my-2 font-bold'>
            <span>🔆UV index</span>
            <span className='flex flex-col items-center'>
              {uv}km/h
              <br />
              <small>{getUvDesc(uv)}</small>
            </span>
          </div>
        </div>
    </div>
  )
}

export default CurrentWeather