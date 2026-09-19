import Link from "next/link";
import React from "react";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* সার্ভিস সেকশনের ডেডিকেটেড সাইডবার */}
      <aside className="w-full md:w-56 bg-base-200 p-4 rounded-box h-fit">
        <h3 className="font-bold text-lg mb-3 border-b border-base-300 pb-2">
          Services
        </h3>
        <ul className="menu gap-1 p-0">
          <li>
            <Link href="/services/web-dev">Web Development</Link>
          </li>
          <li>
            <Link href="/services/app-dev">App Development</Link>
          </li>
        </ul>
      </aside>

      {/* সাব-পেজের কনটেন্ট */}
      <section className="flex-1 bg-base-200 p-6 rounded-box `min-h-[250px]`">
        {children}
      </section>
    </div>
  );
}