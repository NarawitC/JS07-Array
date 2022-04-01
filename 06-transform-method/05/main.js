const arr = [
  { name: 'John', age: 25 },
  { name: 'Leon', age: 26 },
  { name: 'Mick', age: 29 },
  { name: 'Pete', age: 30 },
  { name: 'Mary', age: 28 },
];

arr.sort((a, b) => {
  if (a.age < b.age) return -1;
  return 1;
});
