import React from 'react'
import useClock from '../customs/useClock';
import { useWeather } from '../context/Weather';
import useAqi from '../customs/useAqi';
import CardShimmer from './CardShimmer';

function Card() {
  const currentTime = useClock();
  const weather = useWeather()
  const {aqi, category} = useAqi(weather?.data?.current?.air_quality?.pm2_5)
  
  return weather.data === null ? (<CardShimmer/>):(
<main className="p-4">
  <div className="mt-6 mx-auto max-w-4xl p-6 shadow-2xl bg-gray-300 rounded-2xl dark:bg-gray-800">
    <div className="mb-4">
      <h4 className="font-sans font-medium dark:text-white">Current Weather</h4>
      <h2 className="text-xl font-medium dark:text-white">
        {weather?.data?.location?.name}, {weather?.data?.location?.region}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{currentTime}</p>
    </div>

    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 text-2xl mb-4 dark:text-white">
      <div>
        <img
          src={weather?.data?.current?.condition?.icon}
          alt={weather?.data?.current?.condition?.text}
          className="w-16 h-16"
        />
      </div>
      <div>
        <h2>
          {weather?.data?.current?.temp_c} <sup className="text-sm">°C</sup>
        </h2>
        <h2 className="text-xl font-medium">
          {weather?.data?.current?.condition?.text}
        </h2>
      </div>
    </div>

    <div
      id="card-data"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm"
    >
      {[
        { label: 'CO', value: `${weather?.data?.current?.air_quality?.co} µg/m³` },
        { label: 'PM2.5', value: `${weather?.data?.current?.air_quality?.pm2_5} µg/m³` },
        { label: 'PM10', value: `${weather?.data?.current?.air_quality?.pm10} µg/m³` },
        { label: 'NO2', value: `${weather?.data?.current?.air_quality?.no2} µg/m³` },
        { label: 'AQI PM2.5', value: `${aqi} (${category})` },
        { label: 'Wind', value: `${weather?.data?.current?.wind_mph} mph` },
        { label: 'Humidity', value: `${weather?.data?.current?.humidity} %` },
        { label: 'Feels Like', value: `${weather?.data?.current?.feelslike_c} °C` },
        { label: 'Visibility', value: `${weather?.data?.current?.vis_km} km` },
        { label: 'Pressure', value: `${weather?.data?.current?.pressure_mb} mb` },
        { label: 'Dew Point', value: `${weather?.data?.current?.dewpoint_c} °C` },
        { label: 'Precipitation', value: `${weather?.data?.current?.precip_mm} mm` },
      ].map((item, index) => (
        <div key={index}>
          <span className="block text-gray-700 dark:text-gray-300">{item.label}</span>
          <p className="dark:text-white">{item.value}</p>
        </div>
      ))}
    </div>
  </div>
</main>

  )
}


export default Card