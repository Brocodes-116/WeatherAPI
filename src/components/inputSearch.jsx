import React, { useState } from 'react'

const InputSearch = ({findWeather}) => {
    const [city, setCity] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            findWeather(city);
            setCity("");
        }
    };
    return (
        <form className='flex' onSubmit={handleSubmit}>
            <input type="text" 
                placeholder='Enter the City name' 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                className='p-2 flex-1 border border-r-0 border-gray-100 rounded-l-lg outline-none'
            />
            <button className='p-2 rounded-r-lg border border-l-0 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer'>Search</button>

        </form>
    )
}

export default InputSearch