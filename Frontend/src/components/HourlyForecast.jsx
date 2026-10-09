import { useState } from 'react'
import { parse,format } from 'date-fns'

const HourlyForecast = (props) => {
  return (
    <div className='flex overflow-x-scroll max-w-[800px] text-white p-4 gap-4'>
        {
            props.data.map((hour,idx)=>{
                return (
                    <div key={idx} className='min-w-[80px] px-3 py-2 text-center bg-blue-950/90 mx-0.5 backdrop-blur-3xl rounded-2xl'>
                        <div className='text-[0.9rem]'>
                            {format(parse(hour.time,'yyyy-MM-dd HH:mm',new Date()),'h a')}
                        </div>
                        <img src={hour.condition.icon} alt="" className='scale-110 mx-auto my-1' />
                        <div className='text-[0.9rem]'>{Math.round(hour.temp_c)}</div>
                        <div className='text-[0.9rem]'>💧 {hour.chance_of_rain}%</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default HourlyForecast