import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "NextDev - Learning Next.js",
  description: "Complete Next.js module walkthrough",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={poppins.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-base-100 text-base-content antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-1 max-w-6xl w-full mx-auto px-4">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}