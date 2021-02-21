//GlobalStyles
import GlobalStyles from "./styles/GlobalStyles";
//ThemeProvider
import { ThemeProvider } from "styled-components";

//Components
import Layout from "./components/Layout";

//Darktheme
import dark from "./styles/themes/dark";

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <Layout />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
