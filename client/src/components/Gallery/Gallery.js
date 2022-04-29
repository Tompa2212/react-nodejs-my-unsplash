import React, { useMemo } from "react";
import styled from "styled-components";
import { ImageGalleryColumn } from "./ImageGalleryColumn";
export const Gallery = ({ images, numOfColumns }) => {
  const threeColumnImages = useMemo(() => {
    const numOfImages = images.length;
    const imagesPerColumn = Math.ceil(numOfImages / numOfColumns);

    const arr = Array.from({ length: numOfColumns }, (_, index) => {
      return images.slice(
        index * imagesPerColumn,
        index * imagesPerColumn + imagesPerColumn
      );
    });

    return arr;
  }, [images, numOfColumns]);

  if (!images.length) {
    return <h2>No images, for your search value...</h2>;
  }

  return (
    <Wrapper>
      {threeColumnImages.map((imageColumn, index) => (
        <ImageGalleryColumn key={index} images={imageColumn} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;

  @media screen and (min-width: 500px) {
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2rem;
  }

  @media screen and (min-width: 900px) {
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 2rem;
  }
`;
