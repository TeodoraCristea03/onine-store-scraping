const cheerio = require("cheerio");
const getHtml = require('./get-html');

const getLastPageIndex = async (firstPageUrl) => {
  const html = await getHtml(firstPageUrl);
  const $ = cheerio.load(html);

  const lastPageLinkSelector = ".pagination > .top-text";
  const lastPageLink = $(lastPageLinkSelector).html();

  return Number(lastPageLink.split("din <!-- -->")[1]);
};

module.exports = getLastPageIndex;
