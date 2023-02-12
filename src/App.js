import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import UserDashboard from "./Pages/UserDashboard";
import Verify from "./Pages/Verify";
import Status from "./Pages/Status";

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
          <Route path="/Verify" element={<Verify />} />
          <Route path="/Status" element={<Status />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
