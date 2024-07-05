import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import { CssBaseline, Theme, ThemeProvider, createTheme } from "@mui/material";
import TopAppBar from "./Components/Complex/TopAppBar/TopAppBar";
import useAppStates from "./Stores/appStore";
import { useMemo } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const brightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send("ping");
  const { theme } = useAppStates();

  const currentTheme: Theme = useMemo(() => {
    if (theme === "dark") return darkTheme;

    return brightTheme;
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <TopAppBar />
      <CssBaseline />

      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
