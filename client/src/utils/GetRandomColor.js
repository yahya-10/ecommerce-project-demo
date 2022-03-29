/**
 *
 * Create a random color and returns it in a hex code
 */

export const getRondomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
