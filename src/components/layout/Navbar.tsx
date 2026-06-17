import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-black/70
      backdrop-blur-md
      border-b
      border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-wider"
        >
          ACX
        </Link>

        <div className="hidden md:flex gap-8 text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="#about" className="hover:text-white transition">
            About
          </Link>

          <Link href="#services" className="hover:text-white transition">
            Services
          </Link>

          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        <Link
          href="#contact"
          className="
          px-5
          py-2
          rounded-full
          bg-yellow-500
          text-black
          font-semibold
          hover:bg-yellow-400
          transition
          "
        >
          Start Project
        </Link>

      </div>
    </nav>
  );
}