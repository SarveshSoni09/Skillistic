import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { useForm } from "../../Components/Controls/UseForm";

import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";

import { textValidator } from "../../Components/Controls/Validation";

import { Grid } from "@mui/material";

const ScoreCourses = (props) => {
  var initialFValues = {
    CourseScore: 0.0,
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for Course Score
    if ("CourseScore" in fieldValues) {
      temp.CourseScore = textValidator(fieldValues.CourseScore);
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
      <h3 style={{ fontFamily: "Merriweather" }}>ABC Courses Verification</h3>
      <div
        className="verification-details"
        style={{ padding: "8px", margin: "0px 24px" }}
      >
        <Grid container xs={12}>
          {props.personData.Course1Name && (
            <Grid
              container
              xs={12}
              rowGap={1}
              sx={{ textAlign: "start", padding: "8px 0" }}
            >
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>Course 1</h3>
              </Grid>
              <Grid item xs={3.45}>
                Name: {props.personData.Course1Name}
              </Grid>
              <Grid item xs={4}>
                Specialization: {props.personData.CSpecialization1}
              </Grid>
              <Grid item xs={4}>
                Platform: {props.personData.CPlatform1}
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
          {props.personData.Course2Name && (
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
                <h3 style={{ margin: "4px 0" }}>Course 2</h3>
              </Grid>
              <Grid item xs={3.45}>
                Name: {props.personData.Course2Name}
              </Grid>
              <Grid item xs={4}>
                Specialization: {props.personData.CSpecialization2}
              </Grid>
              <Grid item xs={4}>
                Platform: {props.personData.CPlatform2}
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
          {props.personData.Course3Name && (
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
                <h3 style={{ margin: "4px 0" }}>Course 3</h3>
              </Grid>
              <Grid item xs={3.45}>
                Name: {props.personData.Course3Name}
              </Grid>
              <Grid item xs={4}>
                Specialization: {props.personData.CSpecialization3}
              </Grid>
              <Grid item xs={4}>
                Platform: {props.personData.CPlatform3}
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
                fullWidth={true}
                required={true}
                label="Courses Score"
                name="CourseScore"
                onChange={handleInputChange}
                value={values.CourseScore}
                error={errors.CourseScore}
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

export default ScoreCourses;
