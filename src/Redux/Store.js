import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './index'
import changeLanguageReducer from './Langauge'

const store = configureStore ({
    reducer: {
        counter: counterReducer,
      },
      reducer: {
        changeLanguage: changeLanguageReducer,
      }
});

export default store;