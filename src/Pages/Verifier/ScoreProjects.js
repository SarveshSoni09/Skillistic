import React from "react";
import { useForm } from "../../Components/Controls/UseForm";

import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";

import { scoreValidator } from "../../Components/Controls/Validation";

import { Grid } from "@mui/material";

const ScoreProjects = (props) => {
  var initialFValues = {
    ProjectScore: 0,
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for Project Score
    if ("ProjectScore" in fieldValues) {
      temp.ProjectScore = scoreValidator(fieldValues.ProjectScore);
      fieldValues.ProjectScore = parseFloat(fieldValues.ProjectScore);
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
      <h3 style={{ fontFamily: "Merriweather" }}>ABC Projects Verification</h3>
      <div
        className="verification-details"
        style={{ padding: "8px", margin: "0 24px" }}
      >
        <Grid container xs={12}>
          {props.personData.ProjectName1 && (
            <Grid container xs={12} rowGap={1} sx={{ textAlign: "start" }}>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>Project 1</h3>
              </Grid>
              <Grid item xs={12}>
                Project: {props.personData.ProjectName1}
              </Grid>
              <Grid item xs={12}>
                Description: {props.personData.PDesc1}
              </Grid>
              <Grid item xs={12}>
                Link: {props.personData.PLink1}
              </Grid>
            </Grid>
          )}
          {props.personData.ProjectName2 && (
            <Grid
              container
              xs={12}
              rowGap={1}
              sx={{
                textAlign: "start",
                borderTop: "1px solid #fffa",
                padding: "8px 0",
              }}
            >
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>Project 2</h3>
              </Grid>
              <Grid item xs={12}>
                Project: {props.personData.ProjectName2}
              </Grid>
              <Grid item xs={12}>
                Description: {props.personData.PDesc2}
              </Grid>
              <Grid item xs={12}>
                Link: {props.personData.PLink2}
              </Grid>
            </Grid>
          )}
          {props.personData.ProjectName3 && (
            <Grid
              container
              xs={12}
              rowGap={1}
              sx={{
                textAlign: "start",
                borderTop: "1px solid #fffa",
                padding: "8px 0",
              }}
            >
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>Project 3</h3>
              </Grid>
              <Grid item xs={12}>
                Project: {props.personData.ProjectName3}
              </Grid>
              <Grid item xs={12}>
                Description: {props.personData.PDesc3}
              </Grid>
              <Grid item xs={12}>
                Link: {props.personData.PLink3}
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
                label="Projects Score"
                name="ProjectScore"
                onChange={handleInputChange}
                value={values.ProjectScore}
                error={errors.ProjectScore}
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

export default ScoreProjects;
