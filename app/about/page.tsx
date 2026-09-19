import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Code2, Rocket, Layers, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | NextDev',
  description: 'Learn more about NextDev and our modern web application stack.',
};

export default function AboutPage() {
  const highlights = [
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: 'App Router Architecture',
      description: 'Leveraging nested layouts, route handlers, and streaming server components.',
    },
    {
      icon: <Code2 className="w-6 h-6 text-secondary" />,
      title: 'Modern Styling',
      description: 'Crafted with Tailwind CSS and DaisyUI semantic components for rapid prototyping.',
    },
    {
      icon: <Rocket className="w-6 h-6 text-accent" />,
      title: 'Optimized Rendering',
      description: 'Blending Client Components, Server-Side Rendering (SSR), and Static Regeneration (ISR).',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-warning" />,
      title: 'Fast Deployment',
      description: 'Configured and optimized for automated CI/CD builds on Netlify.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-primary">About NextDev</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">
          NextDev is a playground and showcase project dedicated to mastering the full breadth of Next.js 15, from modern data fetching patterns to seamless global state management.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="card bg-base-200 border border-base-300 p-6 space-y-3 shadow-md hover:border-primary/50 transition-colors"
          >
            <div className="p-3 bg-base-300 w-fit rounded-xl">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Call to Action */}
      <div className="bg-base-200 border border-base-300 p-8 rounded-2xl text-center space-y-4">
        <h2 className="text-2xl font-bold">Ready to explore our work?</h2>
        <p className="text-gray-400 text-sm">
          Check out our latest articles and food listings powered by Next.js.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link href="/blogs" className="btn btn-primary btn-sm">
            Explore Blogs
          </Link>
          <Link href="/foods" className="btn btn-outline btn-sm">
            View Foods
          </Link>
        </div>
      </div>
    </div>
  );
}