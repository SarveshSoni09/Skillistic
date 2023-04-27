import React from "react";
import { Link } from "react-router-dom";
import GlassButton from "../../Components/Controls/GlassButton";

import { Grid } from "@mui/material";
import { setDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

const ScoreSubmit = (props) => {
  const scoreArr = Object.values(props.personScore);
  var scoreSum = 0;
  scoreArr.forEach((x) => {
    scoreSum += x;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var skillScore;
      var finalScore = 0;
      var status;

      if (props.personData.SkillScore) {
        skillScore = props.personData.SkillScore;
        skillScore.push(scoreSum);
      } else {
        skillScore = [scoreSum];
      }

      if (skillScore.length === parseInt(props.personData.NumberOfVerifiers)) {
        skillScore.forEach((x) => {
          finalScore = +x;
        });
        status = "Verified";
        // Insert NFT generation code here
      } else {
        finalScore = null;
        status = "Pending";
      }

      let newData = {
        SkillScore: skillScore,
        FinalScore: finalScore,
        Status: status,
      };

      // If data successfully updated, Payment Receving Transaction

      // Updating the database
      console.log(newData);
    } catch (error) {
      console.log(error);
    }
  };

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
              The Final score of the User is {scoreSum}
            </Grid>
            <Grid item xs={2}>
              <GlassButton
                name="Submit"
                variant="contained"
                fullWidth
                onClick={handleSubmit}
              ></GlassButton>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ScoreSubmit;
