/*function biggestOfThree(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a + " is the biggest");
    } else if (b >= a && b >= c) {
        console.log(b + " is the biggest");
    } else {
        console.log(c + " is the biggest");
    }
}


let result = biggestOfThree(10, 25, 15);
console.log(result)*/



//function declaration
function findSum(a,b){
    return a+b
}

//function expression
let findSum=function(a,b){
    return a+b
}

//arrow function(simplify function expression)
let findSum2 = (a,b) => a+b
