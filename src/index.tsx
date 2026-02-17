import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Landing } from "./screens/Landing";
import { DesktopOld } from "./screens/Old";
import { Merged } from "./screens/Merged";
import { BusinessConsultant } from "./screens/BusinessConsultant";
import { GreenValley } from "./screens/GreenValley";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<BusinessConsultant />} />
        <Route path="/legacy" element={<Merged />} />
        <Route path="/old" element={<DesktopOld />} />
        <Route path="/business-consultant" element={<Navigate to="/" replace />} />
        <Route path="/merged" element={<Navigate to="/legacy" replace />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/greenvalley" element={<GreenValley />} />
      </Routes>
    </Router>
  </StrictMode>,
);
