export function getRandomColor(colors) {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
