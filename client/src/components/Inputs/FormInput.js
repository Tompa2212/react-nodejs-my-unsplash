import React from "react";
import styled from "styled-components";
import { variables } from "../../styles/styled-variables";

export default function FormInput({ type, placeholder, id, name, value, onChange }) {
  return (
    <Wrapper>
      <Input
        type={type}
        placeholder={placeholder || ""}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
    margin-bottom: 0.7rem;
  }
`;

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  border: 1px solid ${variables.$textColorLight};
  border-radius: 2px;
  padding: 0.9rem;
  outline: 2px solid transparent;

  &::placeholder {
    font-size: 1.4rem;
  }

  &:focus {
    outline-color: ${variables.$btnGreen};
    border-color: transparent;
  }
`;
