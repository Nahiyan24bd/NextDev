"use client";

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { useCart } from "../context/CartContext";
import { NAV_LINKS } from "./navLinks";
import ThemeToggle from "./ThemeToggle"; // ১. ইমপোর্ট করো

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.length;

  return (
    <header className="w-full bg-base-100 border-b border-base-300 sticky top-0 z-50">
      <div className="navbar max-w-6xl mx-auto px-4">
        {/* Mobile Hamburger & Brand */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <Menu className="w-5 h-5" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-200 rounded-box w-52"
            >
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/" className="text-2xl font-black text-primary ml-2 lg:ml-0">
            NextDev
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 font-medium">
            {NAV_LINKS.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* End Actions: Theme Toggle, Cart, Login */}
        <div className="navbar-end gap-2">
          {/* থিম টগল বাটন */}
          <ThemeToggle />

          {/* Cart Icon */}
          <Link href="/cart" className="btn btn-ghost btn-circle relative">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="badge badge-sm badge-primary absolute -top-1 -right-1">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Login */}
          <button className="btn btn-primary btn-sm">Login</button>
        </div>
      </div>
    </header>
  );
}