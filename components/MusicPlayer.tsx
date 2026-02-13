"use client";

import { Music, Pause } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

export default function MusicPlayer({
  isPlaying,
  toggleMusic,
}: MusicPlayerProps) {
  return (
    <button
      onClick={toggleMusic}
      className="
        fixed bottom-6 right-6
        w-14 h-14
        rounded-full
        flex items-center justify-center
        bg-[#C6A75E]
        text-white
        shadow-lg
        hover:scale-105
        transition
        z-50
      "
    >
      {isPlaying ? <Pause size={20} /> : <Music size={20} />}
    </button>
  );
}
