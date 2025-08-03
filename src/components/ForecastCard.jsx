import { useWeather } from '../context/Weather';
import ForecastCardShimmer from './ForecastCardShimmer';

function ForecastCard() {
  const weather = useWeather();
  const forecast = weather?.data?.forecast?.forecastday ?? [];
  const todayHourly = forecast[0]?.hour ?? [];

  return weather.data === null ? (<ForecastCardShimmer/>): (
    <div className="p-4 mt-6 rounded-xl bg-white shadow space-y-6 dark:bg-gray-800">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">🕒 Hourly Forecast - Today</h2>

      {/* Hourly Forecast Scrollable */}
      <div className="overflow-x-auto flex gap-4 ">
        {todayHourly.map((hour) => (
          <div
            key={hour.time_epoch}
            className="min-w-[80px] p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-center"
          >
            <p className="text-sm font-medium text-gray-800 dark:text-white">
              {hour.time.split(' ')[1]}
            </p>
            <img
              src={hour.condition.icon}
              alt="icon"
              className="w-8 h-8 mx-auto"
            />
            <p className="text-sm text-gray-700 dark:text-white">🌡️ {hour.temp_c}°C</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-8 text-gray-900 dark:text-white">📅 7-Day Forecast</h2>

      {/* Daily Forecast Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {forecast.map((day) => (
          <div
            key={day.date}
            className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl text-center"
          >
            <p className="font-semibold text-sm text-gray-800 dark:text-white">{day.date}</p>
            <img
              src={day.day.condition.icon}
              alt="icon"
              className="w-10 h-10 mx-auto"
            />
            <p className="text-xs text-gray-700 dark:text-gray-300">{day.day.condition.text}</p>
            <p className="text-sm font-medium mt-1 text-gray-900 dark:text-white">
              🌡️ {day.day.avgtemp_c}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastCard;
