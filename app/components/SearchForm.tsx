"use client";
import { useRouter } from "next/navigation";
import { SyntheticEvent } from "react";

export default function SearchForm() {
  const router = useRouter();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const query = formData.get("search");

    if (query == "") return;

    router.push(`/${formData.get("search")}`);
  };

  return (
    <form action="" className="mb-8" onSubmit={handleSubmit}>
      <div className="flex">
        <input
          className="flex-1 rounded-l-md bg-gray-100 px-4 py-2"
          id="search"
          name="search"
          placeholder="Search by breed"
          type="text"
        />
        <button className="-ml-1 inline-flex items-center rounded-md rounded-l-none bg-blue-600 px-5 py-2 text-white">
          <svg
            fill="none"
            height="18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" x2="16.65" y1="21" y2="16.65" />
          </svg>
          <span className="ml-2">Search</span>
        </button>
      </div>
    </form>
  );
}
