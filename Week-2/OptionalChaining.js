let student = {
   rollno : 1,
   name : "adithi"
}
console.log(student.rollno);
console.log(student.city) //undefined
console.log(student.city?.length) //undefined
console.log(student.city?.length??"property not exists") //prints the value 
 // ?? -> nullish coalescing
