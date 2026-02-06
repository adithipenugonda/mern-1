// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
//       let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid

let enrollmentDeadline = new Date("2026-01-20");
let Date1 = new Date()
if(Date1 > enrollmentDeadline)
{
    console.log("Enrollment closed")
}else{
    console.log("Enrollment Open")
}

let input = "2026-02-30"
let userDate = new Date(input)
if(isNaN(userDate.getTime())){
    console.log("Invalid date")
}else{
    console.log("Valid Date")
}
