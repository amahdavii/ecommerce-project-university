import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import categoryReducer from "./categories";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  categories: categoryReducer,
  cart: persistReducer(persistConfig, cartReducer),
});

export const store = configureStore({
  reducer: rootReducer,
});
