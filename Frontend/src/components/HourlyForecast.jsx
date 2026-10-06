import { useState } from 'react'
import { parse,format } from 'date-fns'

const HourlyForecast = (props) => {
  return (
    <div>
        {
            props.data.map((hour,idx)=>{
                return (
                    <div key={idx}>
                        <div>
                            {format(parse(hour.time,'yyyy-MM-dd HH:mm',new Date()),'h a')}
                        </div>
                        <img src="hour-condition,icon" alt="" />
                    </div>
                )
            })
        }
    </div>
  )
}

export default HourlyForecast