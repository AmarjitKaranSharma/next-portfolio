// app/components/navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const activeRoute = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Log on initial render and whenever activeRoute changes
  console.log("NavigationBar rendered with pathname:", activeRoute);

  // Use useEffect to log when the pathname changes
  useEffect(() => {
    console.log("Pathname changed to:", activeRoute);
  }, [activeRoute]);

  return (
    <nav className="flex items-center justify-between p-5 backdrop-blur-lg rounded-full bg-container-background">
      <section className="flex items-center gap-5">
        <Image src="/avatar.svg" alt="avatar" width={70} height={70} />
        <p className="text-xl">Glad, You are here</p>
      </section>
      <section className="flex items-center gap-8 px-5 max-sm:hidden">
        <Link
          className={`text-xl font-medium ${
            activeRoute === "/" ? "text-active" : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`text-xl font-medium ${
            activeRoute.includes("/work") ? "text-active" : ""
          }`}
          href="/work/1"
        >
          Work
        </Link>
        <Link
          className={`text-xl font-medium ${
            activeRoute === "/intro" ? "text-active" : ""
          }`}
          href="/intro"
        >
          About
        </Link>
      </section>
      <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
          />
        </svg>
      </button>
      <section
        className={`flex items-center gap-8 px-5 sm:hidden flex-col fixed bg-background z-50 h-full w-full transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Link
          className={`text-xl font-medium ${
            activeRoute === "/" ? "text-active" : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`text-xl font-medium ${
            activeRoute.includes("/work") ? "text-active" : ""
          }`}
          href="/work/1"
        >
          Work
        </Link>
        <Link
          className={`text-xl font-medium ${
            activeRoute === "/intro" ? "text-active" : ""
          }`}
          href="/intro"
        >
          About
        </Link>
      </section>
    </nav>
  );
}
