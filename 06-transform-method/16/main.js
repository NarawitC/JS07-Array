const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

let obj = {};
const male = [];
const female = [];

persons.filter((el) => {
  if (el.sex == 'M') male.push(el.name);
});
persons.filter((el) => {
  if (el.sex == 'F') female.push(el.name);
});
obj.M = male;
obj.F = female;

obj;
