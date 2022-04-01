function checkEmptyObj(obj) {
  let result = true;
  Object.keys(obj).forEach((el) => (result = false));
  return result;
}
let a = {};
checkEmptyObj(a);
