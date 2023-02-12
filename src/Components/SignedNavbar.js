import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SignedNavbar = () => {
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
          <Link to="/Login" className="navlink">
            Log Out
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SignedNavbar;
