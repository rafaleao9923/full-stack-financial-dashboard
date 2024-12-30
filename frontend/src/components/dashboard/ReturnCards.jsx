import React from 'react';

const ReturnCard = ({ title, amount, bgColor }) => (
  <div className={`${bgColor} rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300`}>
    <div className="flex justify-between items-center">
      <h3 className="text-white text-lg font-medium">{title}</h3>
      <svg className="h-6 w-6 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    </div>
    <p className="text-white text-3xl font-bold mt-2">${amount}</p>
  </div>
);

const ReturnCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <ReturnCard
        title="Today's Return"
        amount="39,345"
        bgColor="bg-card-yellow"
      />
      <ReturnCard
        title="Total Return"
        amount="42,345"
        bgColor="bg-card-purple"
      />
      <ReturnCard
        title="Revenue Return"
        amount="52,345"
        bgColor="bg-card-blue"
      />
    </div>
  );
};

export default ReturnCards;
