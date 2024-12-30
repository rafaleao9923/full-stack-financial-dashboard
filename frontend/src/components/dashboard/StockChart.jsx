import React from 'react';

const StockChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-card">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">NYSE:SPOT</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">Spotify.com</span>
          </div>
          <div className="flex items-center mt-1">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">$297.408</span>
            <span className="ml-2 text-sm text-success-light">+3.32 (2.08%)</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <select className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Jan - Dec, 2023</option>
            <option>Last 6 Months</option>
            <option>Last 3 Months</option>
            <option>Last Month</option>
          </select>
        </div>
      </div>
      
      <div className="relative h-64">
        {/* This is a placeholder for the actual chart implementation */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800 rounded-lg">
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
        </div>
        
        {/* Price point indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm font-medium">
            $197.40
          </div>
          <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mx-auto mt-1"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-4 mt-6">
        {['JAN', 'FEB', 'MAR', 'APR', 'JUN', 'JUL', 'AUG'].map((month) => (
          <button
            key={month}
            className={`text-sm font-medium py-1 rounded-lg text-center
              ${month === 'AUG' 
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StockChart;
