const sales = [{ price: 1000, discount: 0.1 }, { price: 500, discount: 0.05 }, { price: 100 }];

function create(arr) {
  let result = [];
  for (el of arr) {
    let netPrice = 0;
    netPrice = el.price;
    // console.log(el[index])
    if (el.discount) {
      netPrice *= 1 - el.discount;
    }
    result[result.length] = { netPrice: netPrice };
  }
  return result;
}

let summary = create(sales);
summary;
