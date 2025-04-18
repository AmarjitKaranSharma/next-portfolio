// app/components/navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shadecn-lib/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export default function NavigationBar() {
  const activeRoute = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const menuItems = [
    {
      label: "Home",
      route: "/",
      matchRoute: null,
    },
    {
      label: "Work",
      route: "/work/1",
      matchRoute: "work",
    },
    {
      label: "About",
      route: "/intro",
      matchRoute: null,
    },
  ];

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
        {menuItems.map((item) => (
          <Link
            key={item.label}
            className={`text-xl font-medium ${
              activeRoute == item.route
                ? "text-active"
                : activeRoute.includes(item.matchRoute!)
                ? "text-active"
                : ""
            }`}
            href={item.route}
          >
            {item.label}
          </Link>
        ))}
      </section>
      <DropdownMenu open={menuOpen} onOpenChange={toggleMenu}>
        <DropdownMenuTrigger className="sm:hidden">
          <Menu></Menu>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.label}>
              <Link
                onClick={toggleMenu}
                className={`text-xl font-medium ${
                  activeRoute === item.route
                    ? "text-active"
                    : activeRoute.includes(item.matchRoute!)
                    ? "text-active"
                    : ""
                }`}
                href={item.route}
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
