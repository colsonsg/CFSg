# Colson Fellows Singapore — Outreach Site

Plain HTML/CSS/JS, six pages, no build step. Built to be dragged straight into a GitHub repo and served by GitHub Pages.

## Deploy (5 minutes)

1. Create a new **public** GitHub repository (e.g. `colsonfellows-sg`).
2. Upload every file in this folder to the repo root, preserving the folder structure (`css/`, `js/`, `images/`, plus the `.html` files and `.nojekyll`). Easiest path: `git clone` the empty repo locally, copy these files in, then `git add . && git commit -m "Launch site" && git push`.
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / `root`**.
4. GitHub gives you a live URL within a minute or two, typically `https://[username].github.io/colsonfellows-sg/`.
5. Optional: **Settings → Pages → Custom domain** if you want your own domain instead of the github.io one — you'll need a `CNAME` record with your registrar pointing at `[username].github.io`.

The `.nojekyll` file stops GitHub from running its default Jekyll build over the files — with it present, what you uploaded is exactly what gets served, no surprises.

## Before this goes live — please read

Your own brief (Section 1) is explicit that nothing in it should reach public copy without the leadership team confirming it first, and it specifically flags cost, dates, and the extent of Singapore localisation as **not yet confirmed**. I've written the site to be honest about that rather than quietly filling the gaps myself, but three things still need your sign-off:

1. **Application deadline (31 July 2026).** This isn't in your brief — I found it on the *live* colsonfellows.org site while researching. It's stated there as the global deadline for the August 2026 cohort. I've built the entire site's urgency around it. **Confirm this is also the real deadline for the Singapore cohort specifically** before this goes live — if it's wrong, the whole site is wrong in a way that actively costs you applicants.

2. **Carol Loi is listed as the Singapore cohort's official director** on colsonfellows.org (`cloi@colsonfellows.org`, 2nd/4th Thursdays, 8–10pm SGT) — a real, public, well-established listing, not something I'm guessing at. I've used her contact details as the site's Singapore contact point because it's the only verified channel I have. **If you are Carol, or work with her, this is straightforward — just confirm the details still match.** If this website is a separate or unofficial effort, you need to coordinate with her before this goes live, since prospective applicants will otherwise be routed to a person who doesn't know this site exists.

3. **Tuition (USD 900 / ~SGD 1,160 + ~USD 200 books).** This is the *global* benchmark, corroborated independently across several other regional chapter sites — but your own brief says Singapore-specific pricing isn't confirmed. I've deliberately hedged the FAQ copy ("the global benchmark is... Singapore-specific pricing is confirmed when you apply") rather than state a firm SGD figure. Tighten that once you have a real number.

A few smaller judgment calls I made, so you can overrule them if you'd rather:

- **Fellow count:** I used "6,000+" (a February 2026 Colson Center press release) rather than the "2,500+" in your brief, since it's more recent and from an official source. Worth a quick check that it's still current.
- **Reading list on the public Programme page:** I only named the foundational titles (Mere Christianity, Knowing God, How Now Shall We Live?, Restoring All Things, Man's Search for Meaning). I deliberately left out the titles your own Annex B.3 flags as needing careful, deliberate weighting (Strange New World, Another Gospel?, The Desecration of Man) and especially *America Agonistes*, which your brief notes is a close analysis of US domestic politics by name — not portable to a Singapore recruitment page. That's an editorial choice about a *recruitment* page, not a claim that Singapore Fellows don't read more widely than this list.
- **Left out entirely:** the Ipsos data on Singapore attitudes toward same-sex marriage and parenting (your Annex D.4). It's real, well-sourced data, and I don't doubt its place in the internal diagnosis — but it's a live, sensitive, and easily misread topic for a public page whose only job is getting people to sign up. I judged it does more harm than good here. Your call if you disagree.
- **The youth-specific "decline started 5 years early" finding** is presented on the Why Now page explicitly as an unpublished internal working hypothesis, not a proven fact — per your own brief's caveat in Section 2.1.

## File structure

```
index.html      Home
program.html    The Programme — what it is, CFRR framework, curriculum, SG format
why.html        Why Now — the data, hedged appropriately; the worldview gap
stories.html    All 11 Singapore Fellow testimonials from your brief's Annex A
faq.html        Format, cost, eligibility, deadlines
apply.html      CTA — links out to the official colsonfellows.org/apply/
css/style.css   Shared design system
js/main.js      Mobile nav toggle only — no tracking, no analytics
images/         Your logo (webp + png), plus generated favicons
.nojekyll       Tells GitHub Pages not to run Jekyll over the files
```

Edit any page's text directly in the `.html` files — it's plain markup, no templating, so search for the sentence you want to change and edit it in place. Nav, footer, and the "applications close" banner are repeated at the top/bottom of every page; if a date or deadline changes, update it in all six files (a find-and-replace across `.html` files for the old date will catch every instance).

## Design notes

- No stock photography. Given the choice between generic stock photos and a typography-and-colour-led design, I went with the latter — it's more consistent with how the strongest programmes in this space (Colson Center's own site included) actually present themselves, and it means nothing on the site is a placeholder image standing in for the real thing. If you have real photos from an actual Singapore huddle or dinner fellowship, those would be a strong addition to the Programme or Stories page — happy to help drop them in.
- Palette and type are drawn directly from your crest (navy, shield-gold, a deep oxblood accent) rather than a generic template look.
- Fully responsive, keyboard-navigable, and respects reduced-motion settings.
