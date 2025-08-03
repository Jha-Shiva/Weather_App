import React from 'react'
import SearchImg from '../assets/search.svg'
import { useWeather } from '../context/Weather'

function Search() {
  const weather = useWeather()

  return (
    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 px-4 py-2 mt-2'>
      <div className='flex items-center w-full sm:w-[300px] md:w-[400px] lg:w-[500px] shadow-2xl rounded-xl overflow-hidden bg-white dark:bg-gray-400'>
        <label htmlFor="search">
          <img
            src={SearchImg}
            alt="searchIcon"
            className='w-5 ml-2 cursor-pointer'
          />
        </label>

        <input
          type="text"
          id="search"
          className="text-lg p-2 w-full outline-none"
          value={weather.searchCity}
          onChange={(e) => weather.setSearchCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              weather.fetchData()
            }
          }}
          placeholder="Search city"
        />
      </div>

      <button
        className='bg-gray-500 text-white py-2 px-4 rounded-xl shadow-2xl w-full sm:w-auto'
        onClick={weather.fetchData}
      >
        Search
      </button>
    </div>
  )
}

export default Search
