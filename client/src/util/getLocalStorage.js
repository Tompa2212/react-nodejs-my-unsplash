export const getLocalStorage = (key, defaultValue) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || defaultValue;
  } catch (error) {
    return defaultValue;
  }
};
