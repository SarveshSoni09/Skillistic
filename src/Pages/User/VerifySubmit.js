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

const VerifySubmit = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var initialFValues = {
    // Education Degree 1 variables
    Degree1Name: "",
    DSpecialization1: "",
    DUniversity1: "",
    // Education Degree 2 variables
    Degree2Name: "",
    DSpecialization2: "",
    DUniversity2: "",
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
    // Project 1 variables
    ProjectName1: "",
    PTechStack1: "",
    PDesc1: "",
    PLink1: "",
    // Project 2 variables
    ProjectName2: "",
    PTechStack2: "",
    PDesc2: "",
    PLink2: "",
    // Project 3 variables
    ProjectName3: "",
    PTechStack3: "",
    PDesc3: "",
    PLink3: "",
    // Profile variables
    GHProfile: "", // Github Profile
    LIProfile: "", // LinkedIn Profile
    OtherProfile1Name: "",
    OtherProfile2Name: "",
    OtherProfile3Name: "",
    OtherProfile4Name: "",
    OtherProfile1Link: "",
    OtherProfile2Link: "",
    OtherProfile3Link: "",
    OtherProfile4Link: "",
    //Submit Skill to be verified
    SkillName: "",
    NumberOfVerifiers: "",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for Education Degree 1
    if ("Degree1Name" in fieldValues) {
      temp.Degree1Name = textValidator(fieldValues.Degree1Name);
    }
    if ("DSpecialization1" in fieldValues) {
      temp.DSpecialization1 = textValidator(fieldValues.DSpecialization1);
    }
    if ("DUniversity1" in fieldValues) {
      temp.DUniversity1 = textValidator(fieldValues.DUniversity1);
    }

    // Validation for Education Degree 2
    // if('Degree2Name' in fieldValues) {
    //   temp.Degree2Name = textValidator(fieldValues.Degree2Name)
    // }
    // if('DSpecialization2' in fieldValues) {
    //   temp.DSpecialization2 = textValidator(fieldValues.DSpecialization2)
    // }
    // if('DUniversity2' in fieldValues) {
    //   temp.DUniversity2 = textValidator(fieldValues.DUniversity2)
    // }

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

    if ("SkillName" in fieldValues) {
      temp.SkillName = textValidator(fieldValues.SkillName);
    }
    if ("NumberOfVerifiers" in fieldValues) {
      temp.NumberOfVerifiers = textValidator(fieldValues.NumberOfVerifiers);
    }

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
    <div id="user-dashboard">
      <SignedNavbar />
      <div className="Dashboard-content">
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            height: "100%",
          }}
        >
          <div className="VerticalNav">
            <Link className="vTabLink" to="/VerifyEducation">
              Education
            </Link>
            <Link className="vTabLink" to="/VerifyCourses">
              Courses
            </Link>
            <Link className="vTabLink" to="/VerifyExperiences">
              Experiences
            </Link>
            <Link className="vTabLink" to="/VerifyProjects">
              Projects
            </Link>
            <Link className="vTabLink currentVTabLink" to="/VerifySubmit">
              Submit
            </Link>
          </div>
          <div>
            <div className="skill-content">
              <h3>Submit</h3>
              <div className="skill-form" style={{ padding: "8px" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                      Submit
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <DarkGlassInput
                      fullWidth
                      id="outlined-required"
                      label="Skill to be Verified"
                    ></DarkGlassInput>
                  </Grid>
                  <Grid item xs={6}>
                    <DarkGlassInput
                      fullWidth
                      id="outlined-required"
                      label="Number of Verifiers"
                    ></DarkGlassInput>
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: "left" }}>
                    Ethereum Cost: 0.02 Eth
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
                    fullWidth
                    name="Proceed to Pay"
                  ></GlassButton>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default VerifySubmit;
