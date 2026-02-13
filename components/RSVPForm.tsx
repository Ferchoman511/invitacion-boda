"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function RSVPForm() {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    await supabase.from("rsvp").insert([{ name }]);
    alert("Confirmación enviada 💍");
  };

  return (
    <div className="max-w-md mx-auto my-20 text-center">
      <input
        type="text"
        placeholder="Tu nombre"
        className="border-b border-gray-400 bg-transparent p-2 w-full"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="mt-6 border border-[#C6A75E] text-[#C6A75E] px-6 py-2 rounded-full hover:bg-[#C6A75E] hover:text-white transition"
      >
        Confirmar Asistencia
      </button>
    </div>
  );
}
