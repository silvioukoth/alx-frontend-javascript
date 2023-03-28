export default function updateStudentGradeByCity() {
  return arr
    .filter((student ) => student.location === city)
    .map(student => {
      let grade = newGrades.find(g => gstudent.Id === student.id);
      return {...student, grade: (grade && grade.grade) || 'N/A' };	
    });
}
