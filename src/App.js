import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup"
import Home from './pages/home/Home';
import Community from './pages/community/Community';
import Courses from './pages/courses/Courses'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Details from './pages/communitydetatils/Details';
import Articles from './pages/articles/Articles';
import Cdetails from './pages/coursedetails/Cdetails';
import {CdetailsProvider} from "./Cdetailscontext"

function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />

  }

  return (
    <div className="App">
      <CdetailsProvider>
      <Router>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
            
            <Route path="courses">
              <Route index element={<RequireAuth><Courses /></RequireAuth>} />
              <Route path=":coursename" element={<RequireAuth><Cdetails/></RequireAuth>} />
            </Route>
            
            <Route path="community">
              <Route index element={<RequireAuth><Community /></RequireAuth>} />
              <Route path=":communityname" element={<RequireAuth><Details /></RequireAuth>} />
            </Route>
            <Route path="articles">
              <Route index element={<RequireAuth><Articles /></RequireAuth>} />
            </Route>
          </Route>
        </Routes>
      </Router>
      </CdetailsProvider>
    </div>
  );
}

export default App;
