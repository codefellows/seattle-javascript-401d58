import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 10
  },
  reducers: {
    add: (state) => {
      ++state.count;
    },
    subtract: (state) => {
      if (state.count > 0) {
        --state.count;
      }
    },
  }

});

export const { add, subtract } = counterSlice.actions;

export default counterSlice.reducer;
