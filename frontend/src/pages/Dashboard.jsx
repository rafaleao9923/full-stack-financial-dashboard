import React from 'react';
import Navbar from '../components/layout/Navbar';
import ReturnCards from '../components/dashboard/ReturnCards';
import StockChart from '../components/dashboard/StockChart';
import StockList from '../components/dashboard/StockList';
import Overview from '../components/dashboard/Overview';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">👋</span>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Hi Rafael, <span className="font-normal">Welcome Back</span>
              </h1>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Invest your money with small risk!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Returns and Chart */}
          <div className="lg:col-span-2 space-y-6">
            <ReturnCards />
            <StockChart />
            <Overview />
          </div>

          {/* Right column - Stock List */}
          <div className="lg:col-span-1">
            <StockList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
