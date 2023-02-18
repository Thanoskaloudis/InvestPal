import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { useAppSelector } from "app/hooks";
import { useMemo } from "react";
import { themeSettings } from "theme";
import './App.css';

function App() {
  const theme = useAppSelector((state) => state.theme.theme);
  const customTheme = useMemo(() => createTheme(themeSettings(theme) as ThemeOptions), [theme]);

  return (
    <div className="app">
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
