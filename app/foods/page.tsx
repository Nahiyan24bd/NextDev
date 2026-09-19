import { Suspense } from "react";
import FoodList from "./FoodList";
import FoodSkeleton from "../components/FoodSkeleton";

export default function FoodsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold">Delicious Foods</h1>
        <p className="text-gray-400 text-sm">
          Streamed seamlessly using React Suspense & Server Components
        </p>
      </div>

      {/* ডেটা ফেচ হওয়ার সময় FoodSkeleton দেখাবে */}
      <Suspense
  fallback={
    <div className="flex justify-center items-center py-24">
      <span className="loading loading-spinner loading-lg text-warning"></span>
    </div>
  }
>
  <FoodList />
</Suspense>
    </div>
  );
}