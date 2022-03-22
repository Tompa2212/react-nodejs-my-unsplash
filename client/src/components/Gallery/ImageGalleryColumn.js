import React from "react";
import styled from "styled-components";
import { Image } from "..";

const ImageGalleryColumn = ({ images }) => {
  return (
    <Wrapper>
      {images.length &&
        images.map((image) => <Image key={image._id} image={image} />)}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  align-self: start;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 2rem;
`;

export default ImageGalleryColumn;
