//GlobalStyles
import GlobalStyles from "./styles/GlobalStyles";
//ThemeProvider
import { ThemeProvider } from "styled-components";

//Components
import Layout from "./components/Layout";

//hook
import { useTheme } from "./hooks/theme/ThemeProvider";

const App = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
