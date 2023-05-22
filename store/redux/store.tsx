import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favorite.jsx";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteSlice,
  },
});
