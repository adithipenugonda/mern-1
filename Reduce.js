let marks = [99,79,100,88]
/*let small = marks.reduce((acc,ele) =>acc<ele ? acc : ele)
console.log(small)*/

function findSmallestMark(marks) {
  let smallest = Infinity;

  for (let value of marks) {
    if (value < smallest) {
      smallest = value;
    }
  }

  console.log(smallest);
}
findSmallestMark(marks)


