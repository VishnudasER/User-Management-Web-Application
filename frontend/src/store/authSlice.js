// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
  const response = await axios.post('/api/token/', credentials);
  dispatch(setToken(response.data.access));
  const userResponse = await axios.get('/api/profile/', {
    headers: { Authorization: `Bearer ${response.data.access}` },
  });
  dispatch(setUser(userResponse.data));
};

export default authSlice.reducer;
