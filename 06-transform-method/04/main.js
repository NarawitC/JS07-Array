const arr = [-3, 2, 0, -7, 4, 6];

arr.sort((a, b) => {
  if (Number(a) ** 2 < Number(b) ** 2) return -1;
  return 1;
});
