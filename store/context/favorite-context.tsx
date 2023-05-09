import { createContext, useState } from "react";
import React from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id: any) => {},
  removeFavorite: (id: any) => {},
});

export default function FavoriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<any[]>([]);

  function addFavorite(newID) {
    setFavoriteMealIds([...favoriteMealIds, newID]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((prevMeals: any[]) => {
      const newMeals: any[] = prevMeals.filter((mealID) => mealID !== id);
      return newMeals;
    });
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
