"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="font-serif text-5xl md:text-6xl tracking-wide"
      >
        Laura & Fernando
      </motion.h1>

      <p className="mt-6 tracking-widest uppercase text-lg">27 Marzo 2027</p>
    </section>
  );
}
