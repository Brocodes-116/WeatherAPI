import { format,parseISO } from 'date-fns'
import React from 'react'

const Weeklyforecast = (props) => {
  return (
    <div>
        {props.data.map((day,idx)=>{
            return (
                <div key={idx}>
                    {format(parseISO())}
                </div>
            )
        })}
    </div>
  )
}

export default Weeklyforecast