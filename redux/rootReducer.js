import { combineReducers } from "@reduxjs/toolkit";
import imageReducer from "./slices/imageSlice";
const rootReducer = combineReducers({
  image: imageReducer,
});
export default rootReducer;
