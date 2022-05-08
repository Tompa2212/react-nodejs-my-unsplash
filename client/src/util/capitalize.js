export const capitalize = (text) => {
  if (!text || typeof text !== "string") {
    return;
  }

  return text.slice(0, 1).toUpperCase() + text.slice(1);
};
