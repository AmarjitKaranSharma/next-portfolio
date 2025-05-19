import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PulsingButton() {
  return (
    <div className="relative inline-block">
      {/* Pulsing animation rings */}
      <div
        className={`absolute inset-0 rounded-full "bg-purple-600"
        animate-ping opacity-15`}
      ></div>
      <div
        className={`absolute inset-0 rounded-full "bg-purple-600" animate-pulse opacity-30`}
        style={{ animationDelay: "300ms" }}
      ></div>
      {/* Actual button */}
      <Link
        href="/contact-form"
        className={`relative inline-flex items-center gap-2 px-8 py-4 rounded-full 
             bg-purple-600 hover:bg-purple-700 text-white
              transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/20`}
        aria-label="Get in touch"
      >
        Get in Touch
        <ArrowRight />
      </Link>
    </div>
  );
}
