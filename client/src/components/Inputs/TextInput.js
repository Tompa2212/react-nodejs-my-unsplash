import React from "react";
import styled from "styled-components";

export default function TextInput({
  id,
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type || "text"}
        autoComplete={type === "password" ? "new-password" : "off"}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 1.2rem;
`;
