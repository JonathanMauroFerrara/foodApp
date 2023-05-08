import { createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  remoteFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}

export default FavoriteContextProvider;
