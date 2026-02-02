import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Landing } from "./screens/Landing";
import { DesktopOld } from "./screens/Old";
import { Merged } from "./screens/Merged";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Merged />} />
        <Route path="/old" element={<DesktopOld />} />
        <Route path="/merged" element={<Navigate to="/" replace />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  </StrictMode>,
);
