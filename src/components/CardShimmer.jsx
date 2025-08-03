import React from 'react';

function CardShimmer() {
  return (
    <main className="p-4 animate-pulse">
      <div className="mt-6 mx-auto max-w-4xl p-6 shadow-2xl bg-gray-200 rounded-2xl dark:bg-gray-700">
        <div className="mb-4">
          <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
          <div className="h-5 w-48 bg-gray-300 dark:bg-gray-600 rounded mb-1" />
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 text-2xl mb-4">
          <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full" />
          <div className="space-y-2">
            <div className="h-5 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i}>
              <div className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded mb-1" />
              <div className="h-5 w-24 bg-gray-300 dark:bg-gray-500 rounded" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default CardShimmer;
