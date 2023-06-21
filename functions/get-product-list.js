const cheerio = require('cheerio');
const config = require('../app.config');

const getProductList = (html) => {
  const selector = config.productListSelector;
  const $ = cheerio.load(html);
  const productList = $(selector);

  return productList;
};

module.exports = getProductList;
