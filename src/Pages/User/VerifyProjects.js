import React from "react";
import { useForm } from "../../Components/Controls/UseForm";

import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";

import { textValidator } from "../../Components/Controls/Validation";

import { Grid } from "@mui/material";

const VerifyProjects = (props) => {
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
    if ("ProjectName1" in fieldValues) {
      if (fieldValues.ProjectName1 !== "") {
        temp.ProjectName1 = textValidator(fieldValues.ProjectName1);
      } else {
        temp.PDesc1 = "";
        temp.PLink1 = "";
      }
    }
    if ("PDesc1" in fieldValues) {
      if (values.ProjectName1 === "" && fieldValues.PDesc1 !== "") {
        temp.PDesc1 = "Enter Project 1 Name First";
      } else if (values.ProjectName1 !== "" && fieldValues.PDesc1 === "") {
        temp.PDesc1 = textValidator(fieldValues.PDesc1);
      } else {
        temp.PDesc1 = "";
      }
    }
    if ("PLink1" in fieldValues) {
      if (values.ProjectName1 === "" && fieldValues.PLink1 !== "") {
        temp.PLink1 = "Enter Project 1 Name First";
      } else if (values.ProjectName1 !== "" && fieldValues.PLink1 === "") {
        temp.PLink1 = textValidator(fieldValues.PLink1);
      } else {
        temp.PLink1 = "";
      }
    }

    // Validation for Project 2
    if ("ProjectName2" in fieldValues) {
      if (fieldValues.ProjectName2 !== "") {
        temp.ProjectName2 = textValidator(fieldValues.ProjectName2);
      } else {
        temp.PDesc2 = "";
        temp.PLink2 = "";
      }
    }
    if ("PDesc2" in fieldValues) {
      if (values.ProjectName2 === "" && fieldValues.PDesc2 !== "") {
        temp.PDesc2 = "Enter Project 2 Name First";
      } else if (values.ProjectName2 !== "" && fieldValues.PDesc2 === "") {
        temp.PDesc2 = textValidator(fieldValues.PDesc2);
      } else {
        temp.PDesc2 = "";
      }
    }
    if ("PLink2" in fieldValues) {
      if (values.ProjectName2 === "" && fieldValues.PLink2 !== "") {
        temp.PLink2 = "Enter Project 2 Name First";
      } else if (values.ProjectName2 !== "" && fieldValues.PLink2 === "") {
        temp.PLink2 = textValidator(fieldValues.PLink2);
      } else {
        temp.PLink2 = "";
      }
    }

    // Validation for Project 3
    if ("ProjectName3" in fieldValues) {
      if (fieldValues.ProjectName3 !== "") {
        temp.ProjectName3 = textValidator(fieldValues.ProjectName3);
      } else {
        temp.PDesc3 = "";
        temp.PLink3 = "";
      }
    }
    if ("PDesc3" in fieldValues) {
      if (values.ProjectName3 === "" && fieldValues.PDesc3 !== "") {
        temp.PDesc3 = "Enter Project 3 Name First";
      } else if (values.ProjectName3 !== "" && fieldValues.PDesc3 === "") {
        temp.PDesc3 = textValidator(fieldValues.PDesc3);
      } else {
        temp.PDesc3 = "";
      }
    }
    if ("PLink3" in fieldValues) {
      if (values.ProjectName3 === "" && fieldValues.PLink3 !== "") {
        temp.PLink3 = "Enter Project 3 Name First";
      } else if (values.ProjectName3 !== "" && fieldValues.PLink3 === "") {
        temp.PLink3 = textValidator(fieldValues.PLink3);
      } else {
        temp.PLink3 = "";
      }
    }

    // Validation for Profiles

    // if('GHProfile' in fieldValues) {
    //   temp.GHProfile = textValidator(fieldValues.GHProfile)
    // }
    // if('LIProfile' in fieldValues) {
    //   temp.LIProfile = textValidator(fieldValues.LIProfile)
    // }

    if ("Profile1Name" in fieldValues) {
      if (fieldValues.Profile1Name !== "") {
        temp.Profile1Name = textValidator(fieldValues.Profile1Name);
      } else {
        temp.Profile1Link = "";
      }
    }
    if ("Profile1Link" in fieldValues) {
      if (values.Profile1Name === "" && fieldValues.Profile1Link !== "") {
        temp.Profile1Link = "Enter Other Profile 1 Name First";
      } else if (
        values.Profile1Name !== "" &&
        fieldValues.Profile1Link === ""
      ) {
        temp.Profile1Link = textValidator(fieldValues.Profile1Link);
      } else {
        temp.Profile1Link = "";
      }
    }
    if ("Profile2Name" in fieldValues) {
      if (fieldValues.Profile2Name !== "") {
        temp.Profile2Name = textValidator(fieldValues.Profile2Name);
      } else {
        temp.Profile2Link = "";
      }
    }
    if ("Profile2Link" in fieldValues) {
      if (values.Profile2Name === "" && fieldValues.Profile2Link !== "") {
        temp.Profile2Link = "Enter Other Profile 2 Name First";
      } else if (
        values.Profile2Name !== "" &&
        fieldValues.Profile2Link === ""
      ) {
        temp.Profile2Link = textValidator(fieldValues.Profile2Link);
      } else {
        temp.Profile2Link = "";
      }
    }
    if ("Profile3Name" in fieldValues) {
      if (fieldValues.Profile3Name !== "") {
        temp.Profile3Name = textValidator(fieldValues.Profile3Name);
      } else {
        temp.Profile3Link = "";
      }
    }
    if ("Profile3Link" in fieldValues) {
      if (values.Profile3Name === "" && fieldValues.Profile3Link !== "") {
        temp.Profile3Link = "Enter Other Profile 3 Name First";
      } else if (
        values.Profile3Name !== "" &&
        fieldValues.Profile3Link === ""
      ) {
        temp.Profile3Link = textValidator(fieldValues.Profile3Link);
      } else {
        temp.Profile3Link = "";
      }
    }
    if ("Profile4Name" in fieldValues) {
      if (fieldValues.Profile4Name !== "") {
        temp.Profile4Name = textValidator(fieldValues.Profile4Name);
      } else {
        temp.Profile4Link = "";
      }
    }
    if ("Profile4Link" in fieldValues) {
      if (values.Profile4Name === "" && fieldValues.Profile4Link !== "") {
        temp.Profile4Link = "Enter Other Profile 4 Name First";
      } else if (
        values.Profile4Name !== "" &&
        fieldValues.Profile4Link === ""
      ) {
        temp.Profile4Link = textValidator(fieldValues.Profile4Link);
      } else {
        temp.Profile4Link = "";
      }
    }
    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
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
            onClick={() => {
              if (validate()) {
                props.mergeData({ values });
                props.setThisPage(false);
                props.setNewPage(true);
                props.completed(true);
              }
            }}
          ></GlassButton>
        </div>
      </div>
    </div>
  );
};

export default VerifyProjects;
