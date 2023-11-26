import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));
const NotFound = lazy(() => import('./components/NotFound'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

const isAuthenticated = (isAuthenticatedState) => {
  // Implement your authentication logic here, e.g., check if the user is logged in
  // You may use a state management library like Redux or React Context for authentication
  // For demonstration purposes, I'll use a simple variable to simulate authentication
  if(isAuthenticatedState) {
    return true;
  }
  return false; // Change this based on your authentication logic
};

export const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticatedState = useSelector(store => store.auth.isAuthenticated);
  const navigate = useNavigate();
  return isAuthenticated(isAuthenticatedState) ? (
    element
  ) : (
    navigate("/login")
  );
};

const ProjectRoutes = ({children}) => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
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
