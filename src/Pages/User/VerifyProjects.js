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

const VerifyProjects = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var initialFValues = {
    // Project 1 variables
    ProjectName1: "",
    PDesc1: "",
    PLink1: "",
    // Project 2 variables
    ProjectName2: "",
    PDesc2: "",
    PLink2: "",
    // Project 3 variables
    ProjectName3: "",
    PDesc3: "",
    PLink3: "",
    // Profile variables
    GHProfile: "", // Github Profile
    LIProfile: "", // LinkedIn Profile
    //Other Profile variables
    Profile1Name: "",
    Profile2Name: "",
    Profile3Name: "",
    Profile4Name: "",
    Profile1Link: "",
    Profile2Link: "",
    Profile3Link: "",
    Profile4Link: "",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for Project 1
    // if('ProjectName1' in fieldValues) {
    //   temp.ProjectName1 = textValidator(fieldValues.ProjectName1)
    // }
    // if('PTechStack1' in fieldValues) {
    //   temp.PTechStack1 = textValidator(fieldValues.PTechStack1)
    // }
    // if('PDesc1' in fieldValues) {
    //   temp.PDesc1 = textValidator(fieldValues.PDesc1)
    // }
    // if('PLink1' in fieldValues) {
    //   temp.PLink1 = textValidator(fieldValues.PLink1)
    // }

    // Validation for Project 2
    // if('ProjectName2' in fieldValues) {
    //   temp.ProjectName2 = textValidator(fieldValues.ProjectName2)
    // }
    // if('PTechStack2' in fieldValues) {
    //   temp.PTechStack2 = textValidator(fieldValues.PTechStack2)
    // }
    // if('PDesc2' in fieldValues) {
    //   temp.PDesc2 = textValidator(fieldValues.PDesc2)
    // }
    // if('PLink2' in fieldValues) {
    //   temp.PLink2 = textValidator(fieldValues.PLink2)
    // }

    // Validation for Project 3
    // if('ProjectName3' in fieldValues) {
    //   temp.ProjectName3 = textValidator(fieldValues.ProjectName3)
    // }
    // if('PTechStack3' in fieldValues) {
    //   temp.PTechStack3 = textValidator(fieldValues.PTechStack3)
    // }
    // if('PDesc3' in fieldValues) {
    //   temp.PDesc3 = textValidator(fieldValues.PDesc3)
    // }
    // if('PLink3' in fieldValues) {
    //   temp.PLink3 = textValidator(fieldValues.PLink3)
    // }

    // Validation for Profiles
    // if('GHProfile' in fieldValues) {
    //   temp.GHProfile = textValidator(fieldValues.GHProfile)
    // }
    // if('LIProfile' in fieldValues) {
    //   temp.LIProfile = textValidator(fieldValues.LIProfile)
    // }
    // if('OtherProfile1Name' in fieldValues) {
    //   temp.OtherProfile1Name = textValidator(fieldValues.OtherProfile1Name)
    // }
    // if('OtherProfile1Link' in fieldValues) {
    //   temp.OtherProfile1Link = textValidator(fieldValues.OtherProfile1Link)
    // }
    // if('OtherProfile2Name' in fieldValues) {
    //   temp.OtherProfile2Name = textValidator(fieldValues.OtherProfile2Name)
    // }
    // if('OtherProfile2Link' in fieldValues) {
    //   temp.OtherProfile2Link = textValidator(fieldValues.OtherProfile2Link)
    // }
    // if('OtherProfile3Name' in fieldValues) {
    //   temp.OtherProfile3Name = textValidator(fieldValues.OtherProfile3Name)
    // }
    // if('OtherProfile3Link' in fieldValues) {
    //   temp.OtherProfile3Link = textValidator(fieldValues.OtherProfile3Link)
    // }
    // if('OtherProfile4Name' in fieldValues) {
    //   temp.OtherProfile4Name = textValidator(fieldValues.OtherProfile4Name)
    // }
    // if('OtherProfile4Link' in fieldValues) {
    //   temp.OtherProfile4Link = textValidator(fieldValues.OtherProfile4Link)
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
      <h3>Relevant Project & Additional Information</h3>
      <div className="skill-form" style={{ padding: "8px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
              Project Details
            </h4>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Project 1 Name"
              name="ProjectName1"
              value={values.ProjectName1}
              error={errors.ProjectName1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Description"
              name="PDesc1"
              value={values.PDesc1}
              error={errors.PDesc1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Link"
              name="PLink1"
              value={values.PLink1}
              error={errors.PLink1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Project 2 Name"
              name="ProjectName2"
              value={values.ProjectName2}
              error={errors.ProjectName2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Description"
              name="PDesc2"
              value={values.PDesc2}
              error={errors.PDesc2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Link"
              name="PLink2"
              value={values.PLink2}
              error={errors.PLink2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Project 3 Name"
              name="ProjectName3"
              value={values.ProjectName3}
              error={errors.ProjectName3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Description"
              name="PDesc3"
              value={values.PDesc3}
              error={errors.PDesc3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Link"
              name="PLink3"
              value={values.PLink3}
              error={errors.PLink3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
              Additional Information
            </h4>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Github Profile"
              name="GHProfile"
              value={values.GHProfile}
              error={errors.GHProfile}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="LinkedIn Profile"
              name="LIProfile"
              value={values.LIProfile}
              error={errors.LIProfile}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={3}>
            <DarkGlassInput
              label="Other Profile Name 1"
              name="Profile1Name"
              value={values.Profile1Name}
              error={errors.Profile1Name}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={3}>
            <DarkGlassInput
              label="Other Profile Link 1"
              name="Profile1Link"
              value={values.Profile1Link}
              error={errors.Profile1Link}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={3}>
            <DarkGlassInput
              label="Other Profile Name 2"
              name="Profile2Name"
              value={values.Profile2Name}
              error={errors.Profile2Name}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={3}>
            <DarkGlassInput
              label="Other Profile Link 2"
              name="Profile2Link"
              value={values.Profile2Link}
              error={errors.Profile2Link}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={3}>
            <DarkGlassInput
              label="Other Profile Name 3"
              name="Profile3Name"
              value={values.Profile3Name}
              error={errors.Profile3Name}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={3}>
            <DarkGlassInput
              label="Other Profile Link 3"
              name="Profile3Link"
              value={values.Profile3Link}
              error={errors.Profile3Link}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={3}>
            <DarkGlassInput
              label="Other Profile Name 4"
              name="Profile4Name"
              value={values.Profile4Name}
              error={errors.Profile4Name}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={3}>
            <DarkGlassInput
              label="Other Profile Link 4"
              name="Profile4Link"
              value={values.Profile4Link}
              error={errors.Profile4Link}
              onChange={handleInputChange}
            ></DarkGlassInput>
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
            // to="/VerifySubmit"
            onClick={() => {
              props.mergeData({ values });
              // props.setThisPage(false);
              // props.setNewPage(true);
              console.log(props.personData);
              props.completed(true);
            }}
          ></GlassButton>
        </div>
      </div>
    </div>
  );
};

export default VerifyProjects;
