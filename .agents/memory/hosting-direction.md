---
name: Portfolio hosting direction
description: User-approved hosting source and canonical domain.
---

Host the redesigned portfolio on Vercel using the GitHub repository's main branch as the source. Use www.uduakessien.com as the primary domain, with uduakessien.com redirecting to it.

**Why:** The user initially asked to restore the older portfolio-nextjs setup, then reported updating it themselves. Live verification confirmed both domains were moved to the redesigned portfolio and DNS correctly pointed to Vercel.

**How to apply:** Preserve the current custom-domain setup and apex-to-www redirect. Inspect live DNS and Vercel settings rather than assuming they match this intent.
