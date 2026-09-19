import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development | NextDev",
  description: "Modern, high-performance web development services.",
};

export default function WebDevPage() {
  const features = [
    "Full-Stack Next.js 15 & React applications",
    "Tailwind CSS & DaisyUI custom responsive interfaces",
    "Optimized Server Components & Streaming SSR",
    "SEO optimization with structured JSON-LD & Dynamic OG tags",
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-primary/10 text-primary rounded-xl">
          <Globe className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Modern Web Development</h2>
          <p className="text-sm text-gray-400">Blazing-fast and scalable web solutions</p>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed text-sm">
        We specialize in engineering robust web architectures designed for speed, security, and conversion. From single-page apps to complex enterprise systems, our applications deliver exceptional user experiences.
      </p>

      <div className="divider my-2"></div>

      <h3 className="font-semibold text-base text-gray-200">What We Deliver:</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 flex gap-3">
        <button className="btn btn-primary btn-sm">Get Web Quote</button>
      </div>
    </div>
  );
}