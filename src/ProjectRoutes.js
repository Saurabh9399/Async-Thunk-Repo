import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const NotFound = React.lazy(() => import("./components/NotFound"));
// const Writeondevto = React.lazy(() => import("pages/Writeondevto"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />     
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
