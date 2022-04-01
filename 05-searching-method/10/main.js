let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterRange(arr, a, b) {
  return arr.filter((el) => el > a && el < b);
}
filterRange(input, 3, 6);
