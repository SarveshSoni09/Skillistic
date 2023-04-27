import React from "react";
import { useForm } from "../../Components/Controls/UseForm";

import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";

import { scoreValidator } from "../../Components/Controls/Validation";

import { Grid } from "@mui/material";

const ScoreProfile = (props) => {
  var initialFValues = {
    ProfileScore: 0.0,
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for Profile Score
    if ("ProfileScore" in fieldValues) {
      temp.ProfileScore = scoreValidator(fieldValues.ProfileScore);
      fieldValues.ProfileScore = parseFloat(fieldValues.ProfileScore);
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
    <div className="verification-content">
      <h3 style={{ fontFamily: "Merriweather" }}>Profile Verification</h3>
      <div
        className="verification-details"
        style={{ padding: "8px", margin: "0 24px" }}
      >
        <Grid container xs={12} rowGap={1} sx={{ textAlign: "start" }}>
          {props.personData.GHProfile && (
            <Grid item xs={6}>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>GitHub Profile</h3>
              </Grid>
              <Grid item xs={12}>
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href={props.personData.GHProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.personData.GHProfile}
                </a>
              </Grid>
            </Grid>
          )}
          {props.personData.LIProfile && (
            <Grid item xs={6}>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>LinkedIn Profile</h3>
              </Grid>
              <Grid item xs={12}>
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href={props.personData.LIProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.personData.LIProfile}
                </a>
              </Grid>
            </Grid>
          )}
          {props.personData.Profile1Name && (
            <Grid item xs={6}>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>
                  {props.personData.Profile1Name} Profile
                </h3>
              </Grid>
              <Grid item xs={12}>
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href={props.personData.Profile1Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.personData.Profile1Link}
                </a>
              </Grid>
            </Grid>
          )}
          {props.personData.Profile2Name && (
            <Grid item xs={6}>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>
                  {props.personData.Profile2Name} Profile
                </h3>
              </Grid>
              <Grid item xs={12}>
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href={props.personData.Profile2Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.personData.Profile2Link}
                </a>
              </Grid>
            </Grid>
          )}
          {props.personData.Profile3Name && (
            <Grid item xs={6}>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>
                  {props.personData.Profile3Name} Profile
                </h3>
              </Grid>
              <Grid item xs={12}>
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href={props.personData.Profile3Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.personData.Profile3Link}
                </a>
              </Grid>
            </Grid>
          )}
          {props.personData.Profile4Name && (
            <Grid item xs={6}>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>
                  {props.personData.Profile4Name} Profile
                </h3>
              </Grid>
              <Grid item xs={12}>
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href={props.personData.Profile4Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.personData.Profile4Link}
                </a>
              </Grid>
            </Grid>
          )}
          <Grid
            container
            xs={12}
            rowGap={1}
            sx={{
              textAlign: "start",
              borderTop: "1px solid #fffa",
              padding: "16px 0 8px 0",
            }}
          >
            <Grid item xs={2}>
              <DarkGlassInput
                fullWidth={true}
                required={true}
                label="Profiles Score"
                name="ProfileScore"
                onChange={handleInputChange}
                value={values.ProfileScore}
                error={errors.ProfileScore}
              ></DarkGlassInput>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={2}>
              <GlassButton
                name="Next"
                variant="contained"
                fullWidth
                onClick={() => {
                  if (validate()) {
                    props.mergeScore({ values });
                    props.setThisScore(false);
                    props.setNewScore(true);
                    props.completed(true);
                  }
                }}
              ></GlassButton>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ScoreProfile;
