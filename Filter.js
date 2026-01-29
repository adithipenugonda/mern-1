//write a func that can extract marks greater than 70 packed them into an array and return it
let marks = [70,89,90,99]
/*let result1 =  marks.filter(function(element){
    return element > 70
})
console.log(result1)*/

//let result2 =  marks.filter((element)=>element > 70)
//console.log(result2)

//find all marks b/w 30 and 90

/*let result3 = marks.filter((element)=>element >= 30 && element <= 90)
console.log(result3)*/


let salaries = [100, 200, 300];

/*for (let i in salaries) {
    salaries[i] += 50;
}*/


let result3 = salaries.map(function(element){
    return element+50
})
console.log(result3)