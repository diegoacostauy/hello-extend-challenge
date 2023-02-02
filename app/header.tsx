import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-5 py-8">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-semibold">Dog Breeds</h1>
        </Link>
        <Link className="text-red-500" href="/favorites">
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
        </Link>
      </div>
    </header>
  );
}
