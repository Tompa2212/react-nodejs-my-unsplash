import React from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { variables } from "../../styles/styled-variables";

export const SearchInput = ({ value, onChange }) => {
  return (
    <Wrapper>
      <label className="d-flex" style={{ display: "inline-flex" }} htmlFor="search">
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
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1rem;
  border: 2px solid ${variables.$textColorLight};
  border-radius: 1.2rem;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
  width: 100%;
  max-width: 35rem;
  padding: 0.7rem;
  transition: border 100ms;

  @media screen and (max-width: 680px) {
    flex: 1;
  }

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }

  &:focus-within {
    border: 2px solid ${variables.$textColor};

    & svg {
      fill: ${variables.$textColor};
    }
  }

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
    width: 100%;

    &::placeholder {
      color: ${variables.$textColorLight};
    }
  }
`;
