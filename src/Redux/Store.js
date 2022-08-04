import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './index';
import counter2Reducer from './index'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    reducer:{
      counter2: counter2Reducer,
    }
  },
})