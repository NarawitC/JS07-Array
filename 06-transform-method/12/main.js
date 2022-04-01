let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];
// expected result: [0, 1, 2, 3, 4, 5]

let a = [];
flattened.map((el) => {
  return el.forEach((e) => {
    a.push(e);
  });
});
a;
