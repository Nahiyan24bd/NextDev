"use client"; // এটি ক্লায়েন্ট কম্পোনেন্ট হিসেবে চিহ্নিত করে

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4 bg-base-300 p-4 rounded-xl w-fit">
      <button 
        onClick={() => setCount(count - 1)} 
        className="btn btn-circle btn-sm btn-error"
      >
        -
      </button>
      <span className="text-xl font-bold">{count}</span>
      <button 
        onClick={() => setCount(count + 1)} 
        className="btn btn-circle btn-sm btn-success"
      >
        +
      </button>
    </div>
  );
}