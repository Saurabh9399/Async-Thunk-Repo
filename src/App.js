import './App.css';
import ProjectRoutes from './ProjectRoutes';
import NavbarComp from './components/Navbar';

function App() {
  return (
    <div className="App">
     <NavbarComp/>
     <ProjectRoutes/>
    </div>
  );
}

export default App;
