import Link from "next/link";
import React from "react";
import { Globe, Heart, MessageCircle, Share2 } from "lucide-react";
import { NAV_LINKS } from "./navLinks"; // একই সেন্ট্রাল সোর্স থেকে রিসিভ হচ্ছে

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-base-300 bg-base-200/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3 md:col-span-2">
            <span className="text-2xl font-black tracking-tight text-primary">
              NextDev
            </span>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              A comprehensive showcase demonstrating full-stack Next.js 15 capabilities, SSR streaming, static site generation, and state management.
            </p>
            <div className="flex gap-4 pt-2 text-gray-400">
              <a href="https://github.com/Nahiyan24bd" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-base-300 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} NextDev. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built by <Heart className="w-3.5 h-3.5 text-error fill-error" /> Nahiyan24
          </p>
        </div>
      </div>
    </footer>
  );
}