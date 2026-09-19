import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import AddToCartBtn from "@/app/components/AddToCartBtn";
import { ArrowLeft } from "lucide-react";
import db from "@/db.json";

export async function generateStaticParams() {
  return db.foods.map((food) => ({
    id: String(food.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const food = db.foods.find((item) => String(item.id) === String(id));

  return {
    title: food ? `${food.name} | NextDev Food` : "Food Item",
    description: food ? food.description : "Food item details",
  };
}

export default async function FoodDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const food = db.foods.find((item) => String(item.id) === String(id));

  if (!food) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-error">Food item not found!</h2>
        <Link href="/foods" className="btn btn-outline btn-sm">
          Back to Foods
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-base-200 border border-base-300 rounded-2xl overflow-hidden shadow-xl">
      <div className="relative h-72 w-full">
        <Image
          src={food.image}
          alt={food.name}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="badge badge-secondary">{food.category}</span>
          <span className="text-2xl font-bold text-primary">৳{food.price}</span>
        </div>

        <h1 className="text-3xl font-extrabold">{food.name}</h1>
        <p className="text-gray-300 leading-relaxed">{food.description}</p>

        <div className="pt-4 flex gap-3 border-t border-base-300 items-center">
          <Link href="/foods" className="btn btn-outline btn-sm gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Foods
          </Link>
          <AddToCartBtn food={food} />
        </div>
      </div>
    </div>
  );
}