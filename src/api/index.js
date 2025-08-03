const baseURL = import.meta.env.VITE_BASE_URL;

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&days=7&aqi=yes`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) =>{
  const response = await fetch(`${baseURL}&q=${lat},${lon}&days=7&aqi=yes`);
  return await response.json();
};
