"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const activeRoute = usePathname();
  return (
    <nav className="flex items-center justify-between p-5 backdrop-blur-lg rounded-full bg-container-background">
      <section className="flex items-center gap-5">
        <Image src="/avatar.svg" alt="avatar" width={70} height={70} />
        <p className="text-xl">Glad, You are here</p>
      </section>
      <section className="flex items-center gap-8 px-5">
        <Link
          className={`text-xl font-medium ${
            activeRoute == "/" ? "text-active" : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`text-xl font-medium ${
            activeRoute == "/work" ? "text-active" : ""
          }`}
          href="/work"
        >
          Work
        </Link>
        <Link
          className={`text-xl font-medium ${
            activeRoute == "/about" ? "text-active" : ""
          }`}
          href="/about"
        >
          About
        </Link>
      </section>
    </nav>
  );
}
