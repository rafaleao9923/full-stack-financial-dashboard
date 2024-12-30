import React from 'react';

const TableHeader = ({ children }) => (
  <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
    {children}
  </th>
);

const TableCell = ({ children, isPrice = false, isPositive }) => {
  const textColor = isPrice
    ? isPositive
      ? 'text-success-light'
      : 'text-danger-light'
    : 'text-gray-900 dark:text-white';

  return (
    <td className={`px-4 py-2 text-sm ${textColor}`}>
      {children}
    </td>
  );
};

const Overview = () => {
  const stockData = [
    {
      name: 'Spotify NYSE:SPOT',
      price: '$870.98',
      volume: '243.55',
      marketCap: '$9,785,533',
      dayLow: '$477.98',
      dayHigh: '$965,533',
      change: 2.08
    },
    {
      name: 'Uber NYSE:UBER',
      price: '$878.98',
      volume: '443.55',
      marketCap: '$6,685,533',
      dayLow: '$377.98',
      dayHigh: '$765,533',
      change: 1.49
    },
    {
      name: 'Amazon NASDAQ:AMZN',
      price: '$832.98',
      volume: '253.55',
      marketCap: '$8,585,533',
      dayLow: '$277.98',
      dayHigh: '$865,533',
      change: 6.83
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-card mt-6">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <button className="px-4 py-1 text-sm font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg">
            Active
          </button>
          <button className="px-4 py-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            Gainers
          </button>
          <button className="px-4 py-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            Losers
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <TableHeader>Stock Name</TableHeader>
              <TableHeader>Stock Price</TableHeader>
              <TableHeader>Stake Volume</TableHeader>
              <TableHeader>Market Cap</TableHeader>
              <TableHeader>24H Low</TableHeader>
              <TableHeader>24H High</TableHeader>
            </tr>
          </thead>
          <tbody>
            {stockData.map((stock) => (
              <tr
                key={stock.name}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <TableCell>{stock.name}</TableCell>
                <TableCell isPrice isPositive={stock.change > 0}>
                  {stock.price}
                </TableCell>
                <TableCell>{stock.volume}</TableCell>
                <TableCell>{stock.marketCap}</TableCell>
                <TableCell isPrice isPositive={false}>
                  {stock.dayLow}
                </TableCell>
                <TableCell isPrice isPositive={true}>
                  {stock.dayHigh}
                </TableCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
