import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
    data: {
      name: "",
      age: 0,
      email: "",
    },
  };

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
    logout: (state) => {
        state.data = userInitialState.data;
      },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
