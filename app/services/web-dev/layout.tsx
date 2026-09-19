import Link from "next/link";
import React from "react";
import { Globe, Smartphone, Layers } from "lucide-react";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl mx-auto py-4 space-y-6">
      {/* হেডার */}
      <div className="border-b border-base-300 pb-4">
        <h1 className="text-3xl font-extrabold text-primary flex items-center gap-2">
          <Layers className="w-8 h-8" /> Our Services
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Explore the professional digital solutions we build for modern businesses.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* সার্ভিস সাইডবার */}
        <aside className="w-full md:w-64 bg-base-200 border border-base-300 p-4 rounded-2xl shadow-sm">
          <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase px-3">
            Service Menu
          </span>
          <ul className="menu gap-2 mt-3 p-0">
            <li>
              <Link
                href="/services/web-dev"
                className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-primary hover:text-white transition-all font-medium"
              >
                <Globe className="w-5 h-5" />
                <span>Web Development</span>
              </Link>
            </li>
            <li>
              <Link
                href="/services/app-dev"
                className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-primary hover:text-white transition-all font-medium"
              >
                <Smartphone className="w-5 h-5" />
                <span>App Development</span>
              </Link>
            </li>
          </ul>
        </aside>

        {/* সাব-পেজের কনটেন্ট এরিয়া */}
        <section className="flex-1 w-full bg-base-200 border border-base-300 p-6 md:p-8 rounded-2xl shadow-sm `min-h-[400px`]">
          {children}
        </section>
      </div>
    </div>
  );
}