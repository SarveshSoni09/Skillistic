import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { useForm } from "../../Components/Controls/UseForm";

import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";

import { scoreValidator } from "../../Components/Controls/Validation";

import { Grid } from "@mui/material";

const ScoreExperiences = (props) => {
  var initialFValues = {
    ExpScore: 0.0,
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for Experience Score
    if ("ExpScore" in fieldValues) {
      temp.ExpScore = scoreValidator(fieldValues.ExpScore);
      fieldValues.ExpScore = parseFloat(fieldValues.ExpScore);
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
      <h3 style={{ fontFamily: "Merriweather" }}>Experience Verification</h3>
      <div
        className="verification-details"
        style={{ padding: "8px", margin: "0 24px" }}
      >
        <Grid container xs={12}>
          {props.personData.WCompany1 && (
            <Grid
              container
              xs={12}
              rowGap={1}
              sx={{ textAlign: "start", padding: "8px 0" }}
            >
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>Experience 1</h3>
              </Grid>
              <Grid item xs={2}>
                Company: {props.personData.WCompany1}
              </Grid>
              <Grid item xs={3}>
                Position: {props.personData.WPosition1}
              </Grid>
              <Grid item xs={3}>
                Duration: {props.personData.WDuration1}
              </Grid>
              <Grid item xs={3.4}>
                Work Description: {props.personData.WDesc1}
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
          {props.personData.WCompany2 && (
            <Grid
              container
              xs={12}
              rowGap={1}
              sx={{
                textAlign: "start",
                padding: "8px 0",
                borderTop: "1px solid #fffa",
              }}
            >
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>Experience 2</h3>
              </Grid>
              <Grid item xs={2}>
                Company: {props.personData.WCompany2}
              </Grid>
              <Grid item xs={3}>
                Position: {props.personData.WPosition2}
              </Grid>
              <Grid item xs={3}>
                Duration: {props.personData.WDuration2}
              </Grid>
              <Grid item xs={3.4}>
                Work Description: {props.personData.WDesc2}
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
          {props.personData.WCompany3 && (
            <Grid
              container
              xs={12}
              rowGap={1}
              sx={{
                textAlign: "start",
                padding: "8px 0",
                borderTop: "1px solid #fffa",
              }}
            >
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h3 style={{ margin: "4px 0" }}>Experience 3</h3>
              </Grid>
              <Grid item xs={2}>
                Company: {props.personData.WCompany3}
              </Grid>
              <Grid item xs={3}>
                Position: {props.personData.WPosition3}
              </Grid>
              <Grid item xs={3}>
                Duration: {props.personData.WDuration3}
              </Grid>
              <Grid item xs={3.4}>
                Work Description: {props.personData.WDesc3}
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
                label="Experiences Score"
                name="ExpScore"
                onChange={handleInputChange}
                value={values.ExpScore}
                error={errors.ExpScore}
              ></DarkGlassInput>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={2}>
              <GlassButton
                name="Next"
                fullWidth
                variant="contained"
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

export default ScoreExperiences;
