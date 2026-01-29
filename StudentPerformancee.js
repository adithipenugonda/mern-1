//Student Performance Dashboard
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed (marks ≥ 40)
let result1 = students.filter(students =>  students.marks >= 40)
console.log(result1)

/* 2. map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D */
let result2 = students.map()