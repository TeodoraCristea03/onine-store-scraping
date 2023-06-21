const cheerio = require("cheerio");
const {
  productNameSelector,
  productPriceSelector,
  reducedPriceSelector,
  productIdSelector,
  productIdAttribute,
} = require("../app.config");
const getPrices = require("./get-prices");

const parseProduct = (product) => {
  const $ = cheerio.load(product);

  const productName = $(productNameSelector).text().trim();
  const productPrice = getPrices($(productPriceSelector).text(),$(reducedPriceSelector).html())[0];
  const reducedPrice = getPrices($(productPriceSelector).text(),$(reducedPriceSelector).html())[1];
  const productId = $(productIdSelector).attr(productIdAttribute);

  return {
    name: productName,
    price: productPrice,
    price_reduced: reducedPrice,
    created_at: new Date(),
    productId
  };
};

module.exports = parseProduct;
