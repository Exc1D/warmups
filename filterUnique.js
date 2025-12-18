// Create a function unique(arr)
// that should return an array with unique items of arr.

function unique(arr) {
  const uniqueArr = []; // Accumulator

  for (let str of arr) {
    // Ask if str is NOT included in uniqueArr
    if (!uniqueArr.includes(str)) {
      // If true, push to the accumulator
      uniqueArr.push(str);
    }
  }

  return uniqueArr;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O
