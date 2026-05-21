"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase"; // 👈 Importamos el cliente de Supabase

export default function RSVPForm() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);
  const [estadoEnvio, setEstadoEnvio] = useState<{
    tipo: "exito" | "error" | null;
    texto: string;
  }>({
    tipo: null,
    texto: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    setEstadoEnvio({ tipo: null, texto: "" });

    try {
      // 🚀 ENVIAR A SUPABASE
      // Cambia 'rsvps' por el nombre exacto de tu tabla en Supabase
      const { error } = await supabase.from("rsvp").insert([
        {
          name: nombre,
          message: mensaje, // 👈 Aquí se guarda tu nuevo campo
        },
      ]);

      if (error) throw error;

      // 🧹 Si todo sale bien, limpiamos los campos del formulario
      setNombre("");
      setMensaje("");

      setEstadoEnvio({
        tipo: "exito",
        texto: "¡Tu asistencia y mensaje han sido guardados con éxito!",
      });
    } catch (error: any) {
      console.error("Error al guardar en Supabase:", error);
      setEstadoEnvio({
        tipo: "error",
        texto:
          "Hubo un problema al enviar tus datos. Por favor, intenta de nuevo.",
      });
    } finally {
      setCargando(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 max-w-lg mx-auto px-4"
    >
      {/* Campo de Nombre */}
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre completo"
        required
        disabled={cargando}
        className="w-full bg-transparent border-b border-[#C6A75E] py-2 px-4 focus:outline-none focus:border-[#2E2E2E] transition-colors font-serif placeholder:text-[#6B6B6B] disabled:opacity-50"
      />

      {/* Cuadro de texto para el Mensaje */}
      <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        placeholder="¿Algún mensaje o restricción alimenticia para los novios?"
        rows={4}
        disabled={cargando}
        className="w-full bg-transparent border border-[#C6A75E] py-3 px-4 focus:outline-none focus:border-[#2E2E2E] transition-colors font-serif placeholder:text-[#6B6B6B] resize-none disabled:opacity-50"
      ></textarea>

      {/* Botón de Enviar */}
      <button
        type="submit"
        disabled={cargando}
        rel="noopener noreferrer"
        className="
            px-8 py-4
            border border-[#C6A75E]
            text-[#C6A75E]
            rounded-full
            hover:bg-[#C6A75E]
            hover:text-white
            transition-all duration-300
          "
      >
        {cargando ? "Enviando..." : "Confirmar Asistencia"}
      </button>

      {/* Alertas de éxito o error */}
      {estadoEnvio.tipo === "exito" && (
        <p className="text-[#C6A75E] font-serif text-center transition-all">
          {estadoEnvio.texto}
        </p>
      )}
      {estadoEnvio.tipo === "error" && (
        <p className="text-red-600 font-serif text-center transition-all text-sm">
          {estadoEnvio.texto}
        </p>
      )}
    </form>
  );
}
