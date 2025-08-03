// const baseURL = import.meta.env.VITE_BASE_URL;
const baseURL = 'https://api.weatherapi.com/v1/forecast.json?key=73c0476cb7a848ce914115522252307'

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&days=7&aqi=yes`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) =>{
  const response = await fetch(`${baseURL}&q=${lat},${lon}&days=7&aqi=yes`);
  return await response.json();
};
