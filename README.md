# darkside-toolkit

A hook-free Claude Code plugin: **51 skills** and **29 agents**, curated from [ECC](https://github.com/affaan-m/ecc) (MIT) for Android/Kotlin/Compose, Flutter, React/Next/Vite, Python, TDD, code review, security and git/CI work.

> **Status: experimental.** The selection was made by name and stack fit and has not been battle-tested yet.

## Why it exists
It is meant to sit **beside** [context-mode](https://github.com/mksglu/context-mode), not replace it. It ships **no hooks, no commands and no MCP servers**, so it cannot intercept tool calls, touch compaction, or compete with context-mode's sandbox, index and session memory. Nothing here saves context; it only adds working discipline.

## What is inside
- `skills/` — Kotlin, Compose, Android architecture, Flutter/Dart, React, Next.js, Vite, Python, API/backend, TDD, E2E, verification, security review/scan, git/GitHub, Docker, deployment, migrations, design and motion, research and codebase onboarding.
- `agents/` — planner, architect, code/Kotlin/Flutter/React/TypeScript/Python reviewers, build-error resolvers, tdd-guide, security reviewer, refactor-cleaner, docs helpers, and more.

Some skills mention helper scripts or paths from the original ECC project; those are not shipped here.

## Install
```text
/plugin marketplace add junksidetm/darkside-toolkit
/plugin install darkside-toolkit@darkside-toolkit
```
Then restart Claude Code. Install context-mode separately.

## Source mirrors
| Platform | Role | URL |
|---|---|---|
| GitHub | Main | https://github.com/junksidetm/darkside-toolkit |
| GitLab | Mirror | https://gitlab.com/mrdarksidetm/darkside-toolkit |
| Codeberg | Mirror | https://codeberg.org/mrdarksidetm/darkside-toolkit |

## License
MIT. Upstream content (c) 2026 Affaan Mustafa. See `LICENSE` and `NOTICE.md`.
