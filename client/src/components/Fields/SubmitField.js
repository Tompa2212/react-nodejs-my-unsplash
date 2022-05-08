import React from "react";
import { useForm } from "uniforms";

const isModelEmpty = (model) => {
  if (Object.keys(model).length === 0) {
    return true;
  }

  if (Object.values(model).every((value) => value === undefined)) {
    return true;
  }

  return false;
};

export const SubmitField = ({ title, className }) => {
  const { error, changed, model } = useForm();

  const disabled = error || !changed;

  return (
    <button
      type="submit"
      className={className}
      disabled={disabled || isModelEmpty(model)}
    >
      {title}
    </button>
  );
};
