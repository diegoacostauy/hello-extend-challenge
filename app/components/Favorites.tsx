"use client";

import useFavoriteStore from "@/store/favorites";

import Animal from "./Animal";
import Grid from "./Grid";

export default function Favorites() {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <section>
      <div className="mb-6 flex items-center gap-x-4">
        <span className="text-red-500">
          <svg
            fill="currentColor"
            height="20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
          </svg>
        </span>
        <h2 className="text-2xl font-semibold">Favorites</h2>
      </div>
      {favorites.length ? (
        <Grid>
          {favorites.map((animal, idx) => (
            <Animal key={idx} animal={animal} />
          ))}
        </Grid>
      ) : (
        <p>There are no favorites yet.</p>
      )}
    </section>
  );
}
