import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

import { AuthContext } from "../Context/AuthContext";

const SignedNavbar = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    // console.log(email, password);

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT", payload: null });
        navigate("/Login");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <AppBar
      position="static"
      className="navbar"
      style={{
        backgroundColor: "#0000",
        borderRadius: "0 0 16px 0",
        minHeight: "80px",
      }}
    >
      {/* <CssBaseLine /> */}
      <Toolbar sx={{ borderRadius: "0 0 16px 0" }}>
        <Typography variant="h3" className="main-logo">
          Skillistic
        </Typography>
        <div className="navlinks">
          <Link to="/Dashboard" className="navlink">
            Home
          </Link>
          <Link to="/Verify" className="navlink">
            Verify Yourself
          </Link>
          <Link to="/Status" className="navlink">
            Verification Status
          </Link>
          <Link onClick={handleLogout} className="navlink">
            Log Out
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SignedNavbar;
