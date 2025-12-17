// Create a function that would seperate the even numbers from an array
// triple all the even numbers and return its sum

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfTripledEvens = arr
  .filter((num) => num % 2 === 0)
  .map((num) => num * 3)
  .reduce((num1, num2) => num1 + num2);
console.log(sumOfTripledEvens);
