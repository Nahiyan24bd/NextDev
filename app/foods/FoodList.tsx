import Image from "next/image";
import Link from "next/link";

interface Food {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export default async function FoodList() {
  // স্ট্রিমিং দেখার সুবিধার্থে কৃত্রিমভাবে ২ সেকেন্ড ডিলে (Delay)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch("http://localhost:5000/foods", {
    cache: "no-store",
  });
  const foods: Food[] = await res.json();

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