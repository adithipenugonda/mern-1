const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let total = 0;

for (let subject in marks) {
  total += marks[subject];
}
let count = Object.keys(marks).length;
let average = total / count;

let highestSubject = "";
let highestMarks = 0;

for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
marks.computer = 90;

console.log(marks);


console.log("Highest Scoring Subject:", highestSubject);
console.log("Marks:", highestMarks);

console.log("Average Marks:", average);


console.log("Total Marks:", total);

