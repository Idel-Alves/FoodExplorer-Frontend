import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalSyles  from "./styles/global";
import theme from "./styles/theme";

import { AuthProvider } from "./hooks/auth";
import { FavoriteProvider } from "./hooks/favorite";

import { Routes } from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalSyles/>
      <AuthProvider>
        <FavoriteProvider>
           <Routes />
        </FavoriteProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
