import { ThemeProvider } from "styled-components";

// custom components
import { Navbar } from "@components";
import { Director, Home, KeyCase, Partner, Welkey } from "@screens/index";

// styling
import { theme } from "./themes/theme";
import GlobalStyles from "./themes/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Home />
      <KeyCase />
      <Partner />
      <Director />
      <Welkey />
    </ThemeProvider>
  );
}

export default App;
