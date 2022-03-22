import { useEffect, useRef } from "react";

const useClickOutside = (itemRef, callback) => {
  const callbackRef = useRef();
  callbackRef.current = callback;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!itemRef?.current?.contains(e.target) && callbackRef.current) {
        callbackRef.current();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [itemRef, callbackRef]);
};

export default useClickOutside;
