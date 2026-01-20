//students
let students = [
    { sno : 1, name :"abc", age: 21},
    { sno : 2, name : "def", age: 20},
    { sno : 3, name : "ghi", age: 19},
    { sno : 4, name : "jkl", age: 18},
];

//find students age less than 20
/*let result = students.filter(studentObj => studentObj.age < 20)
console.log(result)
//increment age by 2 of "def"

let result1 = students.map(studentobj => {
    if(studentobj.name === "def"){
       return studentobj.age+2
    }
})
console.log(result1)*/

//find sum of ages of all students
let result2 = students.reduce((acc, ele) => acc+ele.age,0)
console.log(result2)

