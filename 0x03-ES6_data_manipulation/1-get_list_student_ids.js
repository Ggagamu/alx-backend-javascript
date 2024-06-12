// A getListStudentIds function returns an array of ids from a list of objects.
export default function getListStudentIds(objArray) {
  if (!Array.arrayIds(objArray)) {
    return [];
  }
  const arrayIds = objArray.map((item) => item.id);
  return arrayIds;
}
