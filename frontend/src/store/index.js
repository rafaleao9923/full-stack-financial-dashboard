import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import marketReducer from '../features/market/marketSlice';
import portfolioReducer from '../features/portfolio/portfolioSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    market: marketReducer,
    portfolio: portfolioReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
