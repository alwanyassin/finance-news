---
trigger: always_on
---

# Developer Rules & AI Agent Configuration

This file acts as the strict guideline and configuration for any AI Agent or Developer working on this project. By reading this file, you must adhere to the rules, tech stack, and architectural patterns outlined below.

## 1. 🏗️ Tech Stack & Dependencies
- **Framework**: Astro JS (v6.x)
- **Styling**: Tailwind CSS (v4.x via Vite)
- **Node Engine**: `>=22.12.0`
- **Package Manager**: npm (Standard commands: `npm run dev`, `npm run build`)
- **Important Note**: **DO NOT** add, remove, or update any dependencies in `package.json` without explicit instruction from the user.

## 2. 📂 Folder Structure & Architecture
You must strictly respect and maintain the existing folder structure. **Do not** create new top-level directories or deviate from this pattern unless requested:

```
src/
├── components/   # Reusable UI components (e.g., Cards, Buttons, Headers)
├── data/         # Mock data, JSON, or static data files
├── layouts/      # Base layouts for Astro pages (e.g., MainLayout)
├── pages/        # File-based routing for Astro
│   ├── article/  # Individual article pages or dynamic routes
│   ├── category/ # Category pages
│   └── index.astro
└── styles/       # Global CSS styles (e.g., global.css)
```

**Rule**: All new reusable UI blocks must go into `src/components/`. All full pages or route endpoints must go into `src/pages/`. Layout wrappers must go into `src/layouts/`.

## 3. 🎨 Styling & Theming Strict Rules
To ensure absolute design consistency across the project, you must adhere to the following rules regarding styling:
- **Global CSS ONLY**: You are **STRICTLY PROHIBITED** from introducing new arbitrary colors (e.g., `text-[#123456]`, `bg-red-500`) or fonts unless they are already defined or derived from `src/styles/global.css`.
- **Use Theme Variables**: Always utilize the Tailwind classes that correspond to the established colors and typography within `global.css`.
- **Tailwind v4**: Be mindful of Tailwind CSS v4 syntax and features (e.g., CSS variables native approach).

## 4. 💻 Coding Style & Best Practices
- **DRY Principle (Don't Repeat Yourself)**: 
  - **MANDATORY**: For repetitive UI elements (e.g., a list of news cards, multiple categories, navigation links), you **MUST** use arrays and map/loop over them using Astro's `.map()` syntax.
  - Do not hardcode 3 or 4 identical components in a row. Create a data array and loop through it.
- **Component Modularity**: Keep components small, focused, and single-purpose.
- **Astro Specifics**: 
  - Keep client-side JavaScript to a minimum. Use Astro's zero-JS approach by default.
  - Only use client directives (e.g., `client:load`, `client:idle`) if interactive islands (React/Vue/Svelte/Vanilla JS) are explicitly required.
- **Formatting & Readability**: Write clean, readable code. Properly indent and comment complex logic if necessary.

## 5. 🤖 AI Agent Behavior Protocol
- **Analyze First**: Always check existing components in `src/components/` and `src/layouts/` before creating a new one to avoid duplication.
- **Preserve Existing Code**: Do not refactor unrelated code when fixing a bug or adding a feature.
- **Ask Before Breaking Changes**: If a requirement seems to contradict these rules or requires a major architectural change, you must STOP and ask the user for confirmation first.

---
*By reading this file, you (the AI Agent) acknowledge and agree to follow these constraints strictly in all future interactions within this workspace.*
