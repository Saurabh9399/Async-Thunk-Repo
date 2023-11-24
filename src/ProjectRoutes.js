import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/hoc/ProjectRoute'
const Home = lazy(() => import('./pages/Home'));
 const Users = lazy(() => import('./pages/Users'));
 const NotFound = lazy(() => import('./components/NotFound'));
 const Login = lazy(() => import('./pages/Login'));
 const Signup = lazy(() => import('./pages/Signup'));

const ProjectRoutes = ({children}) => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
      {children}
        <Routes>
          <Route path="/" element={<Home />} />     
          <Route path="users" element={<ProtectedRoute/>} />
          <Route path="*" element={<NotFound />} /> 
          <Route path="login" element={<Login />} />
         <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;



// ProjectRoutes.js
// import React, { lazy, Suspense } from 'react';
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
// import ProtectedRoute from './components/hoc/ProjectRoute';
// // Lazy-loaded components
// const Home = lazy(() => import('./pages/Home'));
// const Users = lazy(() => import('./pages/Users'));
// const NotFound = lazy(() => import('./components/NotFound'));
// const Login = lazy(() => import('./pages/Login'));
// const Signup = lazy(() => import('./pages/Signup'));

// const ProjectRoutes = () => {
//   return (
//     <Suspense fallback={<>Loading...</>}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="login" element={<Login />} />
//         <Route path="signup" element={<Signup />} />
//         <Route
//           path="*"
//           element={
//             <ProtectedRoute element={<NotFound/>} />
//           }
//         />
//         <Route
//           path='users/*'
//           element={
//             <ProtectedRoute element={<Users/>}/>
             
//           }
//         />
//       </Routes>
//     </Suspense>
//   );
// };

// export default ProjectRoutes;

