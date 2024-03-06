// import type { TypedUseSelectorHook } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch, useSelector } from "react-redux";
// import imageReducer from "./reducers/imageReducer";

// const store = configureStore({
//   reducer: {
//     image: imageReducer,
//   },
// });

// // Declare Typed Definitions
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = typeof store.dispatch;

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});
export default store;
