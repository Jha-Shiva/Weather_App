import React from 'react';

function ForecastCardShimmer() {
  return (
    <div className="p-4 mt-6 rounded-xl bg-white shadow space-y-6 dark:bg-gray-800 animate-pulse">
      {/* Hourly Forecast Heading */}
      <h2 className="text-xl font-bold text-gray-300 dark:text-gray-500">🕒 Hourly Forecast - Today</h2>

      {/* Hourly Forecast Skeleton */}
      <div className="overflow-x-auto flex gap-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="min-w-[80px] p-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-center space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto" />
            <div className="w-8 h-8 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto" />
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full" />
          </div>
        ))}
      </div>

      {/* Daily Forecast Heading */}
      <h2 className="text-xl font-bold mt-8 text-gray-300 dark:text-gray-500">📅 7-Day Forecast</h2>

      {/* Daily Forecast Skeleton Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {Array.from({ length: 7 }).map((_, idx) => (
          <div key={idx} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl text-center space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto" />
            <div className="w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto" />
            <div className="h-3 bg-gray-300 dark:bg-gray-500 rounded w-5/6 mx-auto" />
            <div className="h-4 bg-gray-300 dark:bg-gray-500 rounded w-2/3 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastCardShimmer;
