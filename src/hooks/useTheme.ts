import { type Theme } from "../types";

import { useEffect, useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
          return "dark";
        } else {
          return "light";
        }
      });
    
      useEffect(() => {
        if (theme == "dark") {
          document.querySelector("body")?.classList.add("dark");
        } else {
          document.querySelector("body")?.classList.remove("dark");
        }
      }, [theme]);
    
      const handleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
      };

      return {handleTheme, theme};
}