const institutions = require("./data/institutions.json");

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