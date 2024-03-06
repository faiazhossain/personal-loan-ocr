import { createSlice } from "@reduxjs/toolkit";

// Define your initial state with the structure expected by your reducer
const initialState = {
  imageData: [],
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    // Modify the state directly without creating a new object
    imageData: (state, action) => {
      state.imageData = action.payload;
    },
  },
});

export const { imageData } = imageSlice.actions;
export default imageSlice.reducer;
