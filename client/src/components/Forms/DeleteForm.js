import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../context/auth";

export const DeleteForm = ({ setIsModalOpen, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const {
    user: {
      user: { username },
    },
  } = useAuth();

  return (
    <Wrapper>
      <h3>Are you sure?</h3>

      <div className="form-control">
        <label className="form-label">
          Please type <strong>{username}</strong> to confirm.
        </label>
        <Input
          name="username"
          autocomplete="new-password"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="btns">
        <button
          type="reset"
          className="btn btn--cancel"
          style={{ marginRight: "1rem" }}
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          typ="submit"
          className="btn btn--red"
          disabled={username !== inputValue}
          onClick={onSubmit}
        >
          Delete
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    margin-bottom: 2rem;
  }

  .btns {
    text-align: right;

    button {
      display: inline-block;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 1.2rem;
`;
