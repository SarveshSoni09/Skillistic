import React from "react";
import { useForm } from "../../Components/Controls/UseForm";

import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";

import { textValidator } from "../../Components/Controls/Validation";
import { Grid } from "@mui/material";

const VerifyEducation = (props) => {
  var initialFValues = {
    // Education Degree 1 variables
    Degree1Name: "",
    DSpecialization1: "",
    DUniversity1: "",
    // Education Degree 2 variables
    Degree2Name: "",
    DSpecialization2: "",
    DUniversity2: "",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for Education Degree 1
    if ("Degree1Name" in fieldValues) {
      temp.Degree1Name = textValidator(fieldValues.Degree1Name);
    }
    if ("DSpecialization1" in fieldValues) {
      temp.DSpecialization1 = textValidator(fieldValues.DSpecialization1);
    }
    if ("DUniversity1" in fieldValues) {
      temp.DUniversity1 = textValidator(fieldValues.DUniversity1);
    }

    // Validation for Education Degree 2
    if ("Degree2Name" in fieldValues) {
      if (fieldValues.Degree2Name !== "") {
        temp.Degree2Name = textValidator(fieldValues.Degree2Name);
      }
    }
    if ("DSpecialization2" in fieldValues) {
      if (values.Degree2Name === "" && fieldValues.DSpecialization2 !== "") {
        temp.DSpecialization2 = "Enter Degree 2 Name First";
      } else if (
        values.Degree2Name !== "" &&
        fieldValues.DSpecialization2 === ""
      ) {
        temp.DSpecialization2 = textValidator(fieldValues.DSpecialization2);
      } else {
        temp.DSpecialization2 = "";
      }
    }
    if ("DUniversity2" in fieldValues) {
      if (values.Degree2Name === "" && fieldValues.DUniversity2 !== "") {
        temp.DUniversity2 = "Enter Degree 2 Name First";
      } else if (values.Degree2Name !== "" && fieldValues.DUniversity2 === "") {
        temp.DUniversity2 = textValidator(fieldValues.DUniversity2);
      } else {
        temp.DUniversity2 = "";
      }
    }

    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleInputChange } = useForm(
    initialFValues,
    true,
    validate
  );

  return (
    <div className="skill-content">
      <h3>Education Details</h3>
      <div className="skill-form" style={{ padding: "8px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>Degree 1</h4>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              required={true}
              label="Degree Name"
              name="Degree1Name"
              onChange={handleInputChange}
              value={values.Degree1Name}
              error={errors.Degree1Name}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              required={true}
              label="Specialization Field"
              name="DSpecialization1"
              onChange={handleInputChange}
              value={values.DSpecialization1}
              error={errors.DSpecialization1}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              required={true}
              label="College/University"
              name="DUniversity1"
              onChange={handleInputChange}
              value={values.DUniversity1}
              error={errors.DUniversity1}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <input
              type="file"
              name="Deg1"
              onChange={(e) =>
                props.handleUpload(e.target.files[0], "Degree1.pdf")
              }
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
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>Degree 2</h4>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Degree Name"
              name="Degree2Name"
              onChange={handleInputChange}
              value={values.Degree2Name}
              error={errors.Degree2Name}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Specialization Field"
              name="DSpecialization2"
              onChange={handleInputChange}
              value={values.DSpecialization2}
              error={errors.DSpecialization2}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="College/University"
              name="DUniversity2"
              onChange={handleInputChange}
              value={values.DUniversity2}
              error={errors.DUniversity2}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <input
              type="file"
              name="Deg2"
              onChange={(e) => props.handleUpload(e.target.files[0], "Degree2")}
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

export default VerifyEducation;
