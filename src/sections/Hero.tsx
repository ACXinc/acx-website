"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 px-6 text-center">

        <div className="flex justify-center">
          <Image
            src="/images/acx-logo.png"
            alt="ACX Logo"
            width={220}
            height={220}
            priority
          />
        </div>

        <p className="mt-4 text-gray-400">
          Full-Stack Developer • Founder of ACX
        </p>

        <h1 className="mt-6 max-w-5xl mx-auto text-4xl md:text-6xl font-bold leading-tight text-white">
          Adem Chebbi — Founder of ACX
          <br />
          Building Modern Digital Solutions
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
          Transforming ideas into websites, web applications and scalable
          digital systems for businesses, startups and entrepreneurs.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-white font-semibold"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="px-8 py-4 rounded-xl border border-gray-700 hover:border-blue-500 transition text-white"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl border border-gray-700 hover:border-blue-500 transition text-white"
          >
            Book a Call
          </a>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl text-gray-500">
        ↓
      </div>

    </section>
  );
}