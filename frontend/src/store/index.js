import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Import reducers
import authReducer from '../features/auth/authSlice';
import marketDataReducer from '../features/market/marketSlice';
import portfolioReducer from '../features/portfolio/portfolioSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  market: marketDataReducer,
  portfolio: portfolioReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
