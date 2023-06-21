//pt site-ul dedeman selectorii de pret functioneaza astfel:
//daca produsul nu este redus, pretul se regaseste in clasa product-price
//daca produsul este redus, pretul vechi se gaseste in clasa old-price iar pretul redus in product-price

const normalizePrice = require("./normalize-price");

const getPrices = (productPriceDummy, reducedPriceDummy) => {

    if(!productPriceDummy){
      productPriceDummy = reducedPriceDummy;
      reducedPriceDummy = null;
    }
    
    const prices = [normalizePrice(productPriceDummy), normalizePrice(reducedPriceDummy)];

    return prices;
  };
  
  module.exports = getPrices;