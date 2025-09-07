# Next.js Performance Playbook

This document provides a set of performance best practices and guardrails for our Next.js application. Following these guidelines will help us maintain excellent Core Web Vitals (CWV) and a great user experience.

## Core Principles

1.  **Server-First:** Do as much work as possible on the server. Use React Server Components (RSCs) by default. Only use Client Components (`'use client'`) when you need interactivity (e.g., `onClick`, `useState`).
2.  **Minimal Client-Side JS:** Every kilobyte of JavaScript sent to the client costs download, parse, and execution time. Be critical of new dependencies.
3.  **Ship for the User:** Prioritize optimizations that directly improve the user-perceived experience (LCP, INP, CLS).

---

## 1. Images (`next/image`)

**DO:**
- **Always** use the `<Image>` component from `next/image` for all images. It provides automatic optimization, resizing, and format conversion.
- **Specify `width` and `height`:** Always provide explicit `width` and `height` attributes that match the intrinsic size of the source image. This prevents layout shifts (CLS).
- **Use `priority` for LCP:** Add the `priority` prop to the single most important image visible in the initial viewport (the LCP element). This tells Next.js to preload it. Use it only once per page.
- **Use Placeholders:** Use a `data-ai-hint` to give hints for placeholder image generation.

**DON'T:**
- Never use the standard `<img>` tag.
- Don't use `priority` on images that are off-screen or not critical for the initial view. This can slow down the *actual* LCP element.
- Avoid using `fill` unless the parent container has a fixed size and `position: relative`.

---

## 2. Fonts (`next/font`)

**DO:**
- **Always** use `next/font` to load all web fonts (Google Fonts or local). It automatically self-hosts the fonts, eliminates network requests to Google, and generates precise fallback fonts to prevent CLS.
- Apply the font's CSS class to the `<body>` tag in `src/app/layout.tsx` to apply it globally.

**DON'T:**
- Never use `<link>` tags in the document `<head>` to load fonts from Google Fonts or other providers directly. This is slower and causes layout shifts.

---

## 3. Scripts (`next/script`)

**DO:**
- **Manage all third-party scripts** with the `<Script>` component from `next/script`.
- **Use the `strategy` prop:**
    - `strategy="afterInteractive"`: (Default) Use this for non-critical scripts like analytics or tag managers. They will load after the page becomes interactive.
    - `strategy="lazyOnload"`: Use for low-priority scripts that can wait until the browser is idle (e.g., chat widgets, social media embeds).
    - `strategy="worker"`: Use for scripts that can run in a web worker off the main thread.

**DON'T:**
- Never add scripts directly to `src/app/layout.tsx` using a standard `<script>` tag unless you have a very specific reason and use `async` or `defer`. `next/script` provides better control.

---

## 4. Caching & Data Fetching

**DO:**
- **Prefer Static:** Generate as much of the site statically as possible. If a page's data rarely changes, it's a perfect candidate for SSG.
- **Use Incremental Static Regeneration (ISR):** For pages with data that updates periodically, use `export const revalidate = <seconds>;`. This serves a fast static page from the cache while revalidating it in the background. A good starting point is `3600` (1 hour).
- **Tag-Based Revalidation:** For more granular control, use fetch tags (`next: { tags: [...] }`) and `revalidateTag` to update specific data on-demand.

**DON'T:**
- Don't default to server-side rendering (`export const dynamic = 'force-dynamic'`) unless the page content is highly personalized and must be fresh on every single request. This is the slowest rendering strategy.

---

## 5. Performance CI with Lighthouse (Setup Guide)

To prevent performance regressions, we can run Lighthouse on every Pull Request using GitHub Actions.

**1. Add Lighthouse CI GitHub App:**
   - Go to the [Lighthouse CI GitHub App page](https://github.com/apps/lighthouse-ci) and install it on this repository.

**2. Get a Lighthouse Build Token:**
   - Go to your [Lighthouse CI project dashboard](https://lhci.github.io/server/wizard/).
   - Select your repository, log in with GitHub, and copy the "build token".

**3. Add Token to GitHub Secrets:**
   - In your GitHub repository, go to `Settings` > `Secrets and variables` > `Actions`.
   - Create a new repository secret named `LHCI_GITHUB_APP_TOKEN` and paste the build token.

**4. Create a `lighthouserc.js` file** at the root of the project:

```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000/'],
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'core/cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'core/largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'core/interaction-to-next-paint': ['warn', { maxNumericValue: 200 }],
      },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lhci.appsg.site',
      token: '${LHCI_GITHUB_APP_TOKEN}',
    },
  },
};
```

**5. Add the GitHub Action workflow file** at `.github/workflows/lighthouse.yml`:

```yaml
name: Lighthouse CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js 18.x
        uses: actions/setup-node@v3
        with:
          node-version: 18.x
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build project
        run: npm run build
      - name: Run Lighthouse CI
        run: npm install -g @lhci/cli@0.13.x && lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}

```
This setup will automatically run Lighthouse on your main pages and fail PRs that don't meet the performance budget.
