let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)

function copySorted(arr) {
  let result = arr.slice();
  result.sort((a, b) => {
    if (a < b) return -1;
    return 1;
  });
  return result;
}
