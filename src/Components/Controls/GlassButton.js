import React from "react";
import { Button } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";

const GlassButton = (props) => {
  return (
    <>
      <Button
        sx={{
          height: "100%",
          color: "white",
          boxShadow: "-3px 3px 3px rgba(0, 0, 0, 0.4)",
          textTransform: "none",
          fontSize: 16,
          fontFamily: "Merriweather",
          padding: "8px 24px",
          border: "1px solid #0b1d3b7f",
          lineHeight: 1.5,
          // background: "rgba(34, 72, 91, 0.8)",
          background: "#0b1d3baa",
          borderRadius: "4px",
          backdropFilter: "blur(5px)",
          "&:hover": {
            background: "rgba(74, 148, 185, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
          },
          "&:active": {
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
            background: "rgba(164, 225, 255, 0.55)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          },
          "&:focus": {
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
          },
        }}
        variant={props.variant}
        fullWidth={props.fullWidth}
        endIcon={props.endIcon}
        onClick={props.onClick}
        component={props.component}
        to={props.to}
      >
        {props.name}
      </Button>
    </>
  );
};

export default GlassButton;
