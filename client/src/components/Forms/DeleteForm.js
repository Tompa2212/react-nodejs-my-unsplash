import React from "react";
import styled from "styled-components";
import { AutoForm, AutoField } from "uniforms-unstyled";
import { bridge } from "../../schema/bridge";
import { deleteImageSchema } from "../../schema/deleteImageSchema";

const schema = bridge(deleteImageSchema);

export const DeleteForm = ({ setIsModalOpen }) => {
  return (
    <AutoForm schema={schema}>
      <Wrapper>
        <h3>Are you sure?</h3>
        <AutoField
          name="password"
          placeholder="Password"
          autocomplete="new-password"
        />
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
      </Wrapper>
    </AutoForm>
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
