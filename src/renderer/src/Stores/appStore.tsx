import { create } from "zustand";

type ThemeState = "dark" | "light";

interface ThemeStoreProps {
  theme: ThemeState;
  setTheme: (newState: ThemeState) => void;
  switchTheme: () => void;
}

const useAppStates = create<ThemeStoreProps>((set, get) => ({
  theme: "dark",
  setTheme: (newState) => set({ theme: newState }),
  switchTheme: () => {
    if (get().theme === "dark") {
      set({ theme: "light" });
      return;
    }

    set({ theme: "dark" });
  },
}));

export default useAppStates;
