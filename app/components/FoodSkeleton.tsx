export default function FoodSkeleton() {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="card bg-base-200 border border-base-300 shadow-md p-4 space-y-4 animate-pulse"
          >
            <div className="h-48 bg-base-300 rounded-xl w-full"></div>
            <div className="h-5 bg-base-300 rounded w-3/4"></div>
            <div className="h-4 bg-base-300 rounded w-full"></div>
            <div className="h-4 bg-base-300 rounded w-1/2"></div>
            <div className="flex justify-between items-center pt-4">
              <div className="h-6 bg-base-300 rounded w-16"></div>
              <div className="h-8 bg-base-300 rounded w-24"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }