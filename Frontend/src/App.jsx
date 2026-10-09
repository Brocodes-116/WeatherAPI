import { useEffect, useState } from 'react'
import { getWeather } from './api'
import {parse,getHours} from 'date-fns'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import Weeklyforecast from './components/Weeklyforecast'


const App = () => {
  const [City, setCity] = useState('india')
  const [Weather, setWeather] = useState(null)
  const [Loading, setLoading] = useState(false)
  const [Error, setError] = useState('')



  useEffect(() => {
    
    const fetchWeather=async ()=>{
      setLoading(true);
      setError('')
      try {
        console.log("Entered ");
        const data=await getWeather(City);
        console.log(data);
        const {maxtemp_c,mintemp_c}=data.forecast.forecastday[0].day;
        setWeather({
          current:{...data.current,mintemp_c,maxtemp_c},
          hourly:data.forecast.forecastday[0].hour,
          weekly:data.forecast.forecastday.slice(1),
          location:data.location,
        })
        
        
      } catch (error) {
          setError(error)          
      }
      finally{
        setLoading(false);
      }
    }

    fetchWeather()

  }, [City])

  const getGradientClass=(hour)=>{
    if(hour>=6 && hour<=9)  return 'bg-sunrise';
    if(hour>=10 && hour<=17)  return 'bg-day';
    if(hour>=18 && hour<=20)  return 'bg-sunset'
    else return 'bg-night'
  }

  const hour = Weather?.location?.localtime 
  ? getHours(parse(Weather.location.localtime, 'yyyy-MM-dd HH:mm', new Date()))
  : new Date().getHours();
  // const hour = 11
  console.log(Weather);
  
  const gradientClass=getGradientClass(hour);

  return (
    <div className={`flex justify-center items-center w-full h-screen ${gradientClass}`}>
        <div className='flex flex-col'>
          <div>
            <SearchBar onSearch={setCity}/>
            {Loading && <p>Loading...</p> }
            {Error && <p>Data not received from the backend</p>}
            {Weather && (
              <div>
                <CurrentWeather data={Weather.current} location={Weather.location}/>
                <HourlyForecast data={Weather.hourly}/>
                <Weeklyforecast data={Weather.weekly}/>
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default App