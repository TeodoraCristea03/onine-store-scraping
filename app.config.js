/*
link-uri pentru testare diverse categorii:
https://www.dedeman.ro/ro/scaune-birou/c/496
https://www.dedeman.ro/ro/papetarie/c/3000
https://www.dedeman.ro/ro/textile-bucatarie/c/723
https://www.dedeman.ro/ro/scaune/c/94'
*/

const dedeman = {
  baseUrl: 'https://www.dedeman.ro/ro/textile-bucatarie/c/723',
  productListSelector: '.product-box',
  productNameSelector: '.product-name',
  productPriceSelector: '.old-price',
  reducedPriceSelector: '.product-price',
  productIdSelector: '.product-box',
  productIdAttribute: 'data-sku'
}

module.exports = dedeman;
