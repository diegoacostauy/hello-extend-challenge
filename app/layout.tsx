import { Nunito } from "@next/font/google";

import Footer from "./footer";
import "./globals.css";
import Header from "./header";
import SearchForm from "./components/SearchForm";
import Favorites from "./components/Favorites";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={nunito.className} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="container">
          <Header />
          <SearchForm />
          <main>{children}</main>
          <Favorites />
          <Footer />
        </div>
      </body>
    </html>
  );
}
