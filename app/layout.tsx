import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

// ফন্ট কনফিগারেশন
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${poppins.className} min-h-screen bg-base-100 text-base-content`}>
       <CartProvider>
       <Navbar />
        <main className="max-w-6xl mx-auto p-6">{children}</main>
       </CartProvider>
      </body>
    </html>
  );
}