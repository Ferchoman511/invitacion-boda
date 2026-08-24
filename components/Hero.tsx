"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="z-10 max-w-4xl"
      >
        <span className="text-[#C6A75E] tracking-[0.4em] uppercase text-xs mb-8 block font-medium">
          Save the Date
        </span>

        {/* Divisor elegante */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="w-16 h-[1px] bg-[#C6A75E]/40" />
          <span className="text-[#C6A75E] text-xl">✦</span>
          <div className="w-16 h-[1px] bg-[#C6A75E]/40" />
        </div>

        {/* Fecha */}
        <p className="font-serif text-lg md:text-xl tracking-[0.3em] text-[#6B6B6B] uppercase mt-6">
          13 . MARZO . 2027
        </p>
      </motion.div>
    </section>
  );
}