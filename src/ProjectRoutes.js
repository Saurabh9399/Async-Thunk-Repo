import React, { lazy, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AnalyticsDashboard from "./pages/Dashboard";

const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));
const NotFound = lazy(() => import('./components/NotFound'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

const isAuthenticated = (isAuthenticatedState) => {
  if(isAuthenticatedState) {
    return true;
  }
  return false;
};

export const ProtectedRoute = ({ element }) => {
  const isAuthenticatedState = useSelector(store => store.auth.isAuthenticated);
  const navigate = useNavigate();
  return isAuthenticated(isAuthenticatedState) ? (
    element
  ) : (
    navigate("/login")
  );
};


const ProjectRoutes = ({children}) => {
  useEffect(()=>{
    isAuthenticated();
  },[])
  return (
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <Router>
        {children}
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />}/>} />
          <Route path="signup" element={<Signup />} />
          <Route path="users" element={<ProtectedRoute element={<Users />} />} />
          <Route path="dashboard" element={<ProtectedRoute element={<AnalyticsDashboard />} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
