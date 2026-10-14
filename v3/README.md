# Anjali Chaturvedi Portfolio — V3

A self-contained, static portfolio package containing the **Infinite Receipt** landing page and the interactive **Product Playground**.

## Files

- `index.html` — deploy-ready landing page and default entry point.
- `infinite_receipt_v8.html` — named copy of the updated landing page.
- `product-playground.html` — interactive case-study playground with six separate product areas:
  1. Unified support workspace
  2. Content management
  3. Help Center revamp
  4. Consent management
  5. AI support
  6. NDR recovery

## Run locally

No build step, package manager, or server-side runtime is required.

1. Extract the ZIP.
2. Open `index.html` in a browser.
3. Use **Product Playground** in the navigation to open the interactive case studies.

For a local HTTP preview, run this command from the extracted folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

Upload the contents of this folder to any static host (for example, GitHub Pages, Netlify, Vercel static hosting, or an ordinary web server). Keep `index.html` and `product-playground.html` in the same directory because navigation uses relative paths.

No external JavaScript or CSS libraries are required.

## Production-readiness notes

- Responsive navigation and layout rules are included for desktop, tablet, and narrow mobile screens (including 320–430px layouts).
- Mobile-specific refinements stack case-study content, keep the six-case workbench readable, make simulator controls thumb-friendly, and prevent horizontal overflow.
- Navigation links connect the landing page and playground using relative paths.
- Basic page metadata, semantic landmarks, visible keyboard focus states, and reduced-motion support are included.
- The interactive demos are **illustrative client-side prototypes**. They do not connect to Nutrabay systems, persist to a backend, send customer communications, or change real consent preferences.
- Any impact metrics should be published only after validating the source, timeframe, denominator, and attribution. Demo copy intentionally avoids presenting unverified results as audited facts.
- Before public launch, replace/add the final production domain in canonical and social-sharing metadata, run a real-device/browser QA pass, and verify that every external profile/repository URL is current.

## Version

**V3 · 14 October 2026**


## Product Playground structure

The case-study page uses a focused sequence: choose one of six cases, switch between **What was wrong**, **What I did**, and **How it helped**, then open the interactive workflow. Product reasoning and measurement notes are tucked into an optional disclosure to reduce visual clutter.

Legacy leadership and growth metrics carried over from older portfolio material have been removed from the landing page. The case studies avoid unsupported impact claims; outcomes are described as intended benefits unless validated evidence is available.
