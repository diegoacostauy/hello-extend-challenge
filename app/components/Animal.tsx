"use client";
import Image from "next/image";

import useFavoriteStore from "@/store/favorites";

export default function Animal({ animal, key }: { animal: string; key: number }) {
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const favorites = useFavoriteStore((state) => state.favorites);
  const isFavorite = favorites.includes(animal);

  return (
    <div key={key} className="relative col-span-4 flex">
      <button
        className="absolute top-4 right-4 z-10 text-red-500"
        onClick={() => toggleFavorite(animal)}
      >
        <svg
          fill={`${isFavorite ? "currentColor" : "transparent"}`}
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
      </button>
      <Image
        alt="Dog"
        className="h-[160px] w-full object-cover"
        height={160}
        src={animal}
        width={160}
      />
    </div>
  );
}
