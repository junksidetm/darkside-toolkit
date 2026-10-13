# Version History — darkside-toolkit

## Libraries & Tools
- Upstream: ECC (affaan-m/ecc) 2.2.3, MIT
- Companion (not bundled): context-mode 1.0.169

## Log Entries

### [2026-10-13 04:43:46 IST] - v0.1.0 Initial curated release
- **Action**: Created hook-free plugin from a curated subset of ECC 2.2.3 so it coexists with context-mode.
- **Contents**: 51 skills, 29 agents, plugin and marketplace manifests, LICENSE (MIT), NOTICE.md, README.md, CI validation for GitHub, GitLab and Codeberg.
- **Excluded on purpose**: all hooks, command shims, MCP config, and skills/agents that overlap context-mode (context, compaction, memory, learning) or are off-stack.
- **Status**: 90% (untested in live sessions; tri-platform push pending)

### [2026-10-13 05:11:27 IST] - v0.1.1 Fix CI YAML parse failure
- **Action**: Moved the inline `node -e` validation into `scripts/validate.js` and pointed all three CI configs at it. The unquoted one-liner contained `: ` ("missing SKILL.md: "), which YAML parsed as a mapping, so GitHub rejected the workflow and GitLab built no jobs.
- **Files**: scripts/validate.js (new), .github/workflows/validate.yml, .forgejo/workflows/validate.yml, .gitlab-ci.yml, Version.md
- **Status**: 90% (GitLab CI lint API valid; script passes locally: 51 skills, 29 agents; CI re-run pending)
