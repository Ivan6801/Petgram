import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import AppRouter from "./router/AppRouter";
import Logo from "./components/Logo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";

export default function App() {
  const urlParams = new URLSearchParams(location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppRouter />} />
            <Route path="/pet/:id" element={<AppRouter />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
