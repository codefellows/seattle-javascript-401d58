import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios'

export const stuffSlice = createSlice({
  name: 'stuff',
  initialState: {
    food: []
  },
  reducers: {
    get: (state, action) => {
      state.food = action.payload;
    }
  }

});

export const { get } = stuffSlice.actions;

export const getStuff = () => async (dispatch) => {
  const url = 'https://auth-server-2eag.onrender.com/api/v1/food';
  const response = await axios.get(url);
  dispatch( get(response.data) );
}

export default stuffSlice.reducer;
