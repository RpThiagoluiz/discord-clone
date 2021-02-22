import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
}
