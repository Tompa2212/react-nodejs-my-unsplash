import React, { useMemo } from "react";
import styled from "styled-components";
import { ImageGalleryColumn } from "..";
export default function Gallery({ images, numOfColumns }) {
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

  return (
    <Wrapper>
      {threeColumnImages.map((imageColumn, index) => (
        <ImageGalleryColumn key={index} images={imageColumn} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
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
