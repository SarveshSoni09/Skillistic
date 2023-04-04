import React from "react";
import VSignedNavbar from "../../Components/VSignedNavbar";
// import Sidebar from '../Components/Sidebar'

import skills from "../../Data/Verifier.json";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import GlassButton from "../../Components/Controls/GlassButton";
// import { styled } from "@mui/material/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Verifications = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabSx = [
    {
      color: "white",
      fontFamily: "Merriweather",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
      fontSize: "20px",
      textTransform: "capitalize",
      textAlign: "start",
      border: "1px solid #0000",
      borderBottom: "1px solid #fff3",
      padding: "16px",
      width: "100%",
    },
    {
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      },
    },
    {
      "&:focus": {
        color: "white",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      },
    },
  ];
  // console.log(skills.skill, skills.pending);

  return (
    <div id="user-dashboard">
      <VSignedNavbar />
      <div className="Verification-content">
        <div className="VMainContent">
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              height: "100%",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                height: "100%",
                width: "17vw",
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {skills.skill.map((skill, index) =>
                skill.status === "Verified" ? (
                  <Tab sx={TabSx} label={skill.skill} {...a11yProps(index)} />
                ) : (
                  <></>
                )
              )}
            </Tabs>
            <div style={{ width: "68vw" }}>
              {skills.skill.map((skill, index) =>
                skill.status === "Verified" ? (
                  <TabPanel sx={{ color: "White" }} value={value} index={index}>
                    <Grid container rowGap={1} columnGap={1}>
                      {skill.pending.map((verify) => (
                        <Grid item xs={3.9}>
                          <Link className="verification" to="/Scoring">
                            {verify["display-name"]}
                          </Link>
                        </Grid>
                      ))}
                    </Grid>
                  </TabPanel>
                ) : (
                  <></>
                )
              )}
            </div>
          </Box>
        </div>
        <div className="VRSideBar">
          <div className="RSbHeader">New Requests</div>
          <div className="NewRequests">
            {skills.pending.map((req) => (
              <div className="NewRequest">
                <div className="RequestTitle">{req["pending-skill"]}</div>
                <div className="RequestBtns">
                  <GlassButton name="Reject"></GlassButton>
                  <GlassButton name="Accept"></GlassButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifications;
