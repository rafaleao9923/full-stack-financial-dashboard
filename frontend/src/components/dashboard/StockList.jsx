import React from 'react';

const StockItem = ({ logo, name, symbol, exchange, price, change, changePercent }) => {
  const isPositive = change > 0;
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-3">
        <img src={logo} alt={name} className="w-8 h-8 rounded-full" />
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">{name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{exchange}: {symbol}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900 dark:text-white">${price}</p>
        <p className={`text-xs ${isPositive ? 'text-success-light' : 'text-danger-light'}`}>
          {isPositive ? '+' : ''}{change}%
        </p>
      </div>
    </div>
  );
};

const StockList = () => {
  const stocks = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png',
      name: 'Spotify',
      symbol: 'SPOT',
      exchange: 'NYSE',
      price: '159.35',
      change: 0.62,
      changePercent: '+0.62%'
    },
    {
      logo: 'https://companieslogo.com/img/orig/UBER-69a6dcef.png?t=1633206829',
      name: 'Uber',
      symbol: 'UBER',
      exchange: 'NYSE',
      price: '41.23',
      change: 1.49,
      changePercent: '+1.49%'
    },
    {
      logo: 'https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1632523695',
      name: 'Amazon',
      symbol: 'AMZN',
      exchange: 'NASDAQ',
      price: '127.74',
      change: 6.83,
      changePercent: '+6.83%'
    },
    {
      logo: 'https://companieslogo.com/img/orig/KO-b51c8832.png?t=1633218227',
      name: 'Coca Cola',
      symbol: 'KO',
      exchange: 'NYSE',
      price: '55.24',
      change: -0.97,
      changePercent: '-0.97%'
    },
    {
      logo: 'https://companieslogo.com/img/orig/PEP-0296dc1b.png?t=1633218227',
      name: 'PepsiCo',
      symbol: 'PEP',
      exchange: 'NASDAQ',
      price: '159.62',
      change: -1.13,
      changePercent: '-1.13%'
    },
    {
      logo: 'https://companieslogo.com/img/orig/META-6413b89b.png?t=1654568366',
      name: 'Meta',
      symbol: 'META',
      exchange: 'NASDAQ',
      price: '296.73',
      change: 2.91,
      changePercent: '+2.91%'
    },
    {
      logo: 'https://companieslogo.com/img/orig/AAPL-bf1a4314.png?t=1632720960',
      name: 'Apple',
      symbol: 'AAPL',
      exchange: 'NASDAQ',
      price: '168.22',
      change: 1.86,
      changePercent: '+1.86%'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-4">
          <button className="px-4 py-1 text-sm font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg">
            Most Viewed
          </button>
          <button className="px-4 py-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            Top Gainers
          </button>
          <button className="px-4 py-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            Top Losers
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {stocks.map((stock) => (
          <StockItem key={stock.symbol} {...stock} />
        ))}
      </div>
    </div>
  );
};

export default StockList;
