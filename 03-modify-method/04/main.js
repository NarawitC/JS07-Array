function first(arr, n) {
  if (n === undefined || n === 1) return arr[0];
  return arr.splice(0, n);
}
