import React from "react";
import { TextField } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";

const DarkGlassInput = (props) => {
  return (
    <>
      <TextField
        sx={{
          "& .MuiInputBase-root": {
            background: "rgba(0, 0, 0, 0.2)",
            boxShadow: "inset -4px 4px 4px rgba(0, 0, 0, 0.4)",
            fontFamily: "Merriweather",
          },
          "& label.Mui-focused": {
            color: "rgba(255, 255, 255, 0.6)",
          },
          "& label.MuiInputLabel-root": {
            color: "rgba(250, 255, 255)",
            fontFamily: "Merriweather",
          },
          "& .MuiOutlinedInput-root": {
            color: "white",
            "& fieldset": {
              borderColor: "rgba(0, 0, 0, 0.2)",
              color: "rgba(255, 255, 255, 0.2)",
              fontFamily: "Merriweather",
            },
            "& label": {
              color: "white",
            },
            "&:hover fieldset": {
              borderColor: "rgba(0, 0, 0, 0.4)",
            },
            "&.Mui-focused fieldset": {
              border: "2px solid rgba(0, 0, 0, 0.4)",
            },
          },
        }}
        variant="outlined"
        label={props.label}
        fullWidth
        required={props.required}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        {...(props.error && { error: true })}
      />
      {props.error && (
        <FormHelperText sx={{ color: "#f44336", marginTop: "10px" }}>
          {props.error}
        </FormHelperText>
      )}
    </>
  );
};

export default DarkGlassInput;
