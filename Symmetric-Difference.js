function sym() {
  var argsArr = Array.from(arguments);
  var symDifArr;
  // Loop through each arg
  for (var index = 0; index < argsArr.length; index++) {
    // Filter out duplicate values by only returning first value
    argsArr[index] = filterDups(argsArr[index]);
  }
  // Get symmetric difference for first 2 arguments
  symDifArr = dif(argsArr[0], argsArr[1]);
  // If there are more than 2
  if (argsArr.length > 2) {
    for (var i = 2; i < argsArr.length; i++) {
      // Get the symmetric difference between the new array and next argument
      symDifArr = dif(symDifArr, argsArr[i]);
    }
  }
  //// Functions
  // Filter dups
  function filterDups(arr) {
    return arr
      .filter((val, ind) => argsArr[index].indexOf(val) === ind);
  }
  // Dif of two arrays
  function dif(a1, a2) {
    return a1
      .filter(element => !a2.includes(element))
      .concat(
      a2.filter(element => !a1.includes(element))
      );
  }
  // Sort final array before returning
  symDifArr.sort();
  return symDifArr;
}
// Examples
sym([1, 2, 3], [5, 2, 1, 4]); // returns [3, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); // returns [1, 4, 5]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); // returns [1, 4, 5]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); // returns [2, 3, 4, 6, 7]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); // returns [1, 2, 4, 5, 6, 7, 8, 9]