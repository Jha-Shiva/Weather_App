import { useEffect, useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Search from './components/Search'
import { useWeather } from './context/Weather'
import ForecastCard from './components/ForecastCard.jsx'

function App() {
  const weather = useWeather()
  useEffect(() => {
    // Get Current Location
    weather?.fetchCurrentUserLocationData?.();
  }, []);
  

  return (
    <>
      <div className="dark:bg-gray-900">
        <Header />
        <Search/>
        <Card/>
        <ForecastCard/>
      </div>
    </>
  )
}

export default App
