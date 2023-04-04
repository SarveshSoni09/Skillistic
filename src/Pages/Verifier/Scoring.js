import React, { useState } from "react";
import VSignedNavbar from "../../Components/VSignedNavbar";
// import Sidebar from '../Components/Sidebar'
import vpersonData from "../../Data/VerificationData.json";

import ScoreEducation from "./ScoreEducation";
import ScoreCourses from "./ScoreCourses";
import ScoreExperiences from "./ScoreExperiences";
import ScoreProjects from "./ScoreProjects";
import ScoreSubmit from "./ScoreSubmit";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";

const Scoring = () => {
  const [personScore, setPersonScore] = useState([]);
  // const [currentPage, setCurrentPage] = useState(true);
  const [eduScore, setEduScore] = useState(true);
  const [eduScoreDone, setEduScoreDone] = useState(false);
  const [coursesScore, setCoursesScore] = useState(false);
  const [coursesScoreDone, setCoursesScoreDone] = useState(false);
  const [expScore, setExpScore] = useState(false);
  const [expScoreDone, setExpScoreDone] = useState(false);
  const [projScore, setProjScore] = useState(false);
  const [projScoreDone, setProjScoreDone] = useState(false);
  const [submitScore, setSubmitScore] = useState(false);
  const [submitScoreDone, setSubmitScoreDone] = useState(false);

  const mergeScore = (score) => {
    setPersonScore((prevScore) => ({ ...prevScore, ...score.values }));
  };

  const personData = vpersonData.person;

  return (
    <div id="user-dashboard">
      <VSignedNavbar />
      <div className="Verification-content">
        <div className="SMainContent">
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              height: "100%",
            }}
          >
            <div className="VerticalNav">
              <div className={`vTabLink ${eduScore ? "currentVTabLink" : ""}`}>
                Education {eduScoreDone && <CheckCircleIcon />}
              </div>
              <div
                className={`vTabLink ${coursesScore ? "currentVTabLink" : ""}`}
              >
                Courses {coursesScoreDone && <CheckCircleIcon />}
              </div>
              <div className={`vTabLink ${expScore ? "currentVTabLink" : ""}`}>
                Experiences {expScoreDone && <CheckCircleIcon />}
              </div>
              <div className={`vTabLink ${projScore ? "currentVTabLink" : ""}`}>
                Projects {projScoreDone && <CheckCircleIcon />}
              </div>
              <div
                className={`vTabLink ${submitScore ? "currentVTabLink" : ""}`}
              >
                Submit
              </div>
            </div>
            <div style={{ width: "85vw" }}>
              {eduScore && (
                <ScoreEducation
                  completed={setEduScoreDone}
                  mergeScore={mergeScore}
                  setThisScore={setEduScore}
                  setNewScore={setCoursesScore}
                  personScore={personScore}
                  personData={personData}
                />
              )}
              {coursesScore && (
                <ScoreCourses
                  completed={setCoursesScoreDone}
                  mergeScore={mergeScore}
                  setThisScore={setCoursesScore}
                  setNewScore={setExpScore}
                  personScore={personScore}
                  personData={personData}
                />
              )}
              {expScore && (
                <ScoreExperiences
                  completed={setExpScoreDone}
                  mergeScore={mergeScore}
                  setThisScore={setExpScore}
                  setNewScore={setProjScore}
                  personScore={personScore}
                  personData={personData}
                />
              )}
              {projScore && (
                <ScoreProjects
                  completed={setProjScoreDone}
                  mergeScore={mergeScore}
                  setThisScore={setProjScore}
                  setNewScore={setSubmitScore}
                  personScore={personScore}
                  personData={personData}
                />
              )}
              {submitScore && (
                <ScoreSubmit
                  completed={setSubmitScoreDone}
                  mergeScore={mergeScore}
                  personScore={personScore}
                  personData={personData}
                />
              )}
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Scoring;
