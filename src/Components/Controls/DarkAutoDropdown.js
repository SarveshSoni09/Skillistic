import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React from "react";

const DarkAutoDropdown = (props) => {
  return (
    <Autocomplete
      disablePortal
      id={props.id}
      options={props.options}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      disableClearable
      renderInput={(params) => (
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
          {...params}
          // value={props.value}
          // onChange={props.onChange}
          label={props.label}
          error={props.error}
          // name={props.name}
        />
      )}
    />
  );
};

export default DarkAutoDropdown;
