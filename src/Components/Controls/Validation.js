//TO Validate Text Inputs
export const textValidator = (value, limit = 100) => {
  if (!value) return "This Field is Required";
  else if (value.length > limit) return "Character Limit " + limit.toString();
  else return "";
};
