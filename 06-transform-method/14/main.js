const products = [
  { id: 1, name: 'Crystal' },
  { id: 4, name: 'Namthip' },
  { id: 5, name: 'Nestle' },
];
// { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };
const obj = {};
products.forEach((el) => {
  let num = el.id;
  obj[num] = { name: el.name };
});
obj;
