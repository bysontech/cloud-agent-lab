# AGENTS.md (Cloud Agent Playbook)

## Purpose
This repo is a small lab to practice "agent-driven development":
- agent implements changes
- CI is the source of truth
- human reviews PRs

## Hard rules (must follow)
1. Do not modify secrets or production credentials (none should exist here).
2. Keep changes small and reviewable. Prefer multiple PRs over one large PR.
3. Always run tests (or ensure CI runs) before claiming completion.
4. No breaking changes without updating tests and docs.
5. Prefer clarity over cleverness.
6. Never push directly to `main`. All changes must go through Pull Requests. (main直push禁止)

## Definition of Done
A task is done only when:
- `npm test` passes locally or in CI
- CI checks are green
- changes are committed with a clear message
- (if applicable) docs/README updated

## Repo conventions
- Language: JavaScript / Node (initially)
- Tests live in `test/`
- Add new scripts via `package.json` `scripts`

## Change process
1. Create a new branch:
   - `chore/<short>`
   - `feat/<short>`
   - `fix/<short>`
2. Implement minimal change
3. Add/adjust tests
4. Ensure `npm test` passes
5. Open PR with:
   - What changed
   - Why
   - How to test (command)
   - Risks/notes

## Communication style
When you respond, include:
- Summary (1-3 bullets)
- Files changed
- How to verify (commands)
- Any tradeoffs / assumptions

---

## Standard Agent Task Instruction (for humans / 日本語)

以下は、本リポジトリでAIエージェントに作業させる際の標準指示テンプレです。

この形式でIssue本文を貼り付けて使用してください。

### テンプレ

あなたは私のリポジトリ「cloud-agent-lab」で作業しています。

最初に必ず AGENTS.md を読み、内容を厳守してください。

以下の GitHub Issue を実装してください。

要件:
- 新しいブランチを作成すること
- 変更をコミットすること
- Pull Request を作成すること
- CI が green であること
- `npm test` が通ること

--- ISSUE TEXT START ---
（ここに Issue の本文を貼り付け）
--- ISSUE TEXT END ---
