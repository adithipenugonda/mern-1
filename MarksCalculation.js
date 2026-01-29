//write a function that receives marks array as argument and returns small element

function smallestMark(marks){
    let min = marks[0];
    for(let i of marks){
        if(i < min){
            min = i;
        }
    }
    return min;
}
let marks = [90,87,89,67,56];
console.log(smallestMark(marks));

