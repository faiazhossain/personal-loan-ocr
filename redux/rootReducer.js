import { combineReducers } from "@reduxjs/toolkit";
import imageReducer from "./slices/imageSlice";
import ocrReducer from "./slices/ocrSlice";
const rootReducer = combineReducers({
  image: imageReducer,
  ocr: ocrReducer,
});
export default rootReducer;
