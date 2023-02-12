import React from "react";
import SignedNavbar from "../Components/SignedNavbar";

import { Grid } from "@mui/material";

const Status = () => {
  return (
    <div>
      <SignedNavbar />
      <div className="status-content">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <div className="skill-status">
              <h3 style={{ margin: "10% 0" }}>Skill 1</h3>
              <div className="status">Verified</div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="skill-status">
              <h3 style={{ margin: "10% 0" }}>Skill 2</h3>
              <div className="status">Verified</div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="skill-status">
              <h3 style={{ margin: "10% 0" }}>Skill 3</h3>
              <div className="status">Verified</div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="skill-status">
              <h3 style={{ margin: "10% 0" }}>Skill 4</h3>
              <div className="status">In Progress</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Status;
