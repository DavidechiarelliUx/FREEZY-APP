import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducers from "../reducers";
import productTemplateReducers from "../reducers/productTemplateReducers";
import fridgeProductReducers from "../reducers/fridgeProductReducer";
import recipeReducers from "../reducers/recipeReducer";


const rootReducers = combineReducers({
  main: mainReducers,
  productTemplate : productTemplateReducers,
  fridgeProduct : fridgeProductReducers,
  recipes : recipeReducers,
});


const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export default store;
