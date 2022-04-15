import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { base_url } from "../request_urls";
import { TextInput } from ".";
import { useAuth } from "../context/auth";

const initialState = {
  img_desc: "",
  img_url: "",
};

export default function UploadForm({ setIsModalOpen }) {
  const [formData, setFormData] = useState(initialState);
  const {
    user: {
      token,
      user: { id },
    },
  } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { img_desc, img_url } = formData;

    if (!img_desc || !img_url) {
      return;
    }

    const resp = await axios.post(base_url, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  return (
    <Wrapper>
      <h3>Add a new photo</h3>
      <form onSubmit={handleSubmit}>
        <figure className="form-control">
          <TextInput
            name="img_desc"
            id="img_desc"
            placeholder="Image description"
            label="Label"
            value={formData["img_desc"]}
            onChange={handleChange}
          />
        </figure>
        <figure className="form-control">
          <TextInput
            name="img_url"
            id="img_urlurl"
            placeholder="https://images.unsplash.com/photo-1571035330093-fd..."
            label="Photo URL"
            value={formData["img_url"]}
            onChange={handleChange}
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
