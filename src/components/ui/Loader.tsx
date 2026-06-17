"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="
      fixed
      inset-0
      bg-black
      flex
      items-center
      justify-center
      z-[99999]
      "
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
      }}
      transition={{
        delay: 2,
        duration: 1,
      }}
    >
      <h1
        className="
        text-6xl
        font-bold
        text-yellow-500
        "
      >
        ACX
      </h1>
    </motion.div>
  );
}