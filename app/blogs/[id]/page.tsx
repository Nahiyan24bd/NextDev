import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import db from "@/db.json";



// লোকাল ডেটা দিয়ে বিল্ড টাইমে পাথ জেনারেট করা
export async function generateStaticParams() {
  return db.blogs.map((blog) => ({
    id: String(blog.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = db.blogs.find((item) => String(item.id) === String(id));

  return {
    title: blog ? `${blog.title} | NextDev` : "Blog Details | NextDev",
    description: blog ? blog.desc : "Blog details description",
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = db.blogs.find((item) => String(item.id) === String(id));

  if (!blog) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-error">Blog not found!</h2>
        <Link href="/blogs" className="btn btn-sm btn-outline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-base-200 border border-base-300 p-8 rounded-2xl shadow-xl space-y-6">
      <div className="space-y-2 border-b border-base-300 pb-4">
        <div className="flex gap-2 text-xs text-gray-400">
          <span>By {blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-primary">{blog.title}</h1>
      </div>

      <p className="text-gray-300 leading-relaxed text-base">{blog.desc}</p>

      <div className="pt-4">
        <Link href="/blogs" className="btn btn-outline btn-sm">
          ← Back to All Blogs
        </Link>
      </div>
    </div>
  );
}