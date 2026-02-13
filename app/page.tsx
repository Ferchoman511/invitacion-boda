"use client";

import { useRef, useState } from "react";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import MainContent from "@/components/MainContent";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.log("Autoplay bloqueado:", err);
    }
  };

  const pauseMusic = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const toggleMusic = async () => {
    if (isPlaying) pauseMusic();
    else await playMusic();
  };

  const handleOpen = async () => {
    await playMusic(); // 🔥 Se sincroniza al abrir
    setOpened(true);
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" preload="auto" loop />

      {!opened && <EnvelopeIntro onOpen={handleOpen} />}

      {opened && (
        <MainContent isPlaying={isPlaying} toggleMusic={toggleMusic} />
      )}
    </>
  );
}
