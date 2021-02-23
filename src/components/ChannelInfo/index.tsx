import { useState } from "react";
import { useTheme } from "../../hooks/theme/ThemeProvider";
//Components
import Toggle from "../ToggleTheme";

import {
  Container,
  HashtagIcon,
  Title,
  Separador,
  Description,
} from "./styles";

const ChannelInfo = () => {
  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };
  return (
    <Container>
      <Toggle
        labelLeft="light"
        labelRight="dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />
      <HashtagIcon />
      <Title>Anonimous Server</Title>
      <Separador />
      <Description>Channel Open</Description>
    </Container>
  );
};

export default ChannelInfo;
