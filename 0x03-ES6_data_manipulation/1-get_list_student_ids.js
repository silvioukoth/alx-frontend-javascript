export default function getListStudentsIds() {
  if (!Array.isArray()) {
    return [];
  }
  return arr.map((student) => student.id);
}
