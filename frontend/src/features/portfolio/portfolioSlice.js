import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  portfolio: {
    totalValue: 0,
    todayReturn: 0,
    totalReturn: 0,
    revenueReturn: 0,
    holdings: []
  },
  performance: {
    daily: [],
    weekly: [],
    monthly: [],
    yearly: []
  },
  statistics: {
    marketCap: 0,
    volume: 0,
    dayHigh: 0,
    dayLow: 0
  },
  loading: false,
  error: null
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setPortfolio: (state, action) => {
      state.portfolio = {
        ...state.portfolio,
        ...action.payload
      };
    },
    updateReturns: (state, action) => {
      const { todayReturn, totalReturn, revenueReturn } = action.payload;
      state.portfolio.todayReturn = todayReturn;
      state.portfolio.totalReturn = totalReturn;
      state.portfolio.revenueReturn = revenueReturn;
    },
    setPerformance: (state, action) => {
      state.performance = {
        ...state.performance,
        ...action.payload
      };
    },
    setStatistics: (state, action) => {
      state.statistics = {
        ...state.statistics,
        ...action.payload
      };
    },
    addHolding: (state, action) => {
      state.portfolio.holdings.push(action.payload);
      state.portfolio.totalValue = state.portfolio.holdings.reduce(
        (total, holding) => total + holding.value,
        0
      );
    },
    updateHolding: (state, action) => {
      const { symbol, updates } = action.payload;
      const holdingIndex = state.portfolio.holdings.findIndex(
        holding => holding.symbol === symbol
      );
      if (holdingIndex !== -1) {
        state.portfolio.holdings[holdingIndex] = {
          ...state.portfolio.holdings[holdingIndex],
          ...updates
        };
        state.portfolio.totalValue = state.portfolio.holdings.reduce(
          (total, holding) => total + holding.value,
          0
        );
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  setPortfolio,
  updateReturns,
  setPerformance,
  setStatistics,
  addHolding,
  updateHolding,
  setLoading,
  setError
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
