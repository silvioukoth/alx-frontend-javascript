export default function getStudentIdsSum() {
  return arr.reduce((acc, student) => acc + student.id, 0);
}
