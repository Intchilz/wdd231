export function suffleDataAndGetMax({ data, maxItems }) {
  const suffledData = data.sort(() => Math.random() - 0.5);
  return suffledData.slice(0, maxItems);
}
