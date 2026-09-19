import Image from "next/image";
import Link from "next/link";
import Counter from "./components/Counter";
import {
  BookOpen,
  Utensils,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Boxes,
} from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Rendering Engine", val: "Next.js 15" },
    { label: "Styling System", val: "Tailwind v4" },
    { label: "Deployment", val: "Netlify Edge" },
    { label: "Data Flow", val: "SSG & ISR" },
  ];

  const highlights = [
    {
      icon: <Zap className="w-5 h-5 text-warning" />,
      title: "Blazing Fast Streaming",
      desc: "Suspense boundaries allow components to stream progressively without blocking page loads.",
    },
    {
      icon: <Boxes className="w-5 h-5 text-primary" />,
      title: "Modular Layouts",
      desc: "Deeply nested layouts and route grouping simplify application scalability.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-success" />,
      title: "Production Ready",
      desc: "Optimized asset compression, clean TypeScript contracts, and reliable Netlify build configs.",
    },
  ];

  return (
    <div className="space-y-16 py-6">
      {/* Hero Header */}
      <section className="text-center space-y-5 max-w-3xl mx-auto">
        <div className="badge badge-primary badge-outline gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Next.js 15 Full-Stack Experience
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Crafting Modern Web Apps With <span className="text-primary">NextDev</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
          এখানে আমরা শিখছি মডার্ন ওয়েব আর্কিটেকচার, নেস্টেড লেআউট, সার্ভার ও ক্লায়েন্ট কম্পোনেন্ট এবং অপ্টিমাইজড ইমেজ রেন্ডারিং।
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link href="/blogs" className="btn btn-primary btn-md gap-2">
            Explore Articles <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/foods" className="btn btn-outline btn-md">
            Browse Store
          </Link>
        </div>
      </section>

      {/* Banner Showcase */}
      <section className="relative w-full h-80 `sm:h-[420px]` rounded-3xl overflow-hidden border border-base-300 shadow-2xl">
        <Image
          src="/images/banner.jpg"
          alt="Developer Workspace"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 `bg-gradient-to-t` from-base-100/90 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <span className="badge badge-neutral bg-base-300/80 backdrop-blur-md text-xs py-2 px-3 border-none">
            Production Build Verified
          </span>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-base-200 border border-base-300 rounded-2xl p-5 text-center shadow-sm"
          >
            <div className="text-2xl font-black text-primary">{item.val}</div>
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </section>

      {/* Interactive Client Component Showcase */}
      <section className="bg-base-200 border border-base-300 rounded-3xl p-8 max-w-xl mx-auto text-center space-y-4 shadow-sm">
        <div className="badge badge-secondary badge-outline text-xs uppercase font-semibold">
          Interactive Demo
        </div>
        <h3 className="text-2xl font-bold">Client Component State</h3>
        <p className="text-xs text-gray-400 max-w-sm mx-auto">
          Testing reactive local React states seamlessly integrated alongside static server components.
        </p>
        <div className="pt-2 flex justify-center">
          <Counter />
        </div>
      </section>

      {/* Key Feature Highlights */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold">Core Architecture</h2>
          <p className="text-gray-400 text-sm">Key strengths designed into this project</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-base-200 border border-base-300 p-6 rounded-2xl space-y-3 shadow-sm hover:border-primary/40 transition-all"
            >
              <div className="p-3 bg-base-300 w-fit rounded-xl">{item.icon}</div>
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Quick Cards */}
      <section className="grid sm:grid-cols-2 gap-6">
        <div className="card bg-base-200 border border-base-300 p-6 rounded-2xl space-y-4 hover:border-primary/50 transition-all shadow-sm">
          <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Tech Articles & Blogs</h3>
            <p className="text-sm text-gray-400 mt-1">
              Read comprehensive write-ups covering App Router nested layouts, Netlify CI/CD, and Next.js mechanics.
            </p>
          </div>
          <Link href="/blogs" className="btn btn-primary btn-sm w-fit gap-2">
            Read Blogs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="card bg-base-200 border border-base-300 p-6 rounded-2xl space-y-4 hover:border-secondary/50 transition-all shadow-sm">
          <div className="p-3 bg-secondary/10 text-secondary w-fit rounded-xl">
            <Utensils className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Food Ordering Catalog</h3>
            <p className="text-sm text-gray-400 mt-1">
              Test dynamic item details, cart state interactions, and React Suspense loading states.
            </p>
          </div>
          <Link href="/foods" className="btn btn-secondary btn-sm w-fit gap-2">
            View Foods <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}