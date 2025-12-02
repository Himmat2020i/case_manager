import appReducer from "./rootReducer";
import { AnyAction, configureStore, Dispatch, Middleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authApi from "../services/authService";

const devMiddlewares: Middleware<unknown, unknown, Dispatch<AnyAction>>[] = [];

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(...devMiddlewares, authApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
