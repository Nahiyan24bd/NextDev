import React from "react";
import type { Metadata } from "next";
import { Smartphone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "App Development | NextDev",
  description: "Cross-platform mobile application development services.",
};

export default function AppDevPage() {
  const features = [
    "Cross-platform iOS & Android mobile solutions",
    "Offline-first architecture with local SQLite/IndexedDB syncing",
    "Real-time Push Notifications & deep link integration",
    "Intuitive touch gestures and platform-native UI/UX",
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
          <Smartphone className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Mobile App Engineering</h2>
          <p className="text-sm text-gray-400">High-performance native & cross-platform apps</p>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed text-sm">
        We construct reliable and elegant mobile applications tailored to captivate your audience on both iOS and Android platforms, prioritizing fluid performance and battery efficiency.
      </p>

      <div className="divider my-2"></div>

      <h3 className="font-semibold text-base text-gray-200">Core Capabilities:</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 flex gap-3">
        <button className="btn btn-secondary btn-sm">Start Mobile Project</button>
      </div>
    </div>
  );
}