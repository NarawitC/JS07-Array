function squareArr(arr) {
  let result = [];
  for (el of arr) {
    result[result.length] = el ** 2;
  }
  return result;
}
const arr = [2, 3, 5, 7, 11];
squareArr(arr);
