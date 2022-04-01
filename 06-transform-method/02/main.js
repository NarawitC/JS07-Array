function dashJoin(str) {
  let result = str.split('-');
  // console.log(result)
  result.push(result[1][0].toUpperCase() + result[1].slice(1));

  result.splice(1, 1);
  return result.join('');
}

dashJoin('background-color');
