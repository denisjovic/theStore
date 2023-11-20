import { useState } from "react";
import Header from "./pages/Header";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#fefefa" : "#121212",
      },
    },
  });
  const toggleDarkTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header toggleDarkMode={toggleDarkTheme} darkMode={darkMode} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
