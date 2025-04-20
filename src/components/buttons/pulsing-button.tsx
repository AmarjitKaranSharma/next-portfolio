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
        href="#contact"
        className={`relative inline-flex items-center gap-2 px-8 py-4 rounded-full 
             bg-purple-600 hover:bg-purple-700 text-white
              transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/20`}
        aria-label="Get in touch"
      >
        Get in Touch
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </Link>
    </div>
  );
}
