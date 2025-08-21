"use client";
import {
  Edu_QLD_Beginner,
  Poppins,
  Ubuntu,
  Varela_Round,
} from "next/font/google";
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

const edu_qld = Edu_QLD_Beginner({
  variable: "--font-edu-qld",
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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amarjit Karan Sharma</title>
      </head>
      <body
        className={`${poppins.variable} ${ubuntu.variable} ${varela_round.variable} ${edu_qld.variable} antialiased w-full overflow-x-hidden`}
      >
        <section className="sticky top-0 z-[100] w-full">
          <NavigationBar changeTheme={changeTheme} />
        </section>
        <section className="max-w-[1400px] mx-auto px-[var(--main-screen-padding-horizontally)]">
          {children}
        </section>
      </body>
    </html>
  );
}
