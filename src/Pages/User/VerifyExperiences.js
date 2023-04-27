import React from "react";
import { useForm } from "../../Components/Controls/UseForm";
import { textValidator } from "../../Components/Controls/Validation";

import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";
import { Grid } from "@mui/material";

const VerifyExperiences = (props) => {
  var initialFValues = {
    // Experience Company 1 variables
    WCompany1: "",
    WPosition1: "",
    WDuration1: "",
    WDesc1: "",
    // Experience Company 2 variables
    WCompany2: "",
    WPosition2: "",
    WDuration2: "",
    WDesc2: "",
    // Experience Company 3 variables
    WCompany3: "",
    WPosition3: "",
    WDuration3: "",
    WDesc3: "",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for Work Experience 1
    if ("WCompany1" in fieldValues) {
      if (fieldValues.WCompany1 !== "") {
        temp.WCompany1 = textValidator(fieldValues.WCompany1);
      } else {
        temp.WPosition1 = "";
        temp.WDuration1 = "";
        temp.WDesc1 = "";
      }
    }
    if ("WPosition1" in fieldValues) {
      if (values.WCompany1 === "" && fieldValues.WPosition1 !== "") {
        temp.WPosition1 = "Enter Company 1 Name First";
      } else if (values.WCompany1 !== "" && fieldValues.WPosition1 === "") {
        temp.WPosition1 = textValidator(fieldValues.WPosition1);
      } else {
        temp.WPosition1 = "";
      }
    }
    if ("WDuration1" in fieldValues) {
      if (values.WCompany1 === "" && fieldValues.WDuration1 !== "") {
        temp.WDuration1 = "Enter Company 1 Name First";
      } else if (values.WCompany1 !== "" && fieldValues.WDuration1 === "") {
        temp.WDuration1 = textValidator(fieldValues.WDuration1);
      } else {
        temp.WDuration1 = "";
      }
    }
    if ("WDesc1" in fieldValues) {
      if (values.WCompany1 === "" && fieldValues.WDesc1 !== "") {
        temp.WDesc1 = "Enter Company 1 Name First";
      } else if (values.WCompany1 !== "" && fieldValues.WDesc1 === "") {
        temp.WDesc1 = textValidator(fieldValues.WDesc1);
      } else {
        temp.WDesc1 = "";
      }
    }

    // Validation for Work Experience 2
    if ("WCompany2" in fieldValues) {
      if (fieldValues.WCompany2 !== "") {
        temp.WCompany2 = textValidator(fieldValues.WCompany2);
      } else {
        temp.WPosition2 = "";
        temp.WDuration2 = "";
        temp.WDesc2 = "";
      }
    }
    if ("WPosition2" in fieldValues) {
      if (values.WCompany2 === "" && fieldValues.WPosition2 !== "") {
        temp.WPosition2 = "Enter Company 2 Name First";
      } else if (values.WCompany2 !== "" && fieldValues.WPosition2 === "") {
        temp.WPosition2 = textValidator(fieldValues.WPosition2);
      } else {
        temp.WPosition2 = "";
      }
    }
    if ("WDuration2" in fieldValues) {
      if (values.WCompany2 === "" && fieldValues.WDuration2 !== "") {
        temp.WDuration2 = "Enter Company 2 Name First";
      } else if (values.WCompany2 !== "" && fieldValues.WDuration2 === "") {
        temp.WDuration2 = textValidator(fieldValues.WDuration2);
      } else {
        temp.WDuration2 = "";
      }
    }
    if ("WDesc2" in fieldValues) {
      if (values.WCompany2 === "" && fieldValues.WDesc2 !== "") {
        temp.WDesc2 = "Enter Company 2 Name First";
      } else if (values.WCompany2 !== "" && fieldValues.WDesc2 === "") {
        temp.WDesc2 = textValidator(fieldValues.WDesc2);
      } else {
        temp.WDesc2 = "";
      }
    }

    // Validation for Work Experience 3
    if ("WCompany3" in fieldValues) {
      if (fieldValues.WCompany3 !== "") {
        temp.WCompany3 = textValidator(fieldValues.WCompany3);
      } else {
        temp.WPosition3 = "";
        temp.WDuration3 = "";
        temp.WDesc3 = "";
      }
    }
    if ("WPosition3" in fieldValues) {
      if (values.WCompany3 === "" && fieldValues.WPosition3 !== "") {
        temp.WPosition3 = "Enter Company 3 Name First";
      } else if (values.WCompany3 !== "" && fieldValues.WPosition3 === "") {
        temp.WPosition3 = textValidator(fieldValues.WPosition3);
      } else {
        temp.WPosition3 = "";
      }
    }
    if ("WDuration3" in fieldValues) {
      if (values.WCompany3 === "" && fieldValues.WDuration3 !== "") {
        temp.WDuration3 = "Enter Company 3 Name First";
      } else if (values.WCompany3 !== "" && fieldValues.WDuration3 === "") {
        temp.WDuration3 = textValidator(fieldValues.WDuration3);
      } else {
        temp.WDuration3 = "";
      }
    }
    if ("WDesc3" in fieldValues) {
      if (values.WCompany3 === "" && fieldValues.WDesc3 !== "") {
        temp.WDesc3 = "Enter Company 3 Name First";
      } else if (values.WCompany3 !== "" && fieldValues.WDesc3 === "") {
        temp.WDesc3 = textValidator(fieldValues.WDesc3);
      } else {
        temp.WDesc3 = "";
      }
    }
    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
    initialFValues,
    true,
    validate
  );
  //   boxShadow: "-3px 3px 3px rgba(0, 0, 0, 0.4)",
  //   textTransform: "none",
  //   fontSize: 20,
  //   fontFamily: "Merriweather",
  //   padding: "8px 24px",
  //   border: "1px solid rgba(54, 110, 137, 0.8)",
  //   lineHeight: 1.5,
  //   background: "rgba(34, 72, 91, 0.8)",
  //   borderRadius: "4px",
  //   backdropFilter: "blur(5px)",
  //   "&:hover": {
  //     background: "rgba(74, 148, 185, 0.8)",
  //     border: "1px solid rgba(255, 255, 255, 0.3)",
  //     boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
  //   },
  //   "&:active": {
  //     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
  //     background: "rgba(164, 225, 255, 0.55)",
  //     border: "1px solid rgba(255, 255, 255, 0.3)",
  //   },
  //   "&:focus": {
  //     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
  //   },
  // });

  return (
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
            <DarkGlassInput
              label="Company"
              name="WCompany1"
              value={values.WCompany1}
              error={errors.WCompany1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Position Held"
              name="WPosition1"
              value={values.WPosition1}
              error={errors.WPosition1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Duration"
              name="WDuration1"
              value={values.WDuration1}
              error={errors.WDuration1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={8}>
            <DarkGlassInput
              label="Work Description"
              name="WDesc1"
              value={values.WDesc1}
              error={errors.WDesc1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <input
              type="file"
              name="WorkEx1"
              onChange={(e) => props.handleUpload(e.target.files[0], "WorkEx1")}
              style={{
                height: "100%",
                fontSize: "16px",
                fontFamily: "Merriweather",
              }}
            ></input>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
              Work Experience 2
            </h4>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Company"
              name="WCompany2"
              value={values.WCompany2}
              error={errors.WCompany2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Position Held"
              name="WPosition2"
              value={values.WPosition2}
              error={errors.WPosition2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Duration"
              name="WDuration2"
              value={values.WDuration2}
              error={errors.WDuration2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={8}>
            <DarkGlassInput
              label="Work Description"
              name="WDesc2"
              value={values.WDesc2}
              error={errors.WDesc2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <input
              type="file"
              name="WorkEx2"
              onChange={(e) => props.handleUpload(e.target.files[0], "WorkEx2")}
              style={{
                height: "100%",
                fontSize: "16px",
                fontFamily: "Merriweather",
              }}
            ></input>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>
              Work Experience 3
            </h4>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Company"
              name="WCompany3"
              value={values.WCompany3}
              error={errors.WCompany3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Position Held"
              name="WPosition3"
              value={values.WPosition3}
              error={errors.WPosition3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <DarkGlassInput
              label="Duration"
              name="WDuration3"
              value={values.WDuration3}
              error={errors.WDuration3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={8}>
            <DarkGlassInput
              label="Work Description"
              name="WDesc3"
              value={values.WDesc3}
              error={errors.WDesc3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={4}>
            <input
              type="file"
              name="WorkEx3"
              onChange={(e) => props.handleUpload(e.target.files[0], "WorkEx3")}
              style={{
                height: "100%",
                fontSize: "16px",
                fontFamily: "Merriweather",
              }}
            ></input>
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
            name="Next"
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
  );
};

export default VerifyExperiences;
