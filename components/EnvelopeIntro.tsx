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
    }, 2000); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#F4F1ED] overflow-hidden">
      
      {/* FONDO DE RELIEVE INCOLORO */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "url('/images/patron-boda.png')",
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
          filter: "grayscale(100%)", 
          mixBlendMode: "multiply" 
        }}
      />

      {/* CONTENEDOR PRINCIPAL DEL SOBRE Y DECORACIONES */}
      <div 
        className="relative w-[360px] h-[250px] cursor-pointer drop-shadow-2xl mt-12"
        onClick={handleOpen}
      >
        
        {/* === DETALLE FLORAL SUPERIOR DERECHO (Detrás del sobre) === */}
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          src="/images/flores-arriba.png" 
          alt="Decoración floral"
          className="absolute -top-24 -right-16 w-56 object-contain z-[-1] pointer-events-none drop-shadow-sm"
        />

        {/* 1. INTERIOR TRASERO DEL SOBRE */}
        <div className="absolute inset-0 bg-[#7B8A72] rounded-md z-0" />

        {/* 2. LA TARJETA (Ajustada a h-[230px] para que NUNCA sobresalga por abajo) */}
        <motion.div
          initial={{ y: 8, opacity: 0 }}
          animate={opened ? { y: -160, opacity: 1 } : { y: 8, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="absolute inset-x-0 mx-auto top-2 w-[320px] h-[230px] bg-white rounded shadow-lg flex flex-col items-center justify-center font-serif text-[#2E2E2E] border border-gray-100 z-10 p-5"
        >
          <span className="font-script text-4xl text-[#3B4D3C] leading-tight text-center">
            Fernando <br/> & Laura
          </span>
          <span className="text-[11px] tracking-[0.25em] uppercase text-gray-500 mt-2 mb-3">
            13 . Marzo . 2027
          </span>
          <div className="w-12 h-[1px] bg-[#DBC18C] mb-2"></div>
          <span className="text-[10px] tracking-widest text-[#3B4D3C] uppercase font-medium">
            ¡Estás invitado!
          </span>
        </motion.div>

        {/* 3. FRENTE DEL SOBRE (Bolsillo inferior y solapas laterales en z-20) */}
        <svg 
          viewBox="0 0 360 250" 
          className="absolute bottom-0 left-0 w-full h-full z-20 pointer-events-none drop-shadow-md"
        >
          {/* Solapa lateral izquierda */}
          <polygon points="0,0 180,125 0,250" fill="#8F9E85" />
          {/* Solapa lateral derecha */}
          <polygon points="360,0 180,125 360,250" fill="#8F9E85" />
          {/* Solapa inferior */}
          <polygon points="0,250 180,125 360,250" fill="#9FAD95" />
        </svg>

        {/* 4. TAPA SUPERIOR DEL SOBRE */}
        <motion.div
          animate={opened ? { rotateX: -180, zIndex: 5 } : { rotateX: 0, zIndex: 30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute top-0 left-0 w-full h-[170px]"
        >
          <svg viewBox="0 0 360 170" className="w-full h-full drop-shadow-xl" preserveAspectRatio="none">
            <polygon points="0,0 360,0 180,170" fill="#9FAD95" />
          </svg>
        </motion.div>

        {/* === DETALLE FLORAL INFERIOR IZQUIERDO (Al frente de todo) === */}
        <motion.img
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          src="/images/flores-abajo.png" 
          alt="Decoración floral"
          className="absolute -bottom-14 -left-16 w-60 object-contain z-40 pointer-events-none drop-shadow-xl"
        />
        
        {/* === TEXTO INSTRUCTIVO === */}
        <motion.div
          animate={opened ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-24 inset-x-0 text-center pointer-events-none"
        >
          <span className="text-xs tracking-widest text-[#7B8A72] uppercase font-sans animate-pulse">
            Toca el sobre para abrir
          </span>
        </motion.div>

      </div>
    </div>
  );
}