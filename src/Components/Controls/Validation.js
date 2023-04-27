//TO Validate Text Inputs
export const textValidator = (value, limit = 100) => {
  if (!value) return "This Field is Required";
  else if (value.length > limit) return "Character Limit " + limit.toString();
  else return "";
};

export const scoreValidator = (value) => {
  if (value === "" || value === null) {
    return "Input must be Number between 0-20";
  } else if (isNaN(value)) {
    return "Input must be Number between 0-20";
  } else if (parseFloat(value) < 0.0) {
    return "Input must be +ve Number between 0-20";
  } else if (parseFloat(value) > 20.0) {
    return "Should not exceed 20";
  } else return "";
};
