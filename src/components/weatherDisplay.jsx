import React from 'react'

const weatherDisplay = ({weather,result}) => {
  const tempVal=Math.ceil(weather.temperature);
  const temp=()=>{
    if(tempVal<=15){
      return "❄";
    }
    else if(tempVal>15 && tempVal<=25){
      return "🌤";
    }
    else if(tempVal>25 && tempVal<=35){
      return "☀";
    }
  };

  return (
    // <div className='text-center'>
    //   <h1 className='text-xl'>Country: 
    //     <span className='text-2xl'>{result.country}</span>  
    //   </h1>
    //   <h1 className='text-xl mt-1'>Region: 
    //     <span className='text-2xl'>{result.name}</span>  
    //   </h1>
    //   <h2 className='text-xl mt-1'>Temperature: <span className='text-3xl'>{Math.ceil(weather.temperature)}&deg;C</span></h2>
    // </div>

    <div className='flex mt-4'>
      <div className='w-1/2 text-center'>
        <h1 className='text-4xl'>{temp()}</h1>
        <h1 className='text-xl mt-3'>Temperature: {tempVal}&deg;C</h1>
      </div>
      <div className='w-1/2 text-center'>
        <h2 className='text-xl'>Region: {result.name}</h2>
        <h2 className='text-xl mt-5'>Country: {result.country}</h2>        
      </div>  
    </div>

  )
}

export default weatherDisplay