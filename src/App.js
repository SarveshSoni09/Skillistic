import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import UserDashboard from "./Pages/User/UserDashboard";
import Verify from "./Pages/User/Verify";
import VerifyEducation from "./Pages/User/VerifyEducation";
import VerifyCourses from "./Pages/User/VerifyCourses";
import VerifyExperiences from "./Pages/User/VerifyExperiences";
import VerifyProjects from "./Pages/User/VerifyProjects";
import VerifySubmit from "./Pages/User/VerifySubmit";
import Status from "./Pages/User/Status";
import Profile from "./Pages/Verifier/Profile";
import Verifications from "./Pages/Verifier/Verifications";
import Scoring from "./Pages/Verifier/Scoring";

// import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<UserDashboard />} />
          <Route path="/vProfile" element={<Profile />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/VerifyEducation" element={<VerifyEducation />} />
          <Route path="/VerifyCourses" element={<VerifyCourses />} />
          <Route path="/VerifyExperiences" element={<VerifyExperiences />} />
          <Route path="/VerifyProjects" element={<VerifyProjects />} />
          <Route path="/VerifySubmit" element={<VerifySubmit />} />
          <Route path="/Verifications" element={<Verifications />} />
          <Route path="/Status" element={<Status />} />
          <Route path="/Scoring" element={<Scoring />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
