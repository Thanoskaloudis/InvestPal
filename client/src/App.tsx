import { createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeOptions, ThemeProvider } from "@mui/material/styles";
import React, { useMemo } from "react";
import { useAppSelector } from "./app/hooks";
import { themeSettings } from "./theme";
import { Dashboard } from "./scenes/dashboard/Dashboard";
import { Layout } from "./scenes/layout/Layout";
import './App.css';

function App() {
  const theme = useAppSelector((state) => state.theme.theme);
  const customTheme = useMemo(() => createTheme(themeSettings(theme) as ThemeOptions), [theme]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
