import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup"
import Home from './pages/home/Home';
import Community from './pages/community/Community';
import Projects from './pages/projects/Projects'
import Courses from './pages/courses/Courses'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Details from './pages/communitydetatils/Details';

function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />

  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup/>} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
             <Route path="courses">
                <Route index element={<RequireAuth><Courses/></RequireAuth>} />
               {/* <Route path=":Id" element={<RequireAuth><Single /></RequireAuth>} /> */}
               </Route>
              <Route path="community">
                <Route index element={<RequireAuth><Community/></RequireAuth>} />
                 <Route path=":communityname" element={<RequireAuth><Details /></RequireAuth>} />
                {/*<Route path="new" element={<RequireAuth><New inputs={userInputs} title="Add New User" /></RequireAuth>} /> */}
              </Route> 
              <Route path="projects">
                <Route index element={<RequireAuth><Projects/></RequireAuth>} />
                {/* <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>} />
                <Route path="new" element={<RequireAuth><New inputs={userInputs} title="Add New User" /></RequireAuth>} /> */}
              </Route> 
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
