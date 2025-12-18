// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

// Write a function filterRangeInPlace(arr, a, b)
// that gets an array arr and
// removes from it all values
// except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b) {
  let i = arr.length - 1;
  while (i >= 0) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
    }

    i--;
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr); // [3, 1]
