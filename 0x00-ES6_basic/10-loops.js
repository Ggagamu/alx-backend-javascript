export default function appendToEachArrayValue(array, appendString) {
  const arryEnd = [];
  for (const idx of array) {
    arryEnd.push(`${appendString}${idx}`);
  }

  return arryEnd;
}
