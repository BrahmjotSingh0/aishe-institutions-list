const path = require("path");
const fs = require("fs");

const dataPath = path.join(__dirname, "data", "institutions.json");

let institutions = [];
try {
  institutions = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
} catch (err) {
  console.error("❌ Failed to load institutions.json:", err);
}

function search(query, limit = 10) {
  if (!query) return [];
  const q = query.toLowerCase();
  return institutions
    .filter(inst =>
      inst.name.toLowerCase().includes(q) ||
      inst.state.toLowerCase().includes(q) ||
      inst.district?.toLowerCase().includes(q)
    )
    .slice(0, limit);
}

module.exports = { search };
