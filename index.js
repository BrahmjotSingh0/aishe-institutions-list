const path = require("path");
const fs = require("fs");

const dataPath = path.join(__dirname, "data", "institutions.json");
let institutions = [];

try {
  const rawData = fs.readFileSync(dataPath, "utf-8");
  institutions = JSON.parse(rawData);
} catch (err) {
  console.error("❌ Failed to load institutions.json:", err.message);
}

/**
 * Normalize text for search comparison
 */
function normalize(text) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

/**
 * Search institutions by name
 * @param {string} query - Partial or full name
 * @param {number} limit - Max number of results (default: 10)
 * @returns {Array} - Matching institution objects
 */
function search(query, limit = 10) {
  if (!query) return [];

  const q = normalize(query);

  return institutions
    .filter((item) => normalize(item.name).includes(q))
    .slice(0, limit);
}

module.exports = {
  search,
  institutions, // export full list if needed
};
