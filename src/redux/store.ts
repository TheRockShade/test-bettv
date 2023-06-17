import { configureStore } from "@reduxjs/toolkit";
import global from "./slices/globalSlice";

export const store = configureStore({
  reducer: { global },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
