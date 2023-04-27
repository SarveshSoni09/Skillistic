import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

import { Grid } from "@mui/material";

import DarkGlassInput from "../Components/Controls/DarkGlassInput";
import GlassButton from "../Components/Controls/GlassButton";
import { textValidator } from "../Components/Controls/Validation";
import { useForm } from "../Components/Controls/UseForm";
import { DocIDGen } from "../Components/Controls/DocID";
import { db, auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";

const Signup = () => {
  var initialFValues = {
    Name: "",
    Email: "",
    Password: "",
    CPassword: "",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("Name" in fieldValues) {
      temp.Name = textValidator(fieldValues.Name);
    }
    if ("Email" in fieldValues) {
      temp.Email = textValidator(fieldValues.Email);
    }
    if ("Password" in fieldValues) {
      temp.Password = textValidator(fieldValues.Password);
    }
    if ("CPassword" in fieldValues) {
      if (values.Password !== fieldValues.CPassword) {
        temp.CPassword = "Does not Match with Password";
      } else {
        temp.CPassword = "";
      }
    }
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleInputChange } = useForm(
    initialFValues,
    true,
    validate
  );

  const dataCollectionRef = collection(db, "Users");
  const [docID, setDocID] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getID = async () => {
      const id = await DocIDGen(dataCollectionRef, "SkUser");
      setDocID(id);
    };
    getID();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(docID);
    if (validate()) {
      const docData = {
        Name: values.Name,
        Email: values.Email,
        Password: values.Password,
        Timestamp: serverTimestamp(),
        UserID: docID,
        Role: "User",
      };
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          values.Email,
          values.Password
        );
        await setDoc(doc(db, "Users", res.user.uid), docData);
        navigate("/Login");
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Error");
    }
  };

  return (
    <div>
      <Navbar />
      <div id="login-body">
        <div id="login-form" className="glass">
          <h3 style={{ marginTop: 0 }}>Sign Up</h3>
          <div style={{ height: "100%" }}>
            <Grid container spacing={1.5}>
              <Grid item xs={12}>
                <DarkGlassInput
                  fullWidth
                  required
                  id="Name"
                  label="Name"
                  name="Name"
                  value={values.Name}
                  error={errors.Name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <DarkGlassInput
                  fullWidth
                  required
                  id="Email"
                  type="email"
                  label="Email"
                  name="Email"
                  value={values.Email}
                  error={errors.Email}
                  onChange={handleInputChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <DarkGlassInput
                  fullWidth
                  required
                  id="Username"
                  label="Username"
                />
              </Grid> */}
              <Grid item xs={12}>
                <DarkGlassInput
                  required
                  fullWidth
                  id="Password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  name="Password"
                  value={values.Password}
                  error={errors.Password}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <DarkGlassInput
                  required
                  fullWidth
                  id="CPassword"
                  label="Confirm Password"
                  type="password"
                  autoComplete="current-password"
                  name="CPassword"
                  value={values.CPassword}
                  error={errors.CPassword}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <div
              style={{
                bottom: "40px",
                position: "absolute",
                width: "calc(100% - 80px)",
              }}
            >
              <GlassButton
                variant="contained"
                fullWidth
                name="Sign Up"
                onClick={handleSubmit}
              ></GlassButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
