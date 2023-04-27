import React, { useState, useEffect } from "react";
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

import { getAuth } from "firebase/auth";
import { db, storage } from "../../FirebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  collection,
} from "firebase/firestore";

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
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const user = currentUser ? currentUser.uid : null;
  const userRef = user ? doc(db, "Users", user) : null;
  const skillRef = collection(db, "Skills");

  const [expertise, setExpertise] = useState([]);
  const [pending, setPending] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (userRef) {
      const fetchData = async () => {
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const expert = docSnap.data().ExpertIn;
          setExpertise(expert);
          if (docSnap.data().PendingVerifs) {
            const pendingv = docSnap.data().PendingVerifs;
            setPending(pendingv);
          }
        }
      };
      fetchData();
    }
  }, [pending]);
  useEffect(() => {
    if (userRef) {
      const fetchData = async () => {
        const userSnap = await getDoc(userRef);
        const skillQuery = query(skillRef, where("Status", "==", "Pending"));
        const docSnap = await getDocs(skillQuery);
        setRequests([]);
        docSnap.forEach((doc) => {
          if (userSnap.data().ExpertIn.includes(doc.data().SkillName)) {
            setRequests((prevData) => [...prevData, doc.data()]);
          }
        });
      };
      fetchData();
    }
  }, []);
  // console.log(requests);
  // console.log(pending);

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
              {expertise.map((skill, index) => (
                <Tab sx={TabSx} label={skill} {...a11yProps(index)} />
              ))}
            </Tabs>
            <div style={{ width: "68vw" }}>
              {expertise.map((skill, index) => (
                <TabPanel sx={{ color: "White" }} value={value} index={index}>
                  <Grid container rowGap={1} columnGap={1}>
                    {pending[skill] ? (
                      pending[skill].map((verify) => (
                        <Grid item xs={3.9}>
                          <Link
                            className="verification"
                            to="/Scoring"
                            state={{ data: verify }}
                          >
                            {verify["SkillName"]}
                          </Link>
                        </Grid>
                      ))
                    ) : (
                      <></>
                    )}
                  </Grid>
                </TabPanel>
              ))}
            </div>
          </Box>
        </div>
        <div className="VRSideBar">
          <div className="RSbHeader">New Requests</div>
          <div className="NewRequests">
            {requests.map((req) =>
              pending[req.SkillName]?.some(
                (pendingReq) => pendingReq.SkillID === req.SkillID
              ) ? null : (
                <div className="NewRequest">
                  <div className="RequestTitle">{req["SkillName"]}</div>
                  <div className="RequestBtns">
                    <GlassButton name="Reject" onClick={() => {}}></GlassButton>
                    <GlassButton
                      name="Accept"
                      onClick={async () => {
                        if (pending.length === 0) {
                          const updatedPending = { [req.SkillName]: [req] };
                          setPending(updatedPending);
                          await updateDoc(userRef, {
                            PendingVerifs: updatedPending,
                          });
                        } else {
                          if (pending[req.SkillName]) {
                            pending[req.SkillName].push(req);
                            await updateDoc(userRef, {
                              PendingVerifs: pending,
                            });
                            const filteredReq = requests.filter(
                              (obj) => obj.SkillID !== req.SkillID
                            );
                            setRequests(filteredReq);
                          } else {
                            setPending((prevData) => ({
                              ...prevData,
                              [req.SkillName]: [req],
                            }));
                            await updateDoc(userRef, {
                              PendingVerifs: {
                                ...pending, // use the updated `pending` state here
                                [req.SkillName]: [req],
                              },
                            });
                          }
                        }
                      }}
                    ></GlassButton>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifications;
