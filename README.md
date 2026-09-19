# NextDev - Next.js 15 Full-Stack Showcase Application

A modern, production-grade Next.js 15 web application built to master App Router paradigms, modern rendering techniques (CSR, SSR, SSG, ISR), responsive design, dynamic SEO metadata, and global state management.

---

## 🚀 Features & Highlights

- **Rendering Patterns Implemented:**
  - **Client-Side Rendering (CSR):** Real-time client-side search and filtering for food menus (`/foods`).
  - **Server-Side Rendering (SSR):** Fresh data fetching on every request for dynamic product details (`/foods/[id]`).
  - **Incremental Static Regeneration (ISR):** Cached blog posts revalidated in the background every 60 seconds (`/blogs`).
  - **Pre-rendering & Optimization:** Build-time static path generation using `generateStaticParams` for blazing-fast route loading.
- **UI & Experience Optimization:**
  - **React Suspense & Streaming:** Instant layout delivery with non-blocking component streaming and skeleton fallbacks.
  - **Modern UI Styling:** Built with Tailwind CSS and DaisyUI components with custom theme configurations.
  - **Standardized Icons:** Crisp, accessible vector icons powered by `lucide-react`.
  - **Typography:** Fully optimized zero-layout-shift font rendering via Google Fonts (`Poppins`).
- **Dynamic SEO:** Custom Open Graph tags, page titles, and descriptions dynamically generated via `generateMetadata`.
- **Global State Management:** Seamless cart interactions powered by React Context API (`CartProvider`) and custom hook `useCart`.
- **Mock REST API:** Independent local data server running JSON Server (`db.json`) for blogs and food resources.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, DaisyUI
- **Icons:** Lucide React
- **Data Fetching & Server:** Native Fetch API, JSON Server
- **State Management:** React Context API

---

## 📂 Project Structure

```text
├── app/
│   ├── about/              # About route
│   ├── blogs/              # ISR Blogs listing
│   │   └── [id]/           # SSG + ISR dynamic blog detail route
│   ├── components/         # Shared UI components (Navbar, CartBtn, Skeletons)
│   ├── contact/            # Contact route
│   ├── context/            # Global Cart Context & useCart custom hook
│   ├── foods/              # CSR / Streaming foods listing
│   │   └── [id]/           # SSR dynamic food item route
│   ├── services/           # Services route
│   ├── globals.css         # Tailwind & custom CSS layers
│   ├── layout.tsx          # Root layout wrapping CartProvider & Navbar
│   └── not-found.tsx       # Custom 404 error page
├── db.json                 # Mock backend database for blogs and foods
└── package.json