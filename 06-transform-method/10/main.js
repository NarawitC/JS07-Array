let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

const obj = {};
names.map((el) => {
  if (el in obj) {
    obj[el] = obj[el] + 1;
  } else {
    obj[el] = 1;
  }
});

obj;
