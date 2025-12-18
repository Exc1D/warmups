// Write the function shuffle(array) that shuffles
// (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

function shuffle(array) {
  // Loop backwards and stop at 1
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.randow() * (i + 1));

    const shuff = arr[i];
    arr[i] = arr[j];
    arr[j] = shuff;
  }
  return array;
}
