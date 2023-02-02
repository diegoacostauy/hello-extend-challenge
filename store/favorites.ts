import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface FavoriteState {
  favorites: string[];
  toggleFavorite: (favorite: string) => void;
  isFavorite: (favorite: string) => void;
}

const useFavoriteStore = create<FavoriteState>()(
  devtools(
    persist(
      (set) => ({
        favorites: [],
        toggleFavorite: (favorite) =>
          set((state) => {
            if (state.favorites.includes(favorite)) {
              return {
                favorites: state.favorites.filter((fav) => fav != favorite),
              };
            } else {
              return {
                favorites: [favorite, ...state.favorites],
              };
            }
          }),
      }),
      {
        name: "favorite-storage",
      },
    ),
  ),
);

export default useFavoriteStore;
