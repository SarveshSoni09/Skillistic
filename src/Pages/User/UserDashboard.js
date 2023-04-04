import React from "react";
import SignedNavbar from "../../Components/SignedNavbar";

import skills from "../../Data/UserSkills.json";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

const UserDashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(skills.skill);

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
      <SignedNavbar />
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
            {/* <Tab sx={TabSx} label="Skill 1" {...a11yProps(0)} />
            <Tab sx={TabSx} label="Skill 2" {...a11yProps(1)} />
            <Tab sx={TabSx} label="Skill 3" {...a11yProps(2)} /> */}
            {skills.skill.map((skill, index) =>
              skill.status === "Verified" ? (
                <Tab sx={TabSx} label={skill.skill} {...a11yProps(index)} />
              ) : (
                <></>
              )
            )}
          </Tabs>
          {skills.skill.map((skill, index) =>
            skill.status === "Verified" ? (
              <TabPanel value={value} index={index}>
                <div className="skill-content">
                  <h3>{skill.skill}</h3>
                  <div className="skill-img">
                    <h1 style={{ padding: "15vh 0" }}>{skill.skill}</h1>
                    <h4>
                      This is to certify that Mr. ABC has acquired the following
                      score for {skill.skill}
                    </h4>
                    <h2>Score: {skill.score}%</h2>
                  </div>
                </div>
              </TabPanel>
            ) : (
              <></>
            )
          )}
        </Box>
      </div>
    </div>
  );
};

export default UserDashboard;
