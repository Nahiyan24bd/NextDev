import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <h1 className="text-7xl font-extrabold text-error">404</h1>
      <h2 className="text-2xl font-semibold">পেজটি খুঁজে পাওয়া যায়নি!</h2>
      <p className="text-gray-400">
        আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি স্থানান্তরিত বা মুছে ফেলা হয়েছে।
      </p>
      <Link href="/" className="btn btn-primary">
        হোমে ফিরে যান
      </Link>
    </div>
  );
}