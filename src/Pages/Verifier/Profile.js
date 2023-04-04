import React from "react";
import VSignedNavbar from "../../Components/VSignedNavbar";
// import Sidebar from '../Components/Sidebar'

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
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

// const glassTab = styled(Tab)({
//   "& .MuiButtonBase-root": {
//     color: "white",
//   },
// });

const Profile = () => {
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

  return (
    <div id="user-dashboard">
      <VSignedNavbar />
      <div className="Dashboard-content">
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
              width: "15%",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Tab
              sx={TabSx}
              // style={{ fontFamily: "Merriweather" }}
              label="Your Reputation"
              {...a11yProps(0)}
            />
            <Tab sx={TabSx} label="Verifications" {...a11yProps(1)} />
            <Tab sx={TabSx} label="Your Skillset" {...a11yProps(2)} />
          </Tabs>
          <TabPanel sx={{ color: "White" }} value={value} index={0}>
            <div className="skill-content">
              <h3>Your Reputation</h3>
              <div className="skill-img">
                <h1 style={{ padding: "5vh 0" }}>84.23</h1>
                <Grid
                  container
                  rowGap={1}
                  columnGap={1}
                  sx={{ padding: "16px" }}
                >
                  <Grid item xs={5.95}>
                    <div className="darkGlass">
                      Based on past Verifications, your new Reputation is 84.23
                    </div>
                  </Grid>
                  <Grid item xs={5.95}>
                    <div className="darkGlass">
                      Your Reputation has increased by 2.13 recently
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="skill-content">
              <h3>Your Verifications</h3>
              <div className="skill-img">
                <h1 style={{ padding: "5vh 0" }}>
                  You have Completed 37 Verifications
                </h1>
                <Grid
                  container
                  rowGap={1}
                  columnGap={1}
                  sx={{ padding: "16px" }}
                >
                  <Grid item xs={5.95} sx={{ height: "100%" }}>
                    <div className="darkGlass">
                      20 Verifications of Web Development
                    </div>
                  </Grid>
                  <Grid item xs={5.95} sx={{ height: "100%" }}>
                    <div className="darkGlass">
                      11 Verifications of App Deveopment
                    </div>
                  </Grid>
                  <Grid item xs={5.95} sx={{ height: "100%" }}>
                    <div className="darkGlass">6 Verifications of UI/UX</div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="skill-content">
              <h3>Your Skillset</h3>
              <div className="skill-img">
                <h1 style={{ padding: "5vh 0" }}>Mastery of skills</h1>
                <Grid
                  container
                  rowGap={1}
                  columnGap={1}
                  sx={{ padding: "16px" }}
                >
                  <Grid item xs={5.95} sx={{ height: "100%" }}>
                    <div className="darkGlass">Web Development</div>
                  </Grid>
                  <Grid item xs={5.95} sx={{ height: "100%" }}>
                    <div className="darkGlass">Application Deveopment</div>
                  </Grid>
                  <Grid item xs={5.95} sx={{ height: "100%" }}>
                    <div className="darkGlass">UI/UX Designing</div>
                  </Grid>
                  <Grid item xs={5.95} sx={{ height: "100%" }}>
                    <div className="darkGlass">Software Development</div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
