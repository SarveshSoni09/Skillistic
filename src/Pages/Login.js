import React, { useState, useContext } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import { AuthContext } from "../Context/AuthContext";

import { Grid } from "@mui/material";

import DarkGlassInput from "../Components/Controls/DarkGlassInput";
import GlassButton from "../Components/Controls/GlassButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleUserLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGINUSER", payload: user });
        navigate("/Dashboard");
      })
      .catch((error) => {
        setError(true);
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        // ..
      });
  };

  const handleVerifierLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const verifier = userCredential.user;
        dispatch({ type: "LOGINVERIFIER", payload: verifier });
        navigate("/Verifications");
      })
      .catch((error) => {
        setError(true);
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        // ..
      });
  };

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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p
                  id="pass-forget"
                  style={{ margin: "4px 0", fontSize: "12px", color: "#fff8" }}
                >
                  Forgot Password?
                </p>
                {error && (
                  <p
                    id="pass-forget"
                    style={{
                      margin: "4px 0",
                      fontSize: "12px",
                      color: "#fff8",
                    }}
                  >
                    {errorMessage}
                  </p>
                )}
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
                  // component={Link}
                  // to="/Dashboard"
                  variant="contained"
                  fullWidth
                  name="Login as User"
                  onClick={handleUserLogin}
                >
                  Login as User
                </GlassButton>
              </div>
              <div>
                <GlassButton
                  // component={Link}
                  // to="/Verifications"
                  variant="contained"
                  fullWidth
                  name="Login as Verifier"
                  onClick={handleVerifierLogin}
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
