// import { counter } from '@fortawesome/fontawesome-svg-core';
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './index';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer,
    
  },
})