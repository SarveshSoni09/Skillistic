import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

import { TextField, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import DarkGlassInput from "../Components/Controls/DarkGlassInput";
import GlassButton from "../Components/Controls/GlassButton";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div id="login-body">
        <div id="login-form" className="glass">
          <h3 style={{ marginTop: 0 }}>Login</h3>
          <div style={{ height: "100%" }}>
            <Grid container spacing={1.5}>
              <Grid item xs={12}>
                <DarkGlassInput
                  fullWidth
                  required
                  id="outlined-required"
                  label="Username/Email"
                />
              </Grid>
              <Grid item xs={12}>
                <DarkGlassInput
                  required
                  fullWidth
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <p
                  id="pass-forget"
                  style={{ margin: "4px 0", fontSize: "12px", color: "#fff8" }}
                >
                  Forgot Password?
                </p>
              </Grid>
            </Grid>
            <div
              style={{
                bottom: "40px",
                position: "absolute",
                width: "calc(100% - 80px",
              }}
            >
              <div style={{ marginBottom: "16px" }}>
                <GlassButton
                  component={Link}
                  to="/Dashboard"
                  variant="contained"
                  fullWidth
                  name="Login as User"
                >
                  Login as User
                </GlassButton>
              </div>
              <div>
                <GlassButton
                  component={Link}
                  to="/Verifications"
                  variant="contained"
                  fullWidth
                  name="Login as Verifier"
                >
                  Login as Verifier
                </GlassButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
