export const createList = (text) => {
  const colorData = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "violet",
    "cyan",
    "pink",
    "greenyello",
    "golden",
  ];
  const index = Math.floor(Math.random() * 10);
  const id = Math.ceil(Math.random() * 1000000);
  return { text, color: colorData[index], id };
};
