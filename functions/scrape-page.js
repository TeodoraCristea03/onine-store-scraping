const getHtml = require('./get-html');
const getProductList = require('./get-product-list');
const getData = require('./get-data');

const scrapePage = async (pageUrl) => {
  const html = await getHtml(pageUrl);
  const productList = getProductList(html);
  
  const data = getData(productList);

  return data;
};

module.exports = scrapePage