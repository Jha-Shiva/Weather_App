import React from 'react'
import { useWeather } from '../context/Weather';

function Header() {
  const { themeMode, toggleTheme } = useWeather()

  return (
    <header className='flex flex-col sm:flex-row justify-between items-center shadow-xl px-4 py-4 sm:px-8 sm:py-6 gap-2   dark:bg-gray-800 dark:text-white'>
      <h1 className='text-xl sm:text-2xl font-semibold text-center sm:text-left'>
        Weather Forecast
      </h1>

      <button
        className='cursor-pointer text-base sm:text-lg flex items-center gap-1'
        onClick={toggleTheme}
      >
        <span className="text-xl">{themeMode === 'light' ? '☀️' : '🌙'}</span>
        {themeMode === 'light' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

export default Header
