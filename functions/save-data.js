const json2csv = require("json2csv");
const fs = require("fs");

const saveData = (data) =>
  fs.writeFileSync("output-dedeman.json", JSON.stringify(data, null, 3));

module.exports = saveData;
