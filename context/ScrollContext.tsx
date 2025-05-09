"use client";
import { createContext, useContext, useState } from "react";

type ScrollContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const ScrollContext = createContext<ScrollContextType>({
  activeSection: "",
  setActiveSection: () => {},
});

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("");

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  return useContext(ScrollContext);
}
