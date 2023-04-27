import React, { useState } from "react";

export function useForm(initialFValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  const handleIPDChange = (event, type) => {
    const value = event.target.innerHTML;
    if (type === "SkillName") {
      setValues({
        ...values,
        SkillName: value,
      });
      if (validateOnChange) validate({ SkillName: value });
    }
    if (type === "NumberOfVerifiers") {
      setValues({
        ...values,
        NumberOfVerifiers: value,
      });
      if (validateOnChange) validate({ NumberOfVerifiers: value });
    }
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    handleIPDChange,
    resetForm,
  };
}

export function Form(props) {
  const { children, ...other } = props;
  return (
    <form autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
