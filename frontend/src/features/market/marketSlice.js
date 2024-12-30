import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stocks: [],
  selectedStock: null,
  marketTrends: {
    mostViewed: [],
    topGainers: [],
    topLosers: []
  },
  loading: false,
  error: null
};

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    setStocks: (state, action) => {
      state.stocks = action.payload;
    },
    setSelectedStock: (state, action) => {
      state.selectedStock = action.payload;
    },
    setMarketTrends: (state, action) => {
      state.marketTrends = {
        ...state.marketTrends,
        ...action.payload
      };
    },
    updateStockPrice: (state, action) => {
      const { symbol, price, change } = action.payload;
      const stockIndex = state.stocks.findIndex(stock => stock.symbol === symbol);
      if (stockIndex !== -1) {
        state.stocks[stockIndex] = {
          ...state.stocks[stockIndex],
          price,
          change
        };
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
  setStocks,
  setSelectedStock,
  setMarketTrends,
  updateStockPrice,
  setLoading,
  setError
} = marketSlice.actions;

export default marketSlice.reducer;
