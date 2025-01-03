import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darkTheme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <Navbar /> */}
      {/* <Home /> */}
      <Auth />
    </ThemeProvider>
  );
}

export default App;
