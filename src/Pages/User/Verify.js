import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";
import SignedNavbar from "../../Components/SignedNavbar";

import VerifyEducation from "./VerifyEducation";
import VerifyCourses from "./VerifyCourses";
import VerifyExperiences from "./VerifyExperiences";
import VerifyProjects from "./VerifyProjects";

const Verify = () => {
  const [personData, setPersonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(true);
  const [eduPage, setEduPage] = useState(false);
  const [eduPageDone, setEduPageDone] = useState(false);
  const [coursesPage, setCoursesPage] = useState(false);
  const [coursesPageDone, setCoursesPageDone] = useState(false);
  const [expPage, setExpPage] = useState(false);
  const [expPageDone, setExpPageDone] = useState(false);
  const [projPage, setProjPage] = useState(false);
  const [projPageDone, setProjPageDone] = useState(false);

  const mergeData = (data) => {
    setPersonData((prevData) => ({ ...prevData, ...data.values }));
  };

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
          <div className="VerticalNav">
            <div className={`vTabLink ${eduPage ? "currentVTabLink" : ""}`}>
              Education {eduPageDone && <CheckCircleIcon />}
            </div>
            <div className={`vTabLink ${coursesPage ? "currentVTabLink" : ""}`}>
              Courses {coursesPageDone && <CheckCircleIcon />}
            </div>
            <div className={`vTabLink ${expPage ? "currentVTabLink" : ""}`}>
              Experiences {expPageDone && <CheckCircleIcon />}
            </div>
            <div className={`vTabLink ${projPage ? "currentVTabLink" : ""}`}>
              Projects {projPageDone && <CheckCircleIcon />}
            </div>
            <div className={`vTabLink ${eduPage ? "currentVTabLink" : ""}`}>
              Submit
            </div>
          </div>
          <div>
            {currentPage && (
              <div id="login-body">
                <div id="login-form" className="glass">
                  <h3 style={{ marginTop: 0 }}>Verify Your Skills!</h3>
                  <div style={{ height: "100%" }}>
                    <Grid container spacing={1.5}>
                      <Grid item xs={12}>
                        <DarkGlassInput
                          fullWidth
                          required
                          id="outlined-required"
                          label="Enter the Skill"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <DarkGlassInput
                          fullWidth
                          required
                          id="outlined-required"
                          label="Enter Number of Verifiers"
                        />
                      </Grid>
                    </Grid>
                    <div
                      style={{
                        bottom: "40px",
                        position: "absolute",
                        width: "calc(100% - 80px",
                      }}
                    >
                      <div>
                        <GlassButton
                          // component={Link}
                          // to="/Verifications"
                          variant="contained"
                          fullWidth
                          name="Proceed to Enter Details..."
                          onClick={() => {
                            setCurrentPage(false);
                            setEduPage(true);
                          }}
                        ></GlassButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {eduPage && (
              <VerifyEducation
                completed={setEduPageDone}
                mergeData={mergeData}
                setThisPage={setEduPage}
                setNewPage={setCoursesPage}
                personData={personData}
              />
            )}
            {coursesPage && (
              <VerifyCourses
                completed={setCoursesPageDone}
                mergeData={mergeData}
                setThisPage={setCoursesPage}
                setNewPage={setExpPage}
                personData={personData}
              />
            )}
            {expPage && (
              <VerifyExperiences
                completed={setExpPageDone}
                mergeData={mergeData}
                setThisPage={setExpPage}
                setNewPage={setProjPage}
                personData={personData}
              />
            )}
            {projPage && (
              <VerifyProjects
                completed={setProjPageDone}
                mergeData={mergeData}
                setThisPage={setProjPage}
                setNewPage={setCurrentPage}
                personData={personData}
              />
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Verify;
