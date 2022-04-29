import React from "react";
import styled from "styled-components";
import { Image } from "./Image";

export const ImageGalleryColumn = ({ images }) => {
  if (!images) {
    return null;
  }

  return (
    <Wrapper>
      {images.map((image) => (
        <Image key={image._id} image={image} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  align-self: start;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 2rem;
`;
