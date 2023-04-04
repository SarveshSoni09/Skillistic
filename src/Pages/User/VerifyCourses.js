import React, { useState } from "react";
import SignedNavbar from "../../Components/SignedNavbar";
import useScript from "../../Components/Hooks/useScript";
import { useForm } from "../../Components/Controls/UseForm";

import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";

import { Link, useLocation } from "react-router-dom";

import { textValidator } from "../../Components/Controls/Validation";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const VerifyCourses = (props) => {
  // File Upload Code

  useScript("//freeimage.host/sdk/pup.js", "https://freeimage.host/upload");
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("File", selectedFile);

    fetch(
      "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var initialFValues = {
    // Course 1 variables
    Course1Name: "",
    CSpecialization1: "",
    CPlatform1: "",
    // Course 2 variables
    Course2Name: "",
    CSpecialization2: "",
    CPlatform2: "",
    // Course 3 variables
    Course3Name: "",
    CSpecialization3: "",
    CPlatform3: "",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for Course 1
    // if('Course1Name' in fieldValues) {
    //   temp.Course1Name = textValidator(fieldValues.Course1Name)
    // }
    // if('CSpecialization1' in fieldValues) {
    //   temp.CSpecialization1 = textValidator(fieldValues.CSpecialization1)
    // }
    // if('DPlatform1' in fieldValues) {
    //   temp.DPlatform1 = textValidator(fieldValues.DPlatform1)
    // }

    // Validation for Course 2
    // if('Course2Name' in fieldValues) {
    //   temp.Course2Name = textValidator(fieldValues.Course2Name)
    // }
    // if('CSpecialization2' in fieldValues) {
    //   temp.CSpecialization2 = textValidator(fieldValues.CSpecialization2)
    // }
    // if('DPlatform2' in fieldValues) {
    //   temp.DPlatform2 = textValidator(fieldValues.DPlatform2)
    // }

    // Validation for Course 3
    // if('Course3Name' in fieldValues) {
    //   temp.Course3Name = textValidator(fieldValues.Course3Name)
    // }
    // if('CSpecialization3' in fieldValues) {
    //   temp.CSpecialization3 = textValidator(fieldValues.CSpecialization3)
    // }
    // if('DPlatform3' in fieldValues) {
    //   temp.DPlatform3 = textValidator(fieldValues.DPlatform3)
    // }
    setErrors({
      ...temp,
    });
  };

  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
    initialFValues,
    true,
    validate
  );

  return (
    <div className="skill-content">
      <h3>Courses Completed Details</h3>
      <div className="skill-form" style={{ padding: "8px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>Course 1</h4>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Course Name"
              name="Course1Name"
              value={values.Course1Name}
              error={errors.Course1Name}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Course Specialization"
              name="CSpecialization1"
              value={values.CSpecialization1}
              error={errors.CSpecialization1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Platform"
              name="CPlatform1"
              value={values.CPlatform1}
              error={errors.CPlatform1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <GlassButton
              variant="contained"
              fullWidth
              sx={{ height: "100%" }}
              endIcon={<UploadFileIcon />}
              name="Upload Course Certificate"
            ></GlassButton>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>Course 2</h4>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Course Name"
              name="Course2Name"
              value={values.Course2Name}
              error={errors.Course2Name}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Course Specialization"
              name="CSpecialization2"
              value={values.CSpecialization2}
              error={errors.CSpecialization2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Platform"
              name="CPlatform2"
              value={values.CPlatform2}
              error={errors.CPlatform2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <GlassButton
              variant="contained"
              fullWidth
              sx={{ height: "100%" }}
              endIcon={<UploadFileIcon />}
              name="Upload Course Certificate"
            ></GlassButton>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>Course 3</h4>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Course Name"
              name="Course3Name"
              value={values.Course3Name}
              error={errors.Course3Name}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Course Specialization"
              name="CSpecialization3"
              value={values.CSpecialization3}
              error={errors.CSpecialization3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Platform"
              name="CPlatform3"
              value={values.CPlatform3}
              error={errors.CPlatform3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <GlassButton
              variant="contained"
              fullWidth
              sx={{ height: "100%" }}
              endIcon={<UploadFileIcon />}
              name="Upload Course Certificate"
            ></GlassButton>
          </Grid>
        </Grid>
        <div
          style={{
            bottom: "8px",
            position: "absolute",
            width: "calc(100% - 16px)",
          }}
        >
          <GlassButton
            variant="contained"
            name="Next"
            // component={Link}
            // to="/VerifyExperiences"
            onClick={() => {
              props.mergeData({ values });
              props.setThisPage(false);
              props.setNewPage(true);
              props.completed(true);
              console.log(props.personData);
            }}
          ></GlassButton>
        </div>
      </div>
    </div>
  );
};

export default VerifyCourses;
