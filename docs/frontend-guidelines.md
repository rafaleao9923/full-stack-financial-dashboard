# Financial Dashboard Frontend Guidelines

## Technology Stack
- **Framework**: React
- **State Management**: Redux
- **Visualization**: D3.js, Plotly
- **Styling**: Tailwind CSS
- **API Client**: Axios

## Core Architecture

### 1. Application Structure
```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── charts/
│   │   ├── portfolio/
│   │   └── market/
│   ├── context/
│   ├── features/
│   │   ├── auth/
│   │   ├── market/
│   │   ├── portfolio/
│   │   └── reports/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── store/
│   │   ├── slices/
│   │   └── store.js
│   ├── styles/
│   ├── utils/
│   └── App.js
└── tailwind.config.js
```

### 2. Component Structure

#### Common Components
- Button
- Input
- Modal
- Table
- Card
- Navbar
- Footer

#### Chart Components
- LineChart
- CandlestickChart
- PieChart
- Heatmap
- VolumeChart

#### Market Components
- MarketOverview
- StockDetails
- SearchBar
- Watchlist

#### Portfolio Components
- PortfolioSummary
- PortfolioPerformance
- AssetAllocation
- TransactionHistory

### 3. State Management

#### Redux Store Structure
```javascript
{
  auth: {
    user: null,
    token: null,
    status: 'idle'
  },
  market: {
    realTimeData: {},
    historicalData: {},
    status: 'idle'
  },
  portfolio: {
    portfolios: [],
    selectedPortfolio: null,
    performance: {},
    status: 'idle'
  },
  ui: {
    theme: 'light',
    notifications: []
  }
}
```

#### Example Slice (Market)
```javascript
const marketSlice = createSlice({
  name: 'market',
  initialState: {
    realTimeData: {},
    historicalData: {},
    status: 'idle'
  },
  reducers: {
    // Reducer functions
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRealTimeData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRealTimeData.fulfilled, (state, action) => {
        state.realTimeData = action.payload;
        state.status = 'succeeded';
      })
  }
});
```

### 4. Data Visualization Guidelines

#### Chart Types
1. **Line Charts**: For trend analysis
2. **Candlestick Charts**: For price movements
3. **Pie Charts**: For portfolio allocation
4. **Heatmaps**: For market overview
5. **Volume Charts**: For trading activity

#### Performance Optimization
- Use memoization for chart components
- Implement data sampling for large datasets
- Use Web Workers for complex calculations
- Implement lazy loading for charts

### 5. API Integration Patterns

#### Service Layer
```javascript
// services/market.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getRealTimeData = async (symbol) => {
  try {
    const response = await axios.get(`${API_URL}/market/real-time/${symbol}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

#### API Integration in Components
```javascript
function MarketOverview() {
  const dispatch = useDispatch();
  const { realTimeData, status } = useSelector(state => state.market);

  useEffect(() => {
    dispatch(fetchRealTimeData('AAPL'));
  }, [dispatch]);

  if (status === 'loading') return <LoadingSpinner />;
  
  return (
    <div>
      <LineChart data={realTimeData} />
    </div>
  );
}
```

### 6. UI/UX Best Practices

#### Responsive Design
- Use Tailwind's responsive utilities
- Implement mobile-first approach
- Test on multiple screen sizes

#### Accessibility
- Use semantic HTML
- Implement ARIA attributes
- Ensure color contrast
- Provide keyboard navigation

#### Performance
- Implement code splitting
- Use lazy loading for components
- Optimize images and assets
- Implement caching strategies

#### Error Handling
- Display user-friendly error messages
- Implement error boundaries
- Provide retry mechanisms
- Log errors for debugging

## Development Workflow

### Code Quality
- Use ESLint with React/JSX rules
- Implement Prettier for code formatting
- Use TypeScript for type safety
- Write unit tests with Jest and React Testing Library

### State Management Best Practices
- Keep state minimal and derived
- Use selectors for complex state
- Normalize API responses
- Use Redux Toolkit for simpler code

### Component Design
- Follow single responsibility principle
- Use composition over inheritance
- Implement prop-types or TypeScript
- Write reusable and testable components
