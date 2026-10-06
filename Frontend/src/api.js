export const getWeather=async(city)=>{
    
    const response=await fetch(`http://localhost:8000/api/weather/?city=${city}`)
    console.log("Fetch executed");
    return response.json();
}