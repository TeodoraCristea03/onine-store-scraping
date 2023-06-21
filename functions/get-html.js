const axios = require("axios");

const getHtml = async (url) => {
  const response = await axios.get(url);
  const html = response.data;
  return html;
};

module.exports = getHtml;
