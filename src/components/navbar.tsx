// app/components/navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shadecn-lib/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export default function NavigationBar() {
  const activeRoute = usePathname();

  // Log on initial render and whenever activeRoute changes
  console.log("NavigationBar rendered with pathname:", activeRoute);

  // Use useEffect to log when the pathname changes
  useEffect(() => {
    console.log("Pathname changed to:", activeRoute);
  }, [activeRoute]);

  return (
    <nav className="flex items-center justify-between h-[var(--navbar-height)] px-5 backdrop-blur-lg rounded-full bg-container-background">
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
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu></Menu>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              className={`text-xl font-medium ${
                activeRoute === "/" ? "text-active" : ""
              }`}
              href="/"
            >
              Home
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link
              className={`text-xl font-medium ${
                activeRoute.includes("/work") ? "text-active" : ""
              }`}
              href="/work/1"
            >
              Work
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link
              className={`text-xl font-medium ${
                activeRoute === "/intro" ? "text-active" : ""
              }`}
              href="/intro"
            >
              About
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
