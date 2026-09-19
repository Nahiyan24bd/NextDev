import Image from "next/image";
import Link from "next/link";
import db from "@/db.json";

export default async function FoodList() {
  // লাইভ সার্ভারে ক্র্যাশ এড়াতে সরাসরি db.json থেকে ডেটা নেওয়া
  const foods = db.foods;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {foods.map((food) => (
        <div
          key={food.id}
          className="card bg-base-200 border border-base-300 shadow-lg overflow-hidden"
        >
          <figure className="relative h-48 w-full">
            <Image
              src={food.image}
              alt={food.name}
              fill
              className="object-cover"
            />
          </figure>
          <div className="card-body p-5">
            <div className="flex justify-between items-start">
              <h2 className="card-title text-lg font-bold">{food.name}</h2>
              <div className="badge badge-secondary">{food.category}</div>
            </div>
            <p className="text-sm text-gray-400 line-clamp-2">
              {food.description}
            </p>
            <div className="card-actions justify-between items-center mt-4">
              <span className="text-xl font-bold text-primary">৳{food.price}</span>
              <Link href={`/foods/${food.id}`} className="btn btn-sm btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}