import Image from "next/image";
import Link from "next/link";
import Counter from "./components/Counter";
// import bannerImg from "@/../public/banner.jpg"; // অথবা সরাসরি "/banner.jpg"

export default function Home() {
  return (
    <div className="space-y-8 py-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Next.js 15 এ স্বাগতম!
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          এখানে আমরা শিখছি মডার্ন ওয়েব আর্কিটেকচার, নেস্টেড লেআউট এবং অপ্টিমাইজড ইমেজ রেন্ডারিং।
        </p>
      </div>

      <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-base-300 shadow-xl">
        <Image
          src="/images/banner.jpg"
          alt="Developer Workspace"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="flex justify-center">
        <Counter />
      </div>

      <div className="text-center">
        <Link href="/blogs" className="btn btn-primary">
          Explore All Blogs
        </Link>
      </div>
    </div>
  );
}