"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useCart } from "../context/CartContext";
// Lucide icons import
import { ShoppingCart, Menu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const { cartCount } = useCart();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services/web-dev" },
    { name: "Blogs", href: "/blogs" },
    { name: "Foods", href: "/foods" },
  ];

  const renderNavLinks = () =>
    links.map((link) => {
      const isActive =
        pathname === link.href ||
        (link.href !== "/" && pathname.startsWith(link.href));

      return (
        <li key={link.href}>
          <Link
            href={link.href}
            className={
              isActive ? "bg-primary text-primary-content font-bold" : ""
            }
          >
            {link.name}
          </Link>
        </li>
      );
    });

  return (
    <div className="navbar bg-base-200 shadow-md px-4 sm:px-16">
      {/* মোবাইল মেনু বাটন */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden mr-2"
          >
            {/* Lucide Menu Icon */}
            <Menu className="h-6 w-6" />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-base-300 gap-1"
          >
            {renderNavLinks()}
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
          NextDev
        </Link>
      </div>

      {/* ডেস্কটপ লিংকস */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          {renderNavLinks()}
        </ul>
      </div>

      {/* কার্ট আইকন ও লগইন বাটন */}
      <div className="navbar-end gap-3">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            {/* Lucide ShoppingCart Icon */}
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="badge badge-sm badge-warning indicator-item font-bold">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        <button className="btn btn-primary btn-sm">Login</button>
      </div>
    </div>
  );
};

export default Navbar;