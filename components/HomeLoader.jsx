"use client";

import { useEffect, useState } from "react";

export default function HomeLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const done = () => {
      setTimeout(() => setLoading(false), 800);
    };

    if (document.readyState === "complete") {
      done();
    } else {
      window.addEventListener("load", done);
    }

    return () => window.removeEventListener("load", done);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-[9999] flex items-center justify-center transition-opacity duration-500 opacity-100">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x animate-pulse"
      >
        Gerald Citadel
      </h1>
    </div>
  );
}
