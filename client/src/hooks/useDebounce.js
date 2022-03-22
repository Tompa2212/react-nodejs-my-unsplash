import { useLayoutEffect, useMemo, useRef } from "react";

export const useDebounce = (callback, delay) => {
  const callbackRef = useRef();

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay]
  );
};

const debounce = (fn, delay) => {
  let timer;

  return (...args) => {
    const context = this;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.call(context, ...args);
    }, delay);
  };
};
