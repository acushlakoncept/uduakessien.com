---
name: Portfolio hosting direction
description: User-approved hosting source and canonical domain.
---

Host the redesigned portfolio on Vercel using the GitHub repository's main branch as the source, but leave uduakessien.com and www.uduakessien.com attached to the older portfolio-nextjs project. Preserve the existing apex-to-www redirect and external DNS setup.

**Why:** After initially approving a domain move, the user changed direction: “let me keep the setup as it was on portfolio-nextjs”.

**How to apply:** Keep the redesigned site's Vercel address separate from the custom domains unless the user explicitly requests another switch. Inspect live DNS and Vercel settings rather than assuming they match this intent.
