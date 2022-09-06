import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});
export const counterSlice2 = createSlice({
  name: 'counterAdult',
  reducers: {
    incrementAdult: (state) => {
      
      state.value += 1
    },
    decrementAdult: (state) => {
      state.value -= 1
    },
  },
})
 



export const { increment, decrement } = counterSlice.actions;

export const { incrementAdult, decrementAdult } = counterSlice.actions;

export default counterSlice.reducer;
