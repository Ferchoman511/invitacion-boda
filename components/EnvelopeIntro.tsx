"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export default function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);

    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative w-80 h-56 cursor-pointer" onClick={handleOpen}>
        {/* Carta interior */}
        <motion.div
          initial={{ y: 40 }}
          animate={opened ? { y: -80, opacity: 0 } : { y: 40 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-40 bg-white rounded-md shadow-md flex items-center justify-center font-serif text-[#2E2E2E]"
        >
          Abrir Invitación
        </motion.div>

        {/* Base del sobre */}
        <div className="absolute bottom-0 w-full h-40 bg-[#E8DED2] rounded-md shadow-xl" />

        {/* Solapa (flap) */}
        <motion.div
          animate={opened ? { rotateX: 180 } : { rotateX: 0 }}
          transition={{ duration: 1 }}
          style={{
            transformOrigin: "top",
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
          }}
          className="absolute top-0 w-full h-28 bg-[#D8CBB8]"
        />
      </div>
    </div>
  );
}
