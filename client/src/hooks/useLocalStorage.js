import { useState, useEffect, useCallback } from "react";

export const useLocalStorage = (key, initialValue) => {
  const readValue = useCallback(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) || initialValue;
    } catch (error) {
      return initialValue;
    }
  }, [key, initialValue]);

  const [value, setValue] = useState(readValue());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
