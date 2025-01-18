import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authSlice from "./authSlice";
import taskSlice from "./taskSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  task: taskSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
