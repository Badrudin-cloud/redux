import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = {
    data: ''
  };

export const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    changeColor: (state, action) => {
      state.data = action.payload;
    },
    
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
