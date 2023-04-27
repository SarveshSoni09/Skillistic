import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid } from "@mui/material";
import SignedNavbar from "../../Components/SignedNavbar";
import GlassButton from "../../Components/Controls/GlassButton";

import VerifyInit from "./VerifyInit";
import VerifyEducation from "./VerifyEducation";
import VerifyCourses from "./VerifyCourses";
import VerifyExperiences from "./VerifyExperiences";
import VerifyProjects from "./VerifyProjects";
import VerifySubmit from "./VerifySubmit";

import { getAuth } from "firebase/auth";
import { db, storage } from "../../FirebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Verify = () => {
  const [personData, setPersonData] = useState([]);
  const [skillPage, setSkillPage] = useState(true);
  const [skillPageDone, setSkillPageDone] = useState(false);
  const [eduPage, setEduPage] = useState(false);
  const [eduPageDone, setEduPageDone] = useState(false);
  const [coursesPage, setCoursesPage] = useState(false);
  const [coursesPageDone, setCoursesPageDone] = useState(false);
  const [expPage, setExpPage] = useState(false);
  const [expPageDone, setExpPageDone] = useState(false);
  const [projPage, setProjPage] = useState(false);
  const [projPageDone, setProjPageDone] = useState(false);
  const [paymentPage, setPaymentPage] = useState(false);
  const [paymentPageDone, setPaymentPageDone] = useState(false);
  const [submitPage, setSubmitPage] = useState(false);
  const [skills, setSkills] = useState([]);
  const [skillID, setSkillID] = useState("");
  const [filesUpload, setFilesUpload] = useState([]);

  const navigate = useNavigate();

  const auth = getAuth();
  const currentUser = auth.currentUser;
  const user = currentUser ? currentUser.uid : null;
  const docRef = user ? doc(db, "Users", user) : null;

  useEffect(() => {
    if (docRef) {
      const fetchData = async () => {
        const docSnap = await getDoc(docRef);
        console.log("Fetching");
        if (docSnap.exists()) {
          const skillsData = docSnap.data().Skills;
          setSkills(skillsData);
          if (skillsData && skillsData.length > 0) {
            const lastSkill = skillsData[skillsData.length - 1];
            const lastSkillID = lastSkill.SkillID;
            const newSkillID =
              lastSkillID.slice(0, 10) + (parseInt(lastSkillID.slice(-1)) + 1);
            setSkillID(newSkillID);
            setPersonData((prevData) => ({
              ...prevData,
              SkillID: newSkillID,
            }));
          } else {
            const userID = docSnap.data().UserID;
            if (userID) {
              const newSkillID = `Skill${userID.slice(-4)}01`;
              setSkillID(newSkillID);
              setPersonData((prevData) => ({
                ...prevData,
                SkillID: newSkillID,
              }));
            }
          }
        }
      };
      fetchData();
    }
  }, []);

  const handleUpload = (file, filename) => {
    const renamedFile = { name: skillID + filename + file["name"], file };
    setFilesUpload((prevData) => [...prevData, renamedFile]);
  };

  const mergeData = (data) => {
    setPersonData((prevData) => ({ ...prevData, ...data.values }));
  };
  const fileUploading = (file) => {
    return new Promise((resolve, reject) => {
      const fileRef = ref(storage, `${skillID}/${file.name.slice(11, 18)}`);
      const uploadTask = uploadBytesResumable(fileRef, file.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Update progress
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            const fileData = {
              name: file.name.slice(11, 18),
              url: url,
            };
            resolve(fileData);
          });
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedPersonData = {};
      const fileDataList = await Promise.all(
        filesUpload.map((file) => fileUploading(file))
      );
      fileDataList.forEach((fileData) => {
        updatedPersonData[fileData.name + "URL"] = fileData.url;
      });

      const updatedSkills = [
        ...(skills || []), // append to existing skills or start with an empty array
        { ...personData, ...updatedPersonData },
      ];
      const skillData = { Skills: updatedSkills };
      setDoc(doc(db, "Users", user), skillData, { merge: true });
      setDoc(
        doc(db, "Skills", skillID),
        { ...personData, ...updatedPersonData },
        { merge: true }
      ).then(() => {
        navigate("/Dashboard");
      });
    } catch (error) {
      console.log(error);
    }
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
            <div className={`vTabLink ${skillPage ? "currentVTabLink" : ""}`}>
              Skill {skillPageDone && <CheckCircleIcon />}
            </div>
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
            <div className={`vTabLink ${paymentPage ? "currentVTabLink" : ""}`}>
              Payment {paymentPageDone && <CheckCircleIcon />}
            </div>
          </div>
          <div>
            {skillPage && (
              <VerifyInit
                completed={setSkillPageDone}
                mergeData={mergeData}
                setThisPage={setSkillPage}
                setNewPage={setEduPage}
                personData={personData}
              />
            )}
            {eduPage && (
              <VerifyEducation
                completed={setEduPageDone}
                mergeData={mergeData}
                setThisPage={setEduPage}
                setNewPage={setCoursesPage}
                personData={personData}
                handleUpload={handleUpload}
              />
            )}
            {coursesPage && (
              <VerifyCourses
                completed={setCoursesPageDone}
                mergeData={mergeData}
                setThisPage={setCoursesPage}
                setNewPage={setExpPage}
                personData={personData}
                handleUpload={handleUpload}
              />
            )}
            {expPage && (
              <VerifyExperiences
                completed={setExpPageDone}
                mergeData={mergeData}
                setThisPage={setExpPage}
                setNewPage={setProjPage}
                personData={personData}
                handleUpload={handleUpload}
              />
            )}
            {projPage && (
              <VerifyProjects
                completed={setProjPageDone}
                mergeData={mergeData}
                setThisPage={setProjPage}
                setNewPage={setPaymentPage}
                personData={personData}
              />
            )}
            {paymentPage && (
              <VerifySubmit
                completed={setPaymentPageDone}
                mergeData={mergeData}
                setThisPage={setPaymentPage}
                setNewPage={setSubmitPage}
                personData={personData}
              />
            )}
            {submitPage && (
              <div className="skill-content">
                <h3>Submit</h3>
                <div className="skill-form" style={{ padding: "8px" }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
                        Submit
                      </h4>
                    </Grid>
                  </Grid>
                  <div
                    style={{
                      bottom: "8px",
                      position: "absolute",
                      width: "calc(100% - 16px)",
                    }}
                  >
                    <GlassButton
                      variant="contained"
                      onClick={handleSubmit}
                      fullWidth
                      name="Submit"
                    ></GlassButton>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Verify;
