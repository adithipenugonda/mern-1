
//Assignment 2: Online Course Name Processor
//------------------------------------------


const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() courses with name length > 5
let result1 = courses.filter(ele => ele.length > 5)
console.log(result1)

// 2. map() to convert course names to uppercase
let result2 = courses.map(ele => ele.toUpperCase())
console.log(result2)

//4. find() the course "react"
let result4 = courses.find(ele => ele === "react")
console.log(result4)

//5.findIndex() of "node"
let result5 = courses.findIndex(ele => ele === "node")
console.log(result5)
