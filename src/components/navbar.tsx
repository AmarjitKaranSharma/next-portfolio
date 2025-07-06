// app/components/navbar.tsx
"use client";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shadecn-lib/ui/dropdown-menu";
import {
  DownloadIcon,
  Menu,
  // Moon,
  // Sun
} from "lucide-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";

export default function NavigationBar({}: // changeTheme,
{
  changeTheme: (theme: string) => void;
}) {
  const activeRoute = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    // const prefersDark = window.matchMedia(
    //   "(prefers-color-scheme: dark)"
    // ).matches;
    // const storedTheme = localStorage.getItem("theme");
    // const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    // setTheme(initialTheme);
  }, []);

  // const toggleTheme = async (value: string) => {
  //   setTheme(value);
  //   if (theme) changeTheme(value);
  // };

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
      label: "Contact",
      route: "/contact-form",
      matchRoute: "contact-form",
    },
  ];

  return (
    <nav className="flex items-center justify-between h-[var(--navbar-height)] px-4 backdrop-blur-sm">
      <section className="flex items-center gap-5">
        {/* <div className="rounded-full w-14 overflow-hidden aspect-square grid place-items-center">
          <Image
            loading="lazy"
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={150}
          />
        </div> */}
        <p className="text-xl font-bold font-edu-qld">Amar</p>
      </section>
      <section className="flex items-center gap-8 px-5 max-sm:hidden">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            className={`text-base font-medium ${
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
        <motion.button
          className="bg-primary text-white p-2 rounded-full shadow-lg cursor-pointer group inline-flex justify-center items-center gap-2 max-sm:scale-75 text-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle project menu"
        >
          <span className="ml-2">Download CV</span>
          <DownloadIcon size={14} className={``} />
        </motion.button>
        {/* <button
          onClick={() => {
            toggleTheme(theme === "dark" ? "light" : "dark");
          }}
          className="p-2 rounded-full bg-opacity-20 backdrop-blur-sm"
          aria-label={theme ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <Sun></Sun> : <Moon></Moon>}
        </button> */}
      </section>
      <DropdownMenu open={menuOpen} onOpenChange={toggleMenu}>
        <DropdownMenuTrigger className="sm:hidden">
          <Menu className="cursor-pointer focus:border-none"></Menu>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background border-none p-3 space-y-2 w-max">
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.label}>
              <Link
                onClick={() => {
                  toggleMenu();
                }}
                className={`w-full text-md font-medium ${
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
          <DropdownMenuItem
            className="flex gap-5 items-center capitalize text-md font-medium"
          >
            Download CV
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
