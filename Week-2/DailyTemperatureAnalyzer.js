//Assignment 1: Daily Temperature Analyzer
//----------------------------------------


const temperatures = [32, 35, 28, 40, 38, 30, 42, 74];

//filter() temperatures above 35
let result1 = temperatures.filter(element => element > 30)
console.log(result1)

//map() to convert all temperatures from Celsius → Fahrenheit
let result2 = temperatures.map(element => (element+1.8)*32)
console.log(result2)

//reduce() to calculate average temperature
let result3 = temperatures.reduce((acc,ele) => acc+ele,0)/temperatures.length;
console.log(result3)

//find() first temperature above 40
let result4 = temperatures.find(element => element>40)
console.log(result4)

//findIndex() of temperature 28
let result5 = temperatures.findIndex(ele => ele ===28)
console.log(result5)