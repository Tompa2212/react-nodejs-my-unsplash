import React from "react";
import styled from "styled-components";
import { TextInput } from ".";

export default function DeleteForm({ setIsModalOpen }) {
  return (
    <Wrapper>
      <h3>Are you sure?</h3>
      <form>
        <figure className="form-control">
          <TextInput
            name="pass"
            id="pass"
            placeholder="Password"
            label="Password"
            type="password"
          />
        </figure>
        <div className="btns">
          <button
            type="reset"
            className="btn btn--cancel"
            style={{ marginRight: "1rem" }}
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button typ="submit" className="btn btn--red">
            Delete
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h3 {
    margin-bottom: 2rem;
  }

  .form-control {
    margin-bottom: 2rem;

    label {
      display: block;
      margin-bottom: 0.7rem;
    }
  }

  .btns {
    text-align: right;

    button {
      display: inline-block;
    }
  }
`;
