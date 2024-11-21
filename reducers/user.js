import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { 
    isConnected: '',
    username: '' },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.isConnected = action.payload.token;
      state.value.username = action.payload.username;
      console.log("value",state.value.username, 
      "action", action.payload.token)

    },
    logout: (state) => {
      state.value.isConnected = null;
      state.value.username = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
