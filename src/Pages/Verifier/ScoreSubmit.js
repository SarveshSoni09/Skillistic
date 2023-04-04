import React from "react";
import { Link } from "react-router-dom";
import GlassButton from "../../Components/Controls/GlassButton";

import { Grid } from "@mui/material";

const ScoreSubmit = (props) => {
  console.log(props.personScore);

  // Insert Algorithm to calculate score of user based on all the scores

  return (
    <div className="verification-content">
      <h3 style={{ fontFamily: "Merriweather" }}>Submit Score</h3>
      <div
        className="verification-details"
        style={{ padding: "8px", margin: "0 24px" }}
      >
        <Grid container xs={12}>
          <Grid
            container
            xs={12}
            rowGap={1}
            sx={{
              textAlign: "start",
              padding: "8px 0",
            }}
          >
            <Grid item xs={10}>
              The Final score of the User is 87.9
            </Grid>
            <Grid item xs={2}>
              <GlassButton
                name="Submit"
                variant="contained"
                component={Link}
                to="/Verifications"
                fullWidth
              ></GlassButton>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ScoreSubmit;
