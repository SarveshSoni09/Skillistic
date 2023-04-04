import React, { useState, useEffect } from "react";
import useScript from "../../Components/Hooks/useScript";
import { useForm } from "../../Components/Controls/UseForm";

import DarkGlassInput from "../../Components/Controls/DarkGlassInput";
import GlassButton from "../../Components/Controls/GlassButton";

import { textValidator } from "../../Components/Controls/Validation";

import { Grid } from "@mui/material";
// import UploadFileIcon from "@mui/icons-material/UploadFile";

const VerifyEducation = (props) => {
  // File Upload Code

  useScript("//freeimage.host/sdk/pup.js", "https://freeimage.host/upload");
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("File", selectedFile);

    fetch(
      "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    // if('Degree2Name' in fieldValues) {
    //   temp.Degree2Name = textValidator(fieldValues.Degree2Name)
    // }
    // if('DSpecialization2' in fieldValues) {
    //   temp.DSpecialization2 = textValidator(fieldValues.DSpecialization2)
    // }
    // if('DUniversity2' in fieldValues) {
    //   temp.DUniversity2 = textValidator(fieldValues.DUniversity2)
    // }

    setErrors({
      ...temp,
    });
  };

  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
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
              name="file"
              onChange={changeHandler}
              style={{
                height: "100%",
                fontSize: "16px",
                margin: "auto",
                fontFamily: "Merriweather",
              }}
            ></input>
          </Grid>

          {/* {isFilePicked ? (
                    <Grid item xs={3}>
                      <div style={{ fontSize: "10px" }}>
                        <p>Filename: {selectedFile.name}</p>
                        <p>Filetype: {selectedFile.type}</p>
                        <p>Size in bytes: {selectedFile.size}</p>
                        <p>
                          lastModifiedDate:{" "}
                          {selectedFile.lastModifiedDate.toLocaleDateString()}
                        </p>
                      </div>
                    </Grid>
                  ) : (
                    <Grid item xs={3}>
                      <p>Select a file to show details</p>
                    </Grid>
                  )} */}
          {/* <Grid item xs={3}>
                    <GlassButton
                      variant="contained"
                      sx={{ height: "100%" }}
                      endIcon={<UploadFileIcon />}
                      name="Upload Degree"
                      onClick={handleUpload}
                    ></GlassButton>
                  </Grid> */}
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>Degree 2</h4>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              required={true}
              label="Degree Name"
              name="Degree2Name"
              onChange={handleInputChange}
              value={values.Degree2Name}
              error={errors.Degree2Name}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              required={true}
              label="Specialization Field"
              name="DSpecialization2"
              onChange={handleInputChange}
              value={values.DSpecialization2}
              error={errors.DSpecialization2}
            ></DarkGlassInput>
          </Grid>
          <Grid item xs={6}>
            <DarkGlassInput
              required={true}
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
              name="file"
              onChange={changeHandler}
              style={{
                height: "100%",
                fontSize: "16px",
                margin: "auto",
                fontFamily: "Merriweather",
              }}
            ></input>
          </Grid>
          {/* <Grid item xs={6}>
                    <GlassButton
                      variant="contained"
                      sx={{ height: "100%" }}
                      endIcon={<UploadFileIcon />}
                      name="Upload Degree"
                    ></GlassButton>
                  </Grid> */}
        </Grid>
        <div
          style={{
            bottom: "8px",
            position: "absolute",
            width: "calc(100% - 16px)",
          }}
        >
          <GlassButton
            // component={Link}
            // to="/VerifyCourses"
            variant="contained"
            name="Next"
            onClick={() => {
              props.mergeData({ values });
              props.setThisPage(false);
              props.setNewPage(true);
              props.completed(true);
              console.log(props.personData);
              // console.log(values);
            }}
          ></GlassButton>
        </div>
      </div>
    </div>
  );
};

export default VerifyEducation;
