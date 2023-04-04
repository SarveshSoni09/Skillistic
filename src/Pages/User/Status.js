import React from "react";
import SignedNavbar from "../../Components/SignedNavbar";

import { Grid } from "@mui/material";
import skills from "../../Data/UserSkills.json";

const Status = () => {
  return (
    <div>
      <SignedNavbar />
      <div className="status-content">
        <Grid container spacing={1}>
          {skills.skill.map((skill, index) => (
            <Grid item xs={4}>
              <div className="skill-status">
                <h3 style={{ margin: "10% 0" }}>{skill.skill}</h3>
                <div className="status">{skill.status}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Status;
