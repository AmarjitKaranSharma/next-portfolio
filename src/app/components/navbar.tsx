import Image from "next/image";
import Link from "next/link";
import Avatar from "@/assets/images/avatar.svg";

export default function NavigationBar() {
  return (
    <nav className="flex items-center justify-between p-5 backdrop-blur-lg rounded-full bg-container-background">
      <section className="flex items-center gap-5">
        <Image src={Avatar} alt="avatar" width={70} />
        <p className="text-xl">Glad, You are here</p>
      </section>
      <section className="flex items-center gap-8 px-5">
        <Link className="text-xl font-medium text-primary" href="/">
          Home
        </Link>
        <Link className="text-xl font-medium text-primary" href="/work">
          Work
        </Link>
        <Link className="text-xl font-medium text-primary" href="/about">
          About
        </Link>
      </section>
    </nav>
  );
}
