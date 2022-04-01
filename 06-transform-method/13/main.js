let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']

let result = [];
alphabets.filter((el) => {
  if (result.find((e) => e === el) === undefined) {
    result.push(el);
  }
});
result;
