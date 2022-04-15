import React from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { variables } from "../../styles/styled-variables";

export default function SearchInput({ value, onChange }) {
  return (
    <Wrapper className="d-flex">
      <label className="d-flex" htmlFor="search">
        <BiSearchAlt2 />
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by label"
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  justify-content: flex-start !important;
  gap: 1rem;

  border: 2px solid ${variables.$textColorLight};
  border-radius: 1.2rem;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
  padding: 0.7rem;
  width: 25rem;

  svg {
    fill: ${variables.$textColorLight};
    width: 2rem;
    height: 2rem;
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    color: ${variables.$textColor};
    font-weight: 500;
    font-family: inherit;
    font-size: 1.5rem;

    &::placeholder {
      color: ${variables.$textColorLight};
    }
  }
`;
