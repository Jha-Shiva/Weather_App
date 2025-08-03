import { createContext, useContext, useEffect, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [themeMode, setThemeMode] = useState(localStorage.getItem("weather-app-theme"));

  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    setData(response);
  };

  const fetchCurrentUserLocationData = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const data = await getWeatherDataForLocation(
            position.coords.latitude,
            position.coords.longitude
          );
          setData(data);
        },
        async () => {
          // 👇 fallback to IP if GPS fails or denied
          const ipRes = await fetch("https://ipapi.co/json/");
          const ipData = await ipRes.json();
          const data = await getWeatherDataForLocation(
            ipData.latitude,
            ipData.longitude
          );
          setData(data);
        }
      );
    } else {
      // No GPS support, fallback to IP
      const ipRes = await fetch("https://ipapi.co/json/");
      const ipData = await ipRes.json();
      const data = await getWeatherDataForLocation(
        ipData.latitude,
        ipData.longitude
      );
      setData(data);
    }
  };

   // Load theme from localStorage on first render
useEffect(() => {
  const savedTheme = localStorage.getItem("weather-app-theme");
  if (savedTheme === 'dark') {
    setThemeMode('dark');
    document.documentElement.classList.add('dark'); // ✅ Immediately apply class
  } else {
    setThemeMode('light');
    document.documentElement.classList.remove('dark'); // ✅ Fallback
  }
}, []);

  // Update <html> tag and localStorage when theme changes
useEffect(() => {
  localStorage.setItem("weather-app-theme", themeMode);
  if (themeMode === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocationData,
        themeMode,
        toggleTheme
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
