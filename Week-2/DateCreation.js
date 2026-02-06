// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss

let Date1 = new Date()
console.log("Date is :", Date1)
console.log("Year is :", Date1.getFullYear())
let datestr = Date1.toString()
month=""
for(let i=4;i<7;i++)
{
    month=month+datestr[i]
}
console.log("Month is :", month)
console.log("Date is :", Date1.getDate())
console.log("Day of week is :", Date1.getDay())
console.log("Time is :", Date1.getHours(), Date1.getMinutes(), Date1.getSeconds())

console.log( Date1.getDay(),"-",Date1.getMonth(),"-",Date1.getFullYear()," ",Date1.getHours(),"-",Date1.getMinutes(),"-",Date1.getSeconds())