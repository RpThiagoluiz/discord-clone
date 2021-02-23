import { useState, useContext } from "react";

import { IThemeProps, IThemeContext, ThemeContext } from "./ThemeContext";

//Themes
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";

interface AuxProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: AuxProps) => {
  const [theme, setTheme] = useState<IThemeProps>(() => {
    const themeSaved = localStorage.getItem(
      "@clonediscord-devthiago-2021ASD@#$$ADFDU$%@"
    );

    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return dark;
    }
  });

  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
      localStorage.setItem(
        "@clonediscord-devthiago-2021ASD@#$$ADFDU$%@",
        JSON.stringify(light)
      ); //@pra guardar o theme, s[o pra ficar bunitim e nao ser sobreescrita]
    } else {
      setTheme(dark);
      localStorage.setItem(
        "@clonediscord-devthiago-2021ASD@#$$ADFDU$%@",
        JSON.stringify(dark)
      );
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
