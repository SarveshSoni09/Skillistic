import React, { useState } from "react";
import SignedNavbar from "../../Components/SignedNavbar";
import useScript from "../../Components/Hooks/useScript";
import { useForm } from "../../Components/Controls/UseForm";

import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";

import { Link } from "react-router-dom";

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

const VerifyExperiences = (props) => {
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
    // Experience Company 1 variables
    WCompany1: "",
    WPosition1: "",
    WDuration1: "",
    WDesc1: "",
    // Experience Company 2 variables
    WCompany2: "",
    WPosition2: "",
    WDuration2: "",
    WDesc2: "",
    // Experience Company 3 variables
    WCompany3: "",
    WPosition3: "",
    WDuration3: "",
    WDesc3: "",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for Work Experience 1
    // if('WCompany1' in fieldValues) {
    //   temp.WCompany1 = textValidator(fieldValues.WCompany1)
    // }
    // if('WPosition1' in fieldValues) {
    //   temp.WPosition1 = textValidator(fieldValues.WPosition1)
    // }
    // if('WDuration1' in fieldValues) {
    //   temp.WDuration1 = textValidator(fieldValues.WDuration1)
    // }
    // if('WDesc1' in fieldValues) {
    //   temp.WDesc1 = textValidator(fieldValues.WDesc1)
    // }

    // Validation for Work Experience 2
    // if('WCompany1' in fieldValues) {
    //   temp.WCompany1 = textValidator(fieldValues.WCompany1)
    // }
    // if('WPosition1' in fieldValues) {
    //   temp.WPosition1 = textValidator(fieldValues.WPosition1)
    // }
    // if('WDuration1' in fieldValues) {
    //   temp.WDuration1 = textValidator(fieldValues.WDuration1)
    // }
    // if('WDesc1' in fieldValues) {
    //   temp.WDesc1 = textValidator(fieldValues.WDesc1)
    // }

    // Validation for Work Experience 3
    // if('WCompany1' in fieldValues) {
    //   temp.WCompany1 = textValidator(fieldValues.WCompany1)
    // }
    // if('WPosition1' in fieldValues) {
    //   temp.WPosition1 = textValidator(fieldValues.WPosition1)
    // }
    // if('WDuration1' in fieldValues) {
    //   temp.WDuration1 = textValidator(fieldValues.WDuration1)
    // }
    // if('WDesc1' in fieldValues) {
    //   temp.WDesc1 = textValidator(fieldValues.WDesc1)
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
  //   boxShadow: "-3px 3px 3px rgba(0, 0, 0, 0.4)",
  //   textTransform: "none",
  //   fontSize: 20,
  //   fontFamily: "Merriweather",
  //   padding: "8px 24px",
  //   border: "1px solid rgba(54, 110, 137, 0.8)",
  //   lineHeight: 1.5,
  //   background: "rgba(34, 72, 91, 0.8)",
  //   borderRadius: "4px",
  //   backdropFilter: "blur(5px)",
  //   "&:hover": {
  //     background: "rgba(74, 148, 185, 0.8)",
  //     border: "1px solid rgba(255, 255, 255, 0.3)",
  //     boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
  //   },
  //   "&:active": {
  //     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
  //     background: "rgba(164, 225, 255, 0.55)",
  //     border: "1px solid rgba(255, 255, 255, 0.3)",
  //   },
  //   "&:focus": {
  //     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
  //   },
  // });

  return (
    <div className="skill-content">
      <h3>Work Experience Details</h3>
      <div className="skill-form" style={{ padding: "8px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
              Work Experience 1
            </h4>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Company"
              name="WCompany1"
              value={values.WCompany1}
              error={errors.WCompany1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Position Held"
              name="WPosition1"
              value={values.WPosition1}
              error={errors.WPosition1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Duration"
              name="WDuration1"
              value={values.WDuration1}
              error={errors.WDuration1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={8}>
            <DarkGlassInput
              label="Work Description"
              name="WDesc1"
              value={values.WDesc1}
              error={errors.WDesc1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <GlassButton
              variant="contained"
              fullWidth
              sx={{ height: "100%" }}
              endIcon={<UploadFileIcon />}
              name="Upload Proof"
            ></GlassButton>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
              Work Experience 2
            </h4>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Company"
              name="WCompany2"
              value={values.WCompany2}
              error={errors.WCompany2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Position Held"
              name="WPosition2"
              value={values.WPosition2}
              error={errors.WPosition2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Duration"
              name="WDuration2"
              value={values.WDuration2}
              error={errors.WDuration2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={8}>
            <DarkGlassInput
              label="Work Description"
              name="WDesc2"
              value={values.WDesc2}
              error={errors.WDesc2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <GlassButton
              variant="contained"
              fullWidth
              sx={{ height: "100%" }}
              endIcon={<UploadFileIcon />}
              name="Upload Proof"
            ></GlassButton>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
              Work Experience 3
            </h4>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Company"
              name="WCompany3"
              value={values.WCompany3}
              error={errors.WCompany3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Position Held"
              name="WPosition3"
              value={values.WPosition3}
              error={errors.WPosition3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Duration"
              name="WDuration3"
              value={values.WDuration3}
              error={errors.WDuration3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={8}>
            <DarkGlassInput
              label="Work Description"
              name="WDesc3"
              value={values.WDesc3}
              error={errors.WDesc3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <GlassButton
              variant="contained"
              fullWidth
              sx={{ height: "100%" }}
              endIcon={<UploadFileIcon />}
              name="Upload Proof"
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
            // to="/VerifyProjects"
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

export default VerifyExperiences;
