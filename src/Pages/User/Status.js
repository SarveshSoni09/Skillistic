import React, { useState, useEffect } from "react";
import SignedNavbar from "../../Components/SignedNavbar";

import { Grid } from "@mui/material";
import skills from "../../Data/UserSkills.json";

import { getAuth } from "firebase/auth";
import { db, storage } from "../../FirebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Status = () => {
  const [skills, setSkills] = useState([]);

  const auth = getAuth();
  const currentUser = auth.currentUser;
  const user = currentUser ? currentUser.uid : null;
  const docRef = user ? doc(db, "Users", user) : null;

  useEffect(() => {
    if (docRef) {
      const fetchData = async () => {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const skillsData = docSnap.data().Skills;
          setSkills(skillsData);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <div>
      <SignedNavbar />
      <div className="status-content">
        <Grid container spacing={1}>
          {/* {skills.map((skill) => console.log(skill.SkillName, skill.Status))} */}
          {skills.map((skill, index) => (
            <Grid item xs={4}>
              <div className="skill-status">
                <h3 style={{ margin: "10% 0" }}>{skill.SkillName}</h3>
                <div className="status">
                  {skill.Status === "Pending" && "Verification Pending"}
                  {skill.Status === "Verified" &&
                    "Verified with a score of" + skill.FinalScore}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Status;
