import { createSlice } from "@reduxjs/toolkit";
const imageSlice = createSlice({
  name: "image",
  initialState: "",
  reducers: {
    imageData: (state, action) => {
      state.imageData = action.payload;
    },
  },
});
export const { imageData } = imageSlice.actions;
export default imageSlice.reducer;
