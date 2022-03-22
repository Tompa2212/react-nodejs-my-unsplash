import React, { useEffect, useState } from "react";
import { Gallery } from ".";
import { useImages } from "../context/images";
import { useDebounce } from "../hooks/useDebounce";

const determineNumOfColumns = (width) => {
  if (width > 900) {
    return 3;
  }
  if (width > 500 && width < 900) {
    return 2;
  }

  return 1;
};

export default function Main() {
  const { images } = useImages();
  const [numOfColumns, setNumOfColumns] = useState(
    determineNumOfColumns(window.innerWidth)
  );

  const debouncedResizeEvent = useDebounce(() => {
    setNumOfColumns(determineNumOfColumns(window.innerWidth));
  }, 300);

  useEffect(() => {
    const resizeEvent = window.addEventListener("resize", debouncedResizeEvent);

    return () => document.removeEventListener("resize", resizeEvent);
  }, [debouncedResizeEvent]);

  return (
    <main>
      {images.map((imageBlock, index) => {
        return (
          <Gallery
            images={imageBlock}
            numOfColumns={numOfColumns}
            key={index}
          />
        );
      })}
    </main>
  );
}
