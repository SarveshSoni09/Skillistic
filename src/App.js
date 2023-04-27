import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import UserDashboard from "./Pages/User/UserDashboard";
import Verify from "./Pages/User/Verify";
import Status from "./Pages/User/Status";
import Profile from "./Pages/Verifier/Profile";
import Verifications from "./Pages/Verifier/Verifications";
import Scoring from "./Pages/Verifier/Scoring";

// import Navbar from './Components/Navbar'

function App() {
  const { currentUser, currentVerifier } = useContext(AuthContext);

  const RequireUAuth = ({ children }) => {
    return currentUser ? (
      children
    ) : currentVerifier ? (
      <Navigate to="/Verifications" />
    ) : (
      <Navigate to="/Login" />
    );
  };
  const RequireVAuth = ({ children }) => {
    return currentVerifier ? (
      children
    ) : currentUser ? (
      <Navigate to="/Dashboard" />
    ) : (
      <Navigate to="/Login" />
    );
  };

  // console.log(currentUser);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/Dashboard"
            element={
              <RequireUAuth>
                <UserDashboard />
              </RequireUAuth>
            }
          />
          <Route
            path="/vProfile"
            element={
              <RequireVAuth>
                <Profile />
              </RequireVAuth>
            }
          />
          <Route
            path="/Verify"
            element={
              <RequireUAuth>
                <Verify />
              </RequireUAuth>
            }
          />
          <Route
            path="/Verifications"
            element={
              <RequireVAuth>
                <Verifications />
              </RequireVAuth>
            }
          />
          <Route
            path="/Status"
            element={
              <RequireUAuth>
                <Status />
              </RequireUAuth>
            }
          />
          <Route
            path="/Scoring"
            element={
              <RequireVAuth>
                <Scoring />
              </RequireVAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
