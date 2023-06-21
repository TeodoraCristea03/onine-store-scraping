const saveData = require('./functions/save-data');
const { baseUrl } = require('./app.config');
const scrapeCategory = require('./functions/scrape-category');

const runTest = async () => {
  const data = await scrapeCategory(baseUrl);

  saveData(data);
}

runTest()