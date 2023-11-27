import React, { lazy, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
          <Route path="/" element={<ProtectedRoute element={<Home />}/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="users" element={<ProtectedRoute element={<Users />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
