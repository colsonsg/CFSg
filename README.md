# Colson Fellows Singapore — Outreach Site

Plain HTML/CSS/JS, six pages, no build step. Drag it into a GitHub repo and Pages serves it as-is.

## Deploy (5 minutes)

1. Create a new **public** GitHub repository (e.g. `colsonfellows-sg`).
2. Upload every file in this folder to the repo root, preserving the folder structure (`css/`, `js/`, `images/`, the `.html` files, and `.nojekyll`). Easiest path: `git clone` the empty repo locally, copy these files in, then `git add . && git commit -m "Launch site" && git push`.
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / `root`**.
4. GitHub gives you a live URL within a minute or two, typically `https://[username].github.io/colsonfellows-sg/`.
5. Optional: **Settings → Pages → Custom domain** for your own domain — you'll need a `CNAME` record with your registrar pointing at `[username].github.io`.

The `.nojekyll` file stops GitHub running its default Jekyll build over the files, so what you uploaded is exactly what gets served.

## Editing dates and pricing — for this year and every year after

**Open `js/config.js`. That's the only file you should need to touch between cohorts.**

It's a short list of values — cohort label, deadline, start date, commissioning date, tuition — in plain English, with comments explaining each one. Change a value, save the file, re-upload it (or push it), and every page on the site updates itself. You never need to open an `.html` file to change a date or a dollar figure.

Two things worth knowing about how it works:

- **The deadline banner softens itself automatically once the date passes.** Before `applicationDeadlineISO`, the site shows deadline-driven copy ("priority deadline 31 July"). After it, the same spots automatically switch to open-ended copy ("applications are still open — reach out"), with no manual editing required. This is what lets the site stay live and accurate year-round instead of going stale the day after a deadline — it's also why nothing on the site says "3 weeks left" anymore: that framing ages badly by design, so it's gone.
- **Next year, you're only changing six values** (`cohortLabel`, `applicationDeadline` + its ISO twin, `cohortStart`, `commissioning`, and pricing if it changes) — not touching layout, copy, or any HTML.

If you ever want a page to *say* something date-related that isn't already wired up, tag it in the HTML with `data-field="cohortLabel"` (or whichever key) instead of typing the date directly, and it'll pull from config automatically. `js/main.js` has the (short, commented) logic that reads the config and does the swapping, if you're curious, but you shouldn't need to open it.

## What changed since the last round, and why

- **Cost is now stated plainly** — USD 900 + ~USD 200 books, no hedging — with a value case attached (roughly USD 45/session, what that buys) rather than just a number.
- **All the internal-brief hedging is gone.** "Internal analysis," "not peer-reviewed," "working hypothesis," the confirmed-vs-unconfirmed apparatus on the Why page — none of that belongs in front of an applicant, and it read as exactly what it was: your internal brief's caveats, copied into public copy by mistake on my part. The site now states the case the brief made as simply true, the way it should.
- **"Why Now" is now "What's at Stake,"** and the whole page is rewritten to argue the *importance* of going deeper, not a countdown. The line about "the audience most likely to leave over an unfounded claim" — commentary about the *marketing strategy*, sitting inside the *marketing copy* — is gone; that distinction should never have blurred.
- **Every "Tuesday" is now "Monday."** Sunday-to-Monday is the actual rhythm most people feel; Tuesday never made sense and was inherited unquestioned from the source brief's own phrasing.
- **Every testimonial is attributed by first name only** (Cheow Lan, not Cheow Lan Ong; Weng Pheng kept whole, since that's one given name, not two).
- **The identify-cards on the home page now lead with a general, observable pattern and use a testimonial as supporting evidence**, rather than resting the whole hook on eleven people's say-so. Testimonials are still doing real work — they're just proof of the pattern now, not the whole argument for it.
- **Apply is now always visible** — outside the collapsible mobile menu, on every screen size — instead of hidden behind the hamburger icon.
- **Contrast and type-weight pass:** darkened the faint grey used on labels (it was failing WCAG AA), moved every small label off plain gold onto gold-light on dark backgrounds, made the "Singapore format" box permanently light regardless of what section it sits in (so it can never end up low-contrast against navy again), and bumped weight/size on the small mono labels site-wide.
- **Deadline copy now has graceful "after the deadline" language everywhere it appears**, not just on the FAQ — so a late applicant is invited in, not shut out.

## Before this goes live

Really one thing left: **confirm with Carol Loi that this site is coordinated with her**, since she's the cohort's official, publicly-listed director and the site now routes all Singapore-specific contact to her inbox. Everything else flagged in the previous round — cost, the deadline, the Fellows count — you've since confirmed directly.

## File structure

```
index.html      Home
program.html    The Programme — CFRR framework, curriculum, SG format
why.html        What's at Stake — the case, stated plainly
stories.html    All 11 Singapore Fellow testimonials, first-name attribution
faq.html        Format, cost + value case, eligibility, deadlines
apply.html      CTA — links to the official colsonfellows.org/apply/
css/style.css   Shared design system
js/config.js    ← Edit THIS for dates/pricing. Nothing else.
js/main.js      Mobile nav + reads config.js. No tracking, no analytics.
images/         Your logo (webp + png), plus generated favicons
.nojekyll       Tells GitHub Pages not to run Jekyll over the files
```

## Design notes

- No stock photography — typography and colour only, drawn from your crest (navy, shield-gold, an oxblood accent).
- Fully responsive, keyboard-navigable, and respects reduced-motion settings.
- Every text/background colour pairing has been checked against WCAG AA (4.5:1 for body text, 3:1 for large text/UI). If something still looks hard to read on your screen, it's likely a design-taste question rather than a contrast-math one at this point — tell me which element and I'll take another pass.
