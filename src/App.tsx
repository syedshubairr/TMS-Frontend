import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darkTheme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
