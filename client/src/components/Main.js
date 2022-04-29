import React, { useEffect, useState } from "react";
import { Gallery } from "./Gallery/Gallery";
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
  const { images, images_loading } = useImages();
  const [numOfColumns, setNumOfColumns] = useState(() =>
    determineNumOfColumns(window.innerWidth)
  );

  const debouncedResizeEvent = useDebounce(() => {
    setNumOfColumns(determineNumOfColumns(window.innerWidth));
  }, 300);

  useEffect(() => {
    const resizeEvent = window.addEventListener("resize", debouncedResizeEvent);

    return () => window.removeEventListener("resize", resizeEvent);
  }, [debouncedResizeEvent]);

  if (images_loading) {
    return (
      <h2 className="text-center" style={{ fontSize: "3rem", marginTop: "2rem" }}>
        Loading...
      </h2>
    );
  }

  return (
    <main>
      {images.map((imageBlock, index) => {
        return (
          <Gallery images={imageBlock} numOfColumns={numOfColumns} key={index} />
        );
      })}
    </main>
  );
}
