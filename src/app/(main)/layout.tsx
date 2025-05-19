"use client";
import { Poppins, Ubuntu, Varela_Round } from "next/font/google";
import ".././globals.css";
import NavigationBar from "../../components/navbar";
import { useEffect } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

const varela_round = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["latin"],
  weight: "400",
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const changeTheme = (theme: string) => {
    console.log("Theme changed to:", theme);
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  };

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDark) {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${ubuntu.variable} ${varela_round.variable} antialiased w-full px-[var(--main-screen-padding-horizontally)] py-[var(--main-screen-padding-vertically)] overflow-x-hidden`}
      >
        <section className="sticky top-5 z-40 max-w-[1400px] mx-auto">
          <NavigationBar changeTheme={changeTheme} />
        </section>
        <section className="max-w-[1400px] mx-auto">{children}</section>
      </body>
    </html>
  );
}
