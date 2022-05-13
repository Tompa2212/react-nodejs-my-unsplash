import React from "react";
import styled from "styled-components";
import axios from "axios";
import { base_url } from "../../request_urls";
import { useAuth } from "../../context/auth";
import { bridge } from "../../schema/bridge";
import { uploadImageSchema } from "../../schema/uploadImageSchema";
import { AutoField, AutoForm } from "uniforms-unstyled";
import { useImages } from "../../context/images";

const schema = bridge(uploadImageSchema);

export const UploadForm = ({ setIsModalOpen }) => {
  const {
    user: { token },
  } = useAuth();
  const { triggerRefresh } = useImages();

  const handleSubmit = async (model) => {
    const resp = await axios.post(base_url, model, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (resp.status === 201) {
      alert("Image created");
      triggerRefresh({});
    }
  };

  return (
    <AutoForm
      schema={schema}
      validate="onChangeAfterSubmit"
      onSubmit={(model) => handleSubmit(model)}
    >
      <Wrapper>
        <h3>Add a new photo</h3>
        <AutoField
          name="img_desc"
          placeholder="Image description"
          label="Image description"
        />
        <AutoField
          name="img_url"
          placeholder="https://images.unsplash.com/photo-1571035330093-fd..."
          label="Photo URL"
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
          <button type="submit" className="btn btn--green">
            Submit
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
