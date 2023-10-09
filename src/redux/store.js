import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import favoriteReducer from "./favorite/favoriteSlice";
import catalogReducer from "./catalog/catalogSlice";

const favoritePersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const persistedUserReducer = persistReducer(
  favoritePersistConfig,
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    favorite: persistedUserReducer,
    catalog: catalogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ["transactions.date"],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
