// A getStudentIdsSum function returns the sum of all the student ids.
export default function getStudentIdsSum(objArray) {
  if (!Array.isArray(objArray)) {
    return [];
  }
  const addIds = objArray.reduce(((counter, objArray) => counter + objArray.id), 0);
  return addIds;
}
