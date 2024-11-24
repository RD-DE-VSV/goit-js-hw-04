// Task 3: Filtering an Array of Numbers
function filterArray(numbers, value) {
  const resultArray = [];
  for (const number of numbers) {
    if (number > value) {
      resultArray.push(number);
    }
  }
  return resultArray;
}

// Test calls to check the output
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
