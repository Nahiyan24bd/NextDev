"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import { ShoppingBag } from "lucide-react";

interface FoodItem {
  id: string;
  name: string;
  price: number;
}

export default function AddToCartBtn({ food }: { food: FoodItem }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart({ id: food.id, name: food.name, price: food.price })}
      className="btn btn-sm btn-primary gap-1"
    >
      <ShoppingBag className="w-4 h-4" />
      Order Now
    </button>
  );
}