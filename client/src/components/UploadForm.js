import React from "react";
import styled from "styled-components";
import { TextInput } from ".";

export default function UploadForm({ setIsModalOpen }) {
  return (
    <Wrapper>
      <h3>Add a new photo</h3>
      <form>
        <figure className="form-control">
          <TextInput
            name="label"
            id="label"
            placeholder="Image description"
            label="Label"
          />
        </figure>
        <figure className="form-control">
          <TextInput
            name="photo_url"
            id="photo_url"
            placeholder="https://images.unsplash.com/photo-1571035330093-fd..."
            label="Photo URL"
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
          <button typ="submit" className="btn btn--green">
            Submit
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
