"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { SHOW_SPLASH } from "@/config";

const SplashContext = createContext(false);

export function SplashProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(!SHOW_SPLASH);

  useEffect(() => {
    if (!SHOW_SPLASH) return;
    const id = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(id);
  }, []);

  return <SplashContext.Provider value={done}>{children}</SplashContext.Provider>;
}

export function useSplashDone() {
  return useContext(SplashContext);
}
