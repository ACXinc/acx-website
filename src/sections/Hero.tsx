"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      bg-black
      "
    >

      {/* Background */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-blue-900/20
        via-black
        to-black
        "
      />

      {/* Glow */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        h-[500px]
        bg-blue-600/10
        rounded-full
        blur-3xl
        "
      />


      <div
        className="
        relative
        z-10
        text-center
        px-6
        "
      >


        {/* Logo Animation */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8
          }}

          animate={{
            opacity: 1,
            scale: 1
          }}

          transition={{
            duration: 1
          }}

          className="
          flex
          justify-center
          "
        >

          <Image
            src="/images/acx-logo.png"
            alt="ACX Logo"
            width={220}
            height={220}
            priority
          />

        </motion.div>



        {/* Small Title */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: 0.3
          }}

          className="
          text-gray-400
          mt-4
          "
        >
          Full-Stack Developer • Founder of ACX
        </motion.p>



        {/* Main Title */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: 0.5
          }}

          className="
          mt-6
          text-4xl
          md:text-6xl
          font-bold
          max-w-5xl
          mx-auto
          leading-tight
          "
        >

          Adem Chebbi — Founder of ACX,
          <br />

          Building Modern Digital Solutions

        </motion.h1>



        {/* Description */}
        <motion.p
          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 0.8
          }}

          className="
          max-w-2xl
          mx-auto
          mt-6
          text-gray-400
          text-lg
          "
        >

          Transforming ideas into websites,
          web applications and scalable digital systems
          for businesses, startups and entrepreneurs.

        </motion.p>




        {/* Buttons */}
        <motion.div
          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 1
          }}

          className="
          mt-10
          flex
          flex-wrap
          justify-center
          gap-4
          "
        >

          <Button
            text="Hire Me"
            href="#contact"
          />


          <Button
            text="View Projects"
            href="#projects"
          />


          <Button
            text="Book a Call"
            href="#contact"
          />


        </motion.div>


      </div>




      {/* Scroll Indicator */}
      <div
        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        animate-bounce
        text-gray-500
        text-2xl
        "
      >
        ↓
      </div>


    </section>
  );
}