import { ReactNode } from "react";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { RecipesProvider } from "./context/RecipesContext";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--quicksand-font",
  display: "swap",
});

export const metadata = {
  title: "Foodverse",
  description: "A food recipe app build with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={quicksand.variable}>
      <head>
        <script
          async
          src="https://kit.fontawesome.com/c8859f7b0c.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <RecipesProvider>
          <Header />
          {children}
          <Footer />
        </RecipesProvider>
      </body>
    </html>
  );
}
