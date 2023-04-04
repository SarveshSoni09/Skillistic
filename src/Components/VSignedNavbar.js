import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const VSignedNavbar = () => {
  return (
    <AppBar
      position="static"
      className="navbar"
      style={{
        backgroundColor: "#0000",
        minHeight: "80px",
      }}
    >
      {/* <CssBaseLine /> */}
      <Toolbar sx={{ borderRadius: "0 0 0 0" }}>
        <Typography variant="h3" className="main-logo">
          Skillistic
        </Typography>
        <div className="navlinks">
          <Link to="/Verifications" className="navlink">
            Verifications
          </Link>
          <Link to="/vProfile" className="navlink">
            Profile
          </Link>
          <Link to="/Login" className="navlink">
            Log Out
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default VSignedNavbar;
