import { createContext } from "react";

export interface IThemeContext {
  toggleTheme(): void;
  theme: IThemeProps;
}

export interface IThemeProps {
  title: string;

  colors: {
    components: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinary: string;
      senary: string;
      shadow: string;
    };

    text: {
      white: string;
      gray: string;
      black: string;
    };

    alert: {
      chatInput: string;
      symbol: string;
      notification: string;
      discord: string;
      link: string;
    };
    mentions: {
      color: string;
      detail: string;
      message: string;
    };
    homeSelect: string;
  };
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
