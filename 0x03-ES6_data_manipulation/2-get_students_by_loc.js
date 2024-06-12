// A getStudentsByLocation returns an array of objects
// located in a specific city.
export default function getStudentsByLocation(objArray, city) {
  if (!Array.isArray(objArray)) {
    return [];
  }
  const locArray = objArray.filter((item) => item.location === city);
  return locArray;
}
