import React from "react";
import styled from "styled-components";
import { connectField } from "uniforms";

const TextInput = (props) => {
  const { error, authError, label, id } = props;

  const onChangeHandler = ({ target: { value } }) => {
    if (!props.onChange) {
      return;
    }

    if ((typeof value === "string" && value.trim() === "") || value === null) {
      props.onChange(undefined);
      return;
    }

    props.onChange(value);
  };

  const componentProps = {
    ...props,
    id,
    error,
    label,
    value: props.value || "",
    onChange: onChangeHandler,
  };

  const getError = () => {
    if (error) {
      return <span className="form-error">{error.message}</span>;
    }

    if (authError) {
      return <span className="form-error">{authError.message}</span>;
    }
  };

  return (
    <div className="form-control">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <Input
        {...componentProps}
        autoComplete={props.type === "password" ? "new-password" : "off"}
      />
      {getError()}
    </div>
  );
};

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 1.2rem;
`;

export default connectField(TextInput, { initialValue: true });
