import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./modules/layout/Header";

import { Rovers } from "./modules/nasa";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Rovers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
