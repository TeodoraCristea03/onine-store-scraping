const normalizePrice = (priceStr) => {
  if (!priceStr) {
    return null;
  }
  const normalizedPrice = priceStr.replace(/[^0-9,.]/g, "");
  const numericalPrice = normalizedPrice.replace(",", ".");

  return Number(numericalPrice);
};

module.exports = normalizePrice;
