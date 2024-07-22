import { combineReducers, configureStore } from "@reduxjs/toolkit";
import starWarsSliceReducer from "./slices/starWarsSlice";
const rootReducer = combineReducers({
  starWarsSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
