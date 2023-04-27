import React from "react";
import { textValidator } from "../../Components/Controls/Validation";
import { useForm } from "../../Components/Controls/UseForm";

import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";
import { Grid } from "@mui/material";

const VerifyCourses = (props) => {
  var initialFValues = {
    // Course 1 variables
    Course1Name: "",
    CSpecialization1: "",
    CPlatform1: "",
    // Course 2 variables
    Course2Name: "",
    CSpecialization2: "",
    CPlatform2: "",
    // Course 3 variables
    Course3Name: "",
    CSpecialization3: "",
    CPlatform3: "",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // Validation for Course 1
    if ("Course1Name" in fieldValues) {
      if (fieldValues.Course1Name !== "") {
        temp.Course1Name = textValidator(fieldValues.Course1Name);
      } else {
        temp.CSpecialization1 = "";
        temp.CPlatform1 = "";
      }
    }
    if ("CSpecialization1" in fieldValues) {
      if (values.Course1Name === "" && fieldValues.CSpecialization1 !== "") {
        temp.CSpecialization1 = "Enter Course 1 Name First";
      } else if (
        values.Course1Name !== "" &&
        fieldValues.CSpecialization1 === ""
      ) {
        temp.CSpecialization1 = textValidator(fieldValues.CSpecialization1);
      } else {
        temp.CSpecialization1 = "";
      }
    }
    if ("CPlatform1" in fieldValues) {
      if (values.Course1Name === "" && fieldValues.CPlatform1 !== "") {
        temp.CPlatform1 = "Enter Course 1 Name First";
      } else if (values.Course1Name !== "" && fieldValues.CPlatform1 === "") {
        temp.CPlatform1 = textValidator(fieldValues.CPlatform1);
      } else {
        temp.CPlatform1 = "";
      }
    }

    // Validation for Course 2
    if ("Course2Name" in fieldValues) {
      if (fieldValues.Course2Name !== "") {
        temp.Course2Name = textValidator(fieldValues.Course2Name);
      }
    }
    if ("CSpecialization2" in fieldValues) {
      if (values.Course2Name === "" && fieldValues.CSpecialization2 !== "") {
        temp.CSpecialization2 = "Enter Course 2 Name First";
      } else if (
        values.Course2Name !== "" &&
        fieldValues.CSpecialization2 === ""
      ) {
        temp.CSpecialization2 = textValidator(fieldValues.CSpecialization2);
      }
    }
    if ("CPlatform2" in fieldValues) {
      if (values.Course2Name === "" && fieldValues.CPlatform2 !== "") {
        temp.CPlatform2 = "Enter Course 2 Name First";
      } else if (values.Course2Name !== "" && fieldValues.CPlatform2 === "") {
        temp.CPlatform2 = textValidator(fieldValues.CPlatform2);
      }
    }

    // Validation for Course 3
    if ("Course3Name" in fieldValues) {
      if (fieldValues.Course3Name !== "") {
        temp.Course3Name = textValidator(fieldValues.Course3Name);
      }
    }
    if ("CSpecialization3" in fieldValues) {
      if (values.Course3Name === "" && fieldValues.CSpecialization3 !== "") {
        temp.CSpecialization3 = "Enter Course 3 Name First";
      } else if (
        values.Course3Name !== "" &&
        fieldValues.CSpecialization3 === ""
      ) {
        temp.CSpecialization3 = textValidator(fieldValues.CSpecialization3);
      }
    }
    if ("CPlatform3" in fieldValues) {
      if (values.Course3Name === "" && fieldValues.CPlatform3 !== "") {
        temp.CPlatform3 = "Enter Course 3 Name First";
      } else if (values.Course3Name !== "" && fieldValues.CPlatform3 === "") {
        temp.CPlatform3 = textValidator(fieldValues.CPlatform3);
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

  return (
    <div className="skill-content">
      <h3>Courses Completed Details</h3>
      <div className="skill-form" style={{ padding: "8px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>Course 1</h4>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Course Name"
              name="Course1Name"
              value={values.Course1Name}
              error={errors.Course1Name}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Course Specialization"
              name="CSpecialization1"
              value={values.CSpecialization1}
              error={errors.CSpecialization1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Platform"
              name="CPlatform1"
              value={values.CPlatform1}
              error={errors.CPlatform1}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <input
              type="file"
              name="Course1"
              onChange={(e) => props.handleUpload(e.target.files[0], "Course1")}
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
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>Course 2</h4>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Course Name"
              name="Course2Name"
              value={values.Course2Name}
              error={errors.Course2Name}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Course Specialization"
              name="CSpecialization2"
              value={values.CSpecialization2}
              error={errors.CSpecialization2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Platform"
              name="CPlatform2"
              value={values.CPlatform2}
              error={errors.CPlatform2}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <input
              type="file"
              name="Course2"
              onChange={(e) => props.handleUpload(e.target.files[0], "Course2")}
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
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>Course 3</h4>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Course Name"
              name="Course3Name"
              value={values.Course3Name}
              error={errors.Course3Name}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Course Specialization"
              name="CSpecialization3"
              value={values.CSpecialization3}
              error={errors.CSpecialization3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              label="Platform"
              name="CPlatform3"
              value={values.CPlatform3}
              error={errors.CPlatform3}
              onChange={handleInputChange}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <input
              type="file"
              name="Course3"
              onChange={(e) => props.handleUpload(e.target.files[0], "Course3")}
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

export default VerifyCourses;
