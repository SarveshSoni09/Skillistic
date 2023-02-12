import React from "react";
import SignedNavbar from "../Components/SignedNavbar";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import UploadFileIcon from "@mui/icons-material/UploadFile";

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

const Verify = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabSx = [
    {
      color: "white",
      fontSize: "20px",
      fontFamily: "Merriweather",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
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

  const GlassDarkTextfield = styled(TextField)({
    "& .MuiInputBase-root": {
      background: "rgba(0, 0, 0, 0.2)",
      boxShadow: "inset -4px 4px 4px rgba(0, 0, 0, 0.4)",
      fontFamily: "Merriweather",
    },
    "& label.Mui-focused": {
      color: "rgba(255, 255, 255, 0.6)",
    },
    "& label.MuiInputLabel-root": {
      color: "rgba(250, 255, 255)",
      fontFamily: "Merriweather",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.2)",
        color: "rgba(255, 255, 255, 0.2)",
        fontFamily: "Merriweather",
      },
      "& label": {
        color: "white",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0, 0, 0, 0.4)",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid rgba(0, 0, 0, 0.4)",
      },
    },
  });

  const GlassButton = styled(Button)({
    boxShadow: "-3px 3px 3px rgba(0, 0, 0, 0.4)",
    textTransform: "none",
    fontSize: 20,
    fontFamily: "Merriweather",
    padding: "8px 24px",
    border: "1px solid rgba(54, 110, 137, 0.8)",
    lineHeight: 1.5,
    background: "rgba(34, 72, 91, 0.8)",
    borderRadius: "4px",
    backdropFilter: "blur(5px)",
    "&:hover": {
      background: "rgba(74, 148, 185, 0.8)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
    },
    "&:active": {
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
      background: "rgba(164, 225, 255, 0.55)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
    },
    "&:focus": {
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
    },
  });

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
            <Tab sx={TabSx} label="Education" {...a11yProps(0)} />
            <Tab sx={TabSx} label="Courses" {...a11yProps(1)} />
            <Tab sx={TabSx} label="Experience" {...a11yProps(2)} />
            <Tab sx={TabSx} label="Projects" {...a11yProps(3)} />
            <Tab sx={TabSx} label="Submit" {...a11yProps(4)} />
          </Tabs>
          <TabPanel sx={{ color: "White" }} value={value} index={0}>
            <div className="skill-content">
              <h3>Education Details</h3>
              <div className="skill-form" style={{ padding: "8px" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                      Degree 1
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      required
                      id="outlined-required"
                      label="Degree Name"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      required
                      id="outlined-required"
                      label="Specialization Field"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      required
                      id="outlined-required"
                      label="College/University"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassButton
                      variant="contained"
                      fullWidth
                      sx={{ height: "100%" }}
                      endIcon={<UploadFileIcon />}
                    >
                      Upload Degree
                    </GlassButton>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      required
                      id="outlined-required"
                      label="Relevant Subject 1"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      required
                      id="outlined-required"
                      label="Grade 1"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Relevant Subject 2"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Grade 2"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Relevant Subject 3"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Grade 3"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Relevant Subject 4"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Grade 4"
                    ></GlassDarkTextfield>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                      Degree 2
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      required
                      id="outlined-required"
                      label="Degree Name"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      required
                      id="outlined-required"
                      label="Specialization Field"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      required
                      id="outlined-required"
                      label="College/University"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassButton
                      variant="contained"
                      fullWidth
                      sx={{ height: "100%" }}
                      endIcon={<UploadFileIcon />}
                    >
                      Upload Degree
                    </GlassButton>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      required
                      id="outlined-required"
                      label="Relevant Subject 1"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      required
                      id="outlined-required"
                      label="Grade 1"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Relevant Subject 2"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Grade 2"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Relevant Subject 3"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Grade 3"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Relevant Subject 4"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={3}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Grade 4"
                    ></GlassDarkTextfield>
                  </Grid>
                </Grid>
                <div
                  style={{
                    bottom: "8px",
                    position: "absolute",
                    width: "calc(100% - 16px)",
                  }}
                >
                  <GlassButton variant="contained" fullWidth {...a11yProps(1)}>
                    Next
                  </GlassButton>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="skill-content">
              <h3>Courses Completed Details</h3>
              <div className="skill-form" style={{ padding: "8px" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                      Course 1
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Course Name"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Course Specialization"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Platform"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassButton
                      variant="contained"
                      fullWidth
                      sx={{ height: "100%" }}
                      endIcon={<UploadFileIcon />}
                    >
                      Upload Course Certificate
                    </GlassButton>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                      Course 2
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Course Name"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Course Specialization"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Platform"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassButton
                      variant="contained"
                      fullWidth
                      sx={{ height: "100%" }}
                      endIcon={<UploadFileIcon />}
                    >
                      Upload Course Certificate
                    </GlassButton>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                      Course 3
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Course Name"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Course Specialization"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Platform"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassButton
                      variant="contained"
                      fullWidth
                      sx={{ height: "100%" }}
                      endIcon={<UploadFileIcon />}
                    >
                      Upload Course Certificate
                    </GlassButton>
                  </Grid>
                </Grid>
                <div
                  style={{
                    bottom: "8px",
                    position: "absolute",
                    width: "calc(100% - 16px)",
                  }}
                >
                  <GlassButton variant="contained" fullWidth {...a11yProps(1)}>
                    Next
                  </GlassButton>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="skill-content">
              <h3>Work Experience Details</h3>
              <div className="skill-form" style={{ padding: "8px" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                      Work Experience 1
                    </h4>
                  </Grid>
                  <Grid item xs={4}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Company"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={4}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Position Held"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={4}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Duration"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={8}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Work Description"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={4}>
                    <GlassButton
                      variant="contained"
                      fullWidth
                      sx={{ height: "100%" }}
                      endIcon={<UploadFileIcon />}
                    >
                      Upload Proof
                    </GlassButton>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                      Work Experience 2
                    </h4>
                  </Grid>
                  <Grid item xs={4}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Company"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={4}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Position Held"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={4}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Duration"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={8}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Work Description"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={4}>
                    <GlassButton
                      variant="contained"
                      fullWidth
                      sx={{ height: "100%" }}
                      endIcon={<UploadFileIcon />}
                    >
                      Upload Proof
                    </GlassButton>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                      Work Experience 3
                    </h4>
                  </Grid>
                  <Grid item xs={4}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Company"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={4}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Position Held"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={4}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Duration"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={8}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Work Description"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={4}>
                    <GlassButton
                      variant="contained"
                      fullWidth
                      sx={{ height: "100%" }}
                      endIcon={<UploadFileIcon />}
                    >
                      Upload Proof
                    </GlassButton>
                  </Grid>
                </Grid>
                <div
                  style={{
                    bottom: "8px",
                    position: "absolute",
                    width: "calc(100% - 16px)",
                  }}
                >
                  <GlassButton variant="contained" fullWidth {...a11yProps(1)}>
                    Next
                  </GlassButton>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="skill-content">
              <h3>Relevant Project & Additional Information</h3>
              <div className="skill-form" style={{ padding: "8px" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                      Project Details
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Project 1 Link"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Project 2 Link"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Project 3 Link"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Project 4 Link"
                    ></GlassDarkTextfield>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                      Additional Information
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Github Profile"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="LinkedIn Profile"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Other Profile 1"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Other Profile 2"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Other Profile 3"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Other Profile 4"
                    ></GlassDarkTextfield>
                  </Grid>
                </Grid>
                <div
                  style={{
                    bottom: "8px",
                    position: "absolute",
                    width: "calc(100% - 16px)",
                  }}
                >
                  <GlassButton variant="contained" fullWidth>
                    Next
                  </GlassButton>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className="skill-content">
              <h3>Submit</h3>
              <div className="skill-form" style={{ padding: "8px" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                      Submit
                    </h4>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Skill to be Verified"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6}>
                    <GlassDarkTextfield
                      fullWidth
                      id="outlined-required"
                      label="Number of Verifiers"
                    ></GlassDarkTextfield>
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: "left" }}>
                    Ethereum Cost: 0.02 Eth
                  </Grid>
                </Grid>
                <div
                  style={{
                    bottom: "8px",
                    position: "absolute",
                    width: "calc(100% - 16px)",
                  }}
                >
                  <GlassButton variant="contained" fullWidth>
                    Proceed to Pay
                  </GlassButton>
                </div>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Verify;
