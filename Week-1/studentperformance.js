const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

const passedStudents = students.filter(student => student.marks >= 40);

const studentsWithGrades = students.map(student => ({
  ...student,
  grade:
    student.marks >= 90 ? "A" :
    student.marks >= 75 ? "B" :
    student.marks >= 60 ? "C" : "D"
}));

const averageMarks =
  students.reduce((sum, student) => sum + student.marks, 0) / students.length;

const studentWith92 = students.find(student => student.marks === 92);

const kiranIndex = students.findIndex(student => student.name === "Kiran");

console.log(passedStudents);
console.log(studentsWithGrades);
console.log(averageMarks);
console.log(studentWith92);
console.log(kiranIndex);
