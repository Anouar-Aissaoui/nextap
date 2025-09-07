## Description

Please include a summary of the change and which issue is fixed. Please also include relevant motivation and context.

Fixes # (issue)

---

## Performance Checklist

Before you request a review, please confirm you have considered the following performance implications.

-   **No new third-party scripts?** Or, if a new script is added, is it loaded with an appropriate `next/script` strategy (e.g., `afterInteractive`, `lazyOnload`)?
    -   [ ] Yes / No / N/A
-   **Images Optimized?** Are all new images using the `next/image` component with explicit `width`, `height`, and a `data-ai-hint`?
    -   [ ] Yes / No / N/A
-   **LCP Image Prioritized?** If this PR affects a page's LCP, is the `priority` prop set on the LCP `next/image` component?
    -   [ ] Yes / No / N/A
-   **Fonts Loaded with `next/font`?** Are all web fonts loaded via `next/font` to prevent CLS?
    -   [ ] Yes / No / N/A
-   **Minimal Client Components?** Have you used Server Components wherever possible and only opted into Client Components (`'use client'`) for interactive elements?
    -   [ ] Yes / No / N/A
-   **Bundle Size Impact:** Have you checked the PR's bundle size impact? (A Vercel comment should show the change). Is any increase justified?
    -   [ ] Yes / No / N/A

---

## How Has This Been Tested?

Please describe the tests that you ran to verify your changes. Provide instructions so we can reproduce.

-   [ ] Manual test on deployed Vercel preview
-   [ ] Lighthouse audit on deployed Vercel preview
