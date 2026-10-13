const fs = require("fs");

for (const f of [".claude-plugin/plugin.json", ".claude-plugin/marketplace.json"]) {
  JSON.parse(fs.readFileSync(f, "utf8"));
}

const skills = fs.readdirSync("skills");
for (const d of skills) {
  if (!fs.existsSync("skills/" + d + "/SKILL.md")) {
    throw new Error("missing SKILL.md: " + d);
  }
}

console.log("OK", skills.length, "skills", fs.readdirSync("agents").length, "agents");
