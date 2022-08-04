import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterReducer from './index'
import changeLanguageReducer from './Langauge'

export const store =()=> configureStore ({
  
    reducer: {
        counter: counterReducer,
      },
      reducer: {
        changeLanguage: changeLanguageReducer,
      }
});
export const  wrapper = createWrapper(store);