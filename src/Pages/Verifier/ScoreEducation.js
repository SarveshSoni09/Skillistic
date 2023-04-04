import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { useForm } from "../../Components/Controls/UseForm";

import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";

import { textValidator } from "../../Components/Controls/Validation";

import { Grid } from "@mui/material";

const ScoreEducation = (props) => {
  var initialFValues = {
    EducationScore: 0.0,
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for Education Score
    if ("EducationScore" in fieldValues) {
      temp.Degree1Name = textValidator(fieldValues.Degree1Name);
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
    <div className="verification-content">
      <h3 style={{ fontFamily: "Merriweather" }}>ABC Education Verification</h3>
      <div
        className="verification-details"
        style={{ padding: "8px", margin: "0px 24px" }}
      >
        <Grid container xs={12}>
          {props.personData.Degree1Name && (
            <Grid
              container
              xs={12}
              rowGap={1}
              sx={{ textAlign: "start", padding: "8px 0" }}
            >
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>Degree 1</h3>
              </Grid>
              <Grid item xs={3}>
                Degree Name: {props.personData.Degree1Name}
              </Grid>
              <Grid item xs={3.4}>
                Specialization: {props.personData.DSpecialization1}
              </Grid>
              <Grid item xs={5}>
                University/College: {props.personData.DUniversity1}
              </Grid>
              <Grid item xs={0.5}>
                <GlassButton
                  variant="contained"
                  fullWidth
                  sx={{ height: "100%" }}
                  endIcon={<DownloadIcon />}
                ></GlassButton>
              </Grid>
            </Grid>
          )}
          {props.personData.Degree2Name && (
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
                <h3 style={{ margin: "4px 0" }}>Degree 2</h3>
              </Grid>
              <Grid item xs={3}>
                Degree Name: {props.personData.Degree2Name}
              </Grid>
              <Grid item xs={3.4}>
                Specialization: {props.personData.DSpecialization2}
              </Grid>
              <Grid item xs={5}>
                University/College: {props.personData.DUniversity2}
              </Grid>
              <Grid item xs={0.5}>
                <GlassButton
                  variant="contained"
                  fullWidth
                  sx={{ height: "100%" }}
                  endIcon={<DownloadIcon />}
                ></GlassButton>
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
              padding: "8px 0",
            }}
          >
            <Grid item xs={2}>
              <DarkGlassInput
                fullWidth
                required={true}
                label="Education Score"
                name="EducationScore"
                onChange={handleInputChange}
                value={values.EducationScore}
                error={errors.EducationScore}
              ></DarkGlassInput>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={2}>
              <GlassButton
                name="Next"
                fullWidth
                variant="contained"
                onClick={() => {
                  props.mergeScore({ values });
                  props.setThisScore(false);
                  props.setNewScore(true);
                  props.completed(true);
                  console.log(props.personScore);
                  // console.log(values);
                }}
              ></GlassButton>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ScoreEducation;
