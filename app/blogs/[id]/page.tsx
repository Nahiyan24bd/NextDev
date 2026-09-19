import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

interface Blog {
  id: string;
  title: string;
  desc: string;
  author: string;
  date: string;
}

// বিল্ড টাইমে সব ব্লগের পাথ তৈরি করে রাখা (SSG Optimization)
export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs: Blog[] = await res.json();

  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

// Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${id}`);
  const blog: Blog = await res.json();

  return {
    title: `${blog.title} | NextDev`,
    description: blog.desc,
  };
}

// Blog Details Component
export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/blogs/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-error">Blog not found!</h2>
        <Link href="/blogs" className="btn btn-sm btn-outline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  const blog: Blog = await res.json();

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