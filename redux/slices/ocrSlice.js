import { createSlice } from "@reduxjs/toolkit";

// Define your initial state with the structure expected by your reducer
const initialState = {
  ocrData: [],
};

const ocrSlice = createSlice({
  name: "ocr",
  initialState,
  reducers: {
    // Modify the state directly without creating a new object
    setOcrData: (state, action) => {
      state.ocrData = action.payload;
    },
  },
});

export const { setOcrData } = ocrSlice.actions;
export default ocrSlice.reducer;
