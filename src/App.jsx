import { useState } from 'react'
import InputSearch from './components/inputSearch'
import Display from './components/weatherDisplay'

function App() {
  const [weather,setWeather] = useState(null);
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const [location,setLocation] = useState(null);


  const findWeather = async (city) => {
    setLoading(true)
    setError('');
    try {
      const baseUrl=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&country=IN`);
      const data=await baseUrl.json();
      //Finding the latitude and longitude of the city
      const latitude=data.results[0].latitude;
      const longitude=data.results[0].longitude;
      console.log(data.results[0].country);
      setLocation(data.results[0]);
      // console.log(response.country);
      //Fetching the weather data using latitude and longitude
      const weatherUrl=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&current=relative_humidity_2m,is_day`);
      const weatherResponse=await weatherUrl.json();
      setWeather(weatherResponse.current_weather);
      setLoading(false);
      console.log(weatherResponse);
    }      
    catch(error) {
      if(error.response && error.response.status === 404) {
        setError('City not found. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
      setLoading(false);
      setWeather(null);
      console.error('Error fetching weather data:', error);
      // console.log(`This is the error part${error.message}`);
    }
  }

  return (
    <div className='flex justify-center items-center bg-blue-200 min-h-screen'>
      <div className='text-white bg-black/90 max-w-md w-full rounded-xl p-8'>
        <h1 className='font-bold text-5xl text-center mb-8'>Weather App</h1>
        <InputSearch findWeather={findWeather}/>
        {weather && location && <Display weather={weather} result={location}/>}
      </div>
    </div>
  )
}

export default App
