// import { createSlice } from '@reduxjs/toolkit'
// import  english from"../Language/english";
// import  arabic from'../Language/arabic';
// // export getResponseMessage          =  getResponseMessage;

// const LANGUAGES = {
//     ENGLISH             : 'en',
//     ARABIAN             : 'ar'
//   };
  
//   const LANGUAGES_REVERSE_MAP = {
//     'en'     : "English",
//     'ar'     : "Arabic"
//   };
//   const languageArray = Object.values(LANGUAGES);
// const initialState = {
//   value: 'ae'
// }

// export const changeLanguageSlice = createSlice({
//   name: 'changeLanguage',
//   initialState,
//   reducers: {
//     ae : (state)=>{
//         state.value = english.responseMessages;
//     },
//     ar : (state)=>{
//         state.value = arabic.responseMessages;
//     }
//   },
// })

// // Action creators are generated for each case reducer function
// export const { ar, ae,  } = changeLanguageSlice.actions

// export default changeLanguageSlice.reducer