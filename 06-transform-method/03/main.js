const arr = [11, 17, 23, 13, 7, 19];

arr.sort((a, b) => {
  if (Number(a) < Number(b)) return -1;
  return 1;
});
