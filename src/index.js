import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import TestScreen from "./components/TestScreen";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<TestScreen />} path="/test" />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
