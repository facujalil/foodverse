import { ReactNode } from "react";
import "./globals.css";
import { Quicksand } from "next/font/google";
import StoreProvider from "./store/StoreProvider";
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
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
