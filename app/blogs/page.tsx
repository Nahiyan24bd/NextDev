import Link from "next/link";
import db from "@/db.json";

export default function BlogsPage() {
  const blogs = db.blogs;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold">All Blogs</h1>
      <div className="grid gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 bg-base-200 border border-base-300 rounded-xl">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-sm text-gray-400">{blog.desc}</p>
            <Link href={`/blogs/${blog.id}`} className="btn btn-sm btn-primary mt-3">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}