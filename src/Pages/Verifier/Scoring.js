import React, { useState } from "react";
import VSignedNavbar from "../../Components/VSignedNavbar";
import vpersonData from "../../Data/VerificationData.json";
import { Link, useLocation } from "react-router-dom";

import { auth, storage } from "../../FirebaseConfig";

import ScoreEducation from "./ScoreEducation";
import ScoreCourses from "./ScoreCourses";
import ScoreExperiences from "./ScoreExperiences";
import ScoreProjects from "./ScoreProjects";
import ScoreSubmit from "./ScoreSubmit";
import ScoreProfile from "./ScoreProfile";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";

const Scoring = () => {
  const [personScore, setPersonScore] = useState([]);
  const [eduScore, setEduScore] = useState(true);
  const [eduScoreDone, setEduScoreDone] = useState(false);
  const [coursesScore, setCoursesScore] = useState(false);
  const [coursesScoreDone, setCoursesScoreDone] = useState(false);
  const [expScore, setExpScore] = useState(false);
  const [expScoreDone, setExpScoreDone] = useState(false);
  const [projScore, setProjScore] = useState(false);
  const [projScoreDone, setProjScoreDone] = useState(false);
  const [profScore, setProfScore] = useState(false);
  const [profScoreDone, setProfScoreDone] = useState(false);
  const [submitScore, setSubmitScore] = useState(false);
  const [submitScoreDone, setSubmitScoreDone] = useState(false);

  const mergeScore = (score) => {
    setPersonScore((prevScore) => ({ ...prevScore, ...score.values }));
  };

  // const personData = vpersonData.person;
  let { state } = useLocation();
  const userData = state.data;
  console.log(userData);

  function downloadFile(url, filename) {
    // Get the Firebase Authentication token for the current user
    auth.currentUser.getIdToken(/* forceRefresh */ true).then((idToken) => {
      // Make a GET request to the file URL with the Firebase Authentication token in the headers
      fetch(url, {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }).then((response) => {
        // Get the file extension from the URL
        const urlParts = url.split(".");
        const fileExtension = urlParts[urlParts.length - 1];

        // Set the Content-Type header based on the file extension
        let contentType = "";
        if (fileExtension === "pdf") {
          contentType = "application/pdf";
        } else if (fileExtension === "jpg" || fileExtension === "jpeg") {
          contentType = "image/jpeg";
        } else if (fileExtension === "png") {
          contentType = "image/png";
        }

        // Convert the response to a blob
        response.blob().then((blob) => {
          // Create a download link and trigger a click event to start the download
          const downloadLink = document.createElement("a");
          downloadLink.href = window.URL.createObjectURL(blob);
          downloadLink.download = filename;
          downloadLink.type = contentType; // Set the Content-Type header
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        });
      });
    });
  }

  const handleDownloadClick = (url, filename) => {
    downloadFile(url, filename);
  };

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
              <div className={`vTabLink ${profScore ? "currentVTabLink" : ""}`}>
                Profile {profScoreDone && <CheckCircleIcon />}
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
                  personData={userData}
                  handleDownloadClick={handleDownloadClick}
                />
              )}
              {coursesScore && (
                <ScoreCourses
                  completed={setCoursesScoreDone}
                  mergeScore={mergeScore}
                  setThisScore={setCoursesScore}
                  setNewScore={setExpScore}
                  personScore={personScore}
                  personData={userData}
                  handleDownloadClick={handleDownloadClick}
                />
              )}
              {expScore && (
                <ScoreExperiences
                  completed={setExpScoreDone}
                  mergeScore={mergeScore}
                  setThisScore={setExpScore}
                  setNewScore={setProjScore}
                  personScore={personScore}
                  personData={userData}
                  handleDownloadClick={handleDownloadClick}
                />
              )}
              {projScore && (
                <ScoreProjects
                  completed={setProjScoreDone}
                  mergeScore={mergeScore}
                  setThisScore={setProjScore}
                  setNewScore={setProfScore}
                  personScore={personScore}
                  personData={userData}
                />
              )}
              {profScore && (
                <ScoreProfile
                  completed={setProfScoreDone}
                  mergeScore={mergeScore}
                  setThisScore={setProfScore}
                  setNewScore={setSubmitScore}
                  personScore={personScore}
                  personData={userData}
                />
              )}
              {submitScore && (
                <ScoreSubmit
                  completed={setSubmitScoreDone}
                  mergeScore={mergeScore}
                  personScore={personScore}
                  personData={userData}
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
