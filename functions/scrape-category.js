const { getLastPageIndex, getPageUrl, scrapePage } = require('./index');

const scrapeCategory = async (url) => {

  const categoryName = (url.split("/ro/")[1]).split("/c")[0];
  
  console.log("scraping category:", categoryName);
  const lastPageIndex = await getLastPageIndex(url);

  const data = [];

  //pt site-ul dedeman numerotarea paginilor nu este zero-based, 
  //incepem for-ul de al 1 pentru a nu exista duplicate
  for (let i = 1; i <= lastPageIndex; i++) {
    const pageUrl = getPageUrl(url, i);
    const productsOnPage = await scrapePage(pageUrl);

    console.log("Robot on page", i, "of", lastPageIndex,"- got", productsOnPage.length, "products");

    data.push(...productsOnPage);
  }
 
  return data;
};

module.exports = scrapeCategory;
