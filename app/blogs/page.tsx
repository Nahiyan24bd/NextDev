import Link from "next/link";
import React from "react";

// TypeScript-এর জন্য ডেটার টাইপ ডিফাইন করা
interface Blog {
  id: string;
  title: string;
  desc: string;
  author: string;
  date: string;
}

export default async function BlogsPage() {
    // ISR: ডেটা ৬০ সেকেন্ড ক্যাশে থাকবে, এরপর ব্যাকগ্রাউন্ডে রিভ্যালিডেট হবে
  const res = await fetch("http://localhost:5000/blogs", {
    next: {revalidate: 60},
  });

  const posts: Blog[] = await res.json();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">All Blogs ({posts.length})</h1>
      
      {/* ৩টি কলামের রেসপন্সিভ গ্রিড */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-base-200 border border-base-300 shadow-md p-5 flex flex-col justify-between"
          >
            <div>
              <span className="badge badge-primary badge-sm mb-2">#{post.id}</span>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                {post.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-base-300 flex justify-between items-center">
              <span className="text-xs text-gray-400">{post.author}</span>
              {/* নির্দিষ্ট ব্লগের পেজে যাওয়ার ডায়নামিক লিংক */}
              <Link href={`/blogs/${post.id}`} className="btn btn-sm btn-primary">
                Read Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}