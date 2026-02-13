"use client";
import { useEffect } from "react";

export default function DarkModeAuto() {
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 19 || hour <= 6) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return null;
}
