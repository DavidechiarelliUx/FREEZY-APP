import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducers from "../reducers";


const rootReducers = combineReducers({
  main: mainReducers,
});


const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export default store;
