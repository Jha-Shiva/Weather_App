# Weather App

A modern weather forecast web application built with **React**, **Vite**, and **Tailwind CSS**. It provides current weather, air quality, hourly, and 7-day forecasts for any city or your current location, with light/dark mode support.

## Live Link
- [Weather_App_Link](https://climatestat.netlify.app/)

## Features

- 🌤️ **Current Weather**: See temperature, conditions, wind, humidity, and more.
- 🏙️ **City Search**: Search weather by city name.
- 📍 **Location Detection**: Auto-detects your location for instant weather info.
- 🕒 **Hourly & 7-Day Forecast**: Scrollable hourly and daily forecasts.
- 🌫️ **Air Quality Index (AQI)**: PM2.5 AQI with category and emoji.
- 🌗 **Light/Dark Mode**: Toggle between light and dark themes.
- ⚡ **Fast & Responsive**: Built with Vite and Tailwind CSS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with your [WeatherAPI](https://www.weatherapi.com/) key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   VITE_BASE_URL=https://api.weatherapi.com/v1/forecast.json?key=your_api_key_here
   ```

### Running the App

Start the development server:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

## Project Structure

```
weather-app/
  ├── public/
  ├── src/
  │   ├── api/           # API calls
  │   ├── assets/        # Images and icons
  │   ├── components/    # React components (Card, ForecastCard, Header, Search)
  │   ├── context/       # Weather context provider
  │   ├── customs/       # Custom hooks (useAqi, useClock)
  │   ├── App.jsx        # Main app component
  │   ├── main.jsx       # Entry point
  │   └── index.css      # Tailwind and custom styles
  ├── .env
  ├── package.json
  └── vite.config.js
```

## Credits

- [WeatherAPI.com](https://www.weatherapi.com/) for weather data.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Vite](https://vitejs.dev/) for fast