import React from "react";
import { useForm } from "../../Components/Controls/UseForm";
import GlassButton from "../../Components/Controls/GlassButton";
import DarkAutoDropdown from "../../Components/Controls/DarkAutoDropdown";

import { Grid } from "@mui/material";

const VerifyInit = (props) => {
  var initialFValues = {
    SkillName: "",
    NumberOfVerifiers: "2",
    Status: "Pending",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for SkillName
    if ("SkillName" in fieldValues) {
      if (skills.includes(fieldValues.SkillName)) {
        temp.SkillName = "";
      } else {
        temp.SkillName = "Choose from the List";
      }
    }
    // Validation for Number of Verifiers
    if ("NumberOfVerifiers" in fieldValues) {
      if (numbers.includes(fieldValues.NumberOfVerifiers)) {
        temp.NumberOfVerifiers = "";
      } else {
        temp.NumberOfVerifiers = "Choose from 2-10";
      }
    }
    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleIPDChange } = useForm(
    initialFValues,
    true,
    validate
  );

  const skills = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Blockchain",
    "Machine Learning",
    "Data Science",
    "Artificial Intellegence",
  ];
  const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <div id="login-body">
      <div id="login-form" className="glass">
        <h3 style={{ marginTop: 0 }}>Verify Your Skills!</h3>
        <div style={{ height: "100%" }}>
          <Grid container spacing={1.5}>
            <Grid item xs={12}>
              <DarkAutoDropdown
                fullWidth
                required
                id="choose-skill"
                name="SkillName"
                label="Choose the Skill"
                options={skills}
                value={values.SkillName}
                onChange={(event) => handleIPDChange(event, "SkillName")}
                error={errors.SkillName}
              />
            </Grid>
            <Grid item xs={12}>
              <DarkAutoDropdown
                fullWidth
                required
                id="no-of-verifier"
                label="Enter Number of Verifiers "
                options={numbers}
                value={values.NumberOfVerifiers}
                onChange={(event) =>
                  handleIPDChange(event, "NumberOfVerifiers")
                }
                error={errors.NumberOfVerifiers}
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
                variant="contained"
                fullWidth
                name="Proceed to Enter Details..."
                onClick={() => {
                  if (validate()) {
                    props.mergeData({ values });
                    props.setThisPage(false);
                    props.setNewPage(true);
                    props.completed(true);
                  }
                }}
              ></GlassButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyInit;
