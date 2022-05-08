import React, { useState, useEffect } from "react";
import unsplash_logo from "../../images/unsplash_logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import { useImages } from "../../context/images";
import { SearchInput } from "../Fields";

export const NavHeader = ({ setNavOpened }) => {
  const [searchValue, setSearchValue] = useState("");
  const { dispatch } = useImages();
  const debouncedValue = useDebouncedValue(searchValue, 300);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue.length >= 3 || debouncedValue.length === 0) {
      dispatch({ type: "SEARCH_IMAGES", payload: debouncedValue });
    }
  }, [debouncedValue, dispatch]);
  return (
    <div className="nav-header">
      <div>
        <img src={unsplash_logo} alt="unsplash logo" />
        <AiOutlineMenu
          className="nav-toggle"
          onClick={() => setNavOpened((prev) => !prev)}
        />
      </div>
      <SearchInput value={searchValue} onChange={handleChange} />
    </div>
  );
};
