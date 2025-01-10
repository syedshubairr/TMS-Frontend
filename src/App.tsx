import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darkTheme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

function App() {
  const user = true;
  return (
    <ThemeProvider theme={darkTheme}>
      {user ? (
        <div>
          <Navbar />
          <Home />
        </div>
      ) : (
        <Auth />
      )}
    </ThemeProvider>
  );
}

export default App;
