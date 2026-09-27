# Vivid Prompt

A beginner-friendly prompt learning platform that helps students and beginners go from vague ideas to clear, useful AI prompts.

Friendly AI prompting coach + practice environment — not just a template database.

## What it does

Core loop: **Discover → Choose Template → Add Details → Improve Prompt → Understand Improvements → Copy/Open in AI Tool → Save/Revisit**

- **Prompt Discovery:** Browse by category (Education, Writing, Coding, Business, Marketing, Research, Content Creation, Image Generation) + natural-language search
- **Prompt Templates:** Title, description, category, example use case, fields/questions, starter structure, learning tips
- **Prompt Builder:** Quick Form mode + Guided Question mode (conversational, back-navigation)
- **Prompt Improvement:** Improves clarity, context, specificity, instructions, constraints, output format
- **Improvement Explanations:** Plain-language why-it-got-better teaching
- **Interactive Prompt Coach:** Reviews free-written prompts, finds gaps, asks follow-ups, produces stronger version
- **Prompt Usage:** Copy + Open in supported AI tools
- **Personal Prompt Library:** Save, view, rename, edit, duplicate, reuse, organize, delete (private by default)
- **Public Sharing (opt-in):** Publish selected prompts for others
- **Learning Content:** Short lessons + weak-vs-improved examples + practice (Learn → See → Practice)
- **Dashboards:** Learner (continue learning, recent prompts, recommendations) + Admin (users, templates, content)
- **Admin:** Manage users, templates, categories, lessons, publishing, activity review
- **Guest + Account model:** Guests can explore/build/copy; accounts unlock library, progress, onboarding

See full spec: `Docs/vivid_prompt_prd.md`

## Project status

Initial version — product definition only. No app code yet.

```
vivid_prompt_website/
  Docs/
    vivid_prompt_prd.md  # Product Requirements Document
  README.md
```

## MVP scope (from PRD)

Guest access, auth + simple onboarding, category browse, search, templates, Quick Form + Guided builders, improvement + explanations, Coach, copy/open-in-AI, personal library + organization, private-by-default + public share, lessons/examples/practice, learner dashboard, admin user/template/category/lesson management + publishing + activity review.

Post-MVP (not in v0.1): AI recommendations, courses/quizzes/certification, prompt scoring, in-platform execution, community library, advanced analytics.

## Getting started

Currently docs-only. Next steps:
1. Choose stack (e.g. Next.js + Auth + Postgres)
2. Scaffold `src/`, define data model for `users, templates, categories, lessons, prompts`
3. Implement Discover → Builder → Improve → Save flow

## License

TBD
