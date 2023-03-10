import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./components/SharedLayout";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import "./index.css";
import { animateScroll as scroll } from "react-scroll/modules";

const App = () => {
  useEffect(() => {
    document.title = "Arya Infoways";
  }, []);

  useEffect(() => {
    scroll.scrollToTop("hero");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
    </Routes>
  );
};

export default App;
