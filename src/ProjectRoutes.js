import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
const NotFound = React.lazy(() => import("./components/NotFound"));
// const Writeondevto = React.lazy(() => import("pages/Writeondevto"));
const ProjectRoutes = ({children}) => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
      {children}
        <Routes>
          <Route path="/" element={<Home />} />     
          <Route path="users" element={<Users/>} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
