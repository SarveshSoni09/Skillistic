import React, { useState } from "react";

import GlassButton from "../../Components/Controls/GlassButton";
import { useForm } from "../../Components/Controls/UseForm";

import { Grid } from "@mui/material";

const VerifySubmit = (props) => {
  const cost = props.personData.NumberOfVerifiers * 0.01;

  var initialFValues = {
    EthCost: cost,
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("EthCost" in fieldValues) {
      temp.EthCost = "";
    }
    setErrors({
      ...temp,
    });
  };

  const { values, errors, setErrors } = useForm(initialFValues, true, validate);

  return (
    <div className="skill-content">
      <h3>Payment</h3>
      <div className="skill-form" style={{ padding: "8px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h4 style={{ margin: "8px 0", fontWeight: "400" }}>Payment</h4>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            Ethereum Cost:
            {cost}
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
            onClick={() => {
              // Insert Payment submit here
              props.mergeData(values);
              props.setThisPage(false);
              props.setNewPage(true);
              props.completed(true);
            }}
            fullWidth
            name="Proceed to Pay"
          ></GlassButton>
        </div>
      </div>
    </div>
  );
};

export default VerifySubmit;
