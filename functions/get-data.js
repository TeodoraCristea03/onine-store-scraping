const parseProduct = require("./parse-product");

function getData(productList) {
  const productArray = Array.from(productList)
  const data = productArray.map(parseProduct);

  return data;
}

module.exports = getData;
