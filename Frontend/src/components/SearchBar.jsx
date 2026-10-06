import { useState } from 'react'


const SearchBar = ({ onSearch }) => {
    const [City, setCity] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        if (City) {
            onSearch(City)
            setCity('')
        }
    }

    return (
        
        <div className='flex justify-center'>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className='flex items-center px-2 py-2 my-5 sm:w-150 w-80 bg-gray-600 rounded-3xl border border-gray-900/30 shadow-md shadow-black'
                >
                    <span className='cursor-default text-xl'>🔍</span>
                    <input
                        type="text"
                        placeholder='Enter the place name'
                        className='border-none outline-0 text-lg p-2 w-full bg-transparent text-white'
                        value={City}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </form>
            </div>
        </div>
        
    )
}

export default SearchBar