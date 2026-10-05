# Handoff: Morticians Audit site review fixes

Written October 5, 2026. Read this first if you are a new AI or person picking up the work.

## What the site is
Static, dependency-free consumer education site (morticiansaudit.com) about funeral prices and rights, hosted on Netlify from this repo (no build command, publish directory `.`). Founder is "Jessica H", a former North Carolina licensed funeral director and embalmer. It is for families, not funeral professionals. Strict CSP on the homepage (`script-src 'self'`, `img-src 'self'`), so no inline scripts or third-party assets.

## Where this came from
A website review (positioning, trust, SEO) produced 11 prioritized fixes. This branch (`site-review-fixes`) implements the ones that can be done in code.

## What was changed
1. **Homepage positioning.** New title, meta description, H1 ("Know what a funeral requires before you pay for it."), eyebrow, lead, and CTA text. The old H1 never mentioned funerals.
2. **Social and structured data.** Added og:image (`og-image.png`, generated, plain text on dark background), twitter card, Organization and FAQPage JSON-LD (FAQ text in the JSON-LD must match the visible FAQ).
3. **Logo link** now goes to `/` (was `#`).
4. **Onboarding cut from five questions to two** (situation, provider state). `onboarding.js` and `guide.js` still work because they ignore missing parameters.
5. **Removed unfinished features from the homepage:** the "Automated GPL checker, Planned" badge, the upload notice, and the "What we're working toward" card.
6. **Added content:** three more rights cards (casket and outer burial container price lists, bring your own casket, itemized statement) and a "Where to take a concern" section (FTC at reportfraud.ftc.gov, state funeral board with NC and SC examples, state attorney general).
7. **Disclaimers consolidated.** One footer disclaimer (`scripts/footer.html`, copied into every page), removed duplicate hedging in the embalming card and checklist.
8. **New pages:** `/privacy/` and `/terms/`, linked from the footer.
9. **Search:** all state pages (and `/states/`) now carry `noindex,follow` via `scripts/generate-states.py`. `sitemap.xml` now lists only finished pages (home, policies, compare, privacy, terms).
10. **Policies page:** removed a developer note ("could not be rechecked during this update") and added a meta description.

If you change the footer, edit `scripts/footer.html`, then rerun `python3 scripts/generate-states.py` for state pages. The homepage, policies, compare, privacy, and terms pages have the footer pasted in directly and need the same edit by hand.

## What still needs to be done (needs Jessica, not code)
- **Full founder name and NC license number**, or a link to the NC Board of Funeral Service licensee lookup, on the About section. Not added because the information was not available.
- **A domain email address** (for example hello@morticiansaudit.com) to replace the Gmail address everywhere. Domain DNS is at Namecheap.
- **Netlify cleanup:** the earlier pull request showed two Netlify projects ("morticiansaudit" and "themorticiansaudit"). Confirm which serves the domain and delete the other.
- **Make the GitHub repo private**, or finish the state pages first. The README currently says state research was not done.
- **Google Search Console:** verify the domain and submit `sitemap.xml`.
- **Have a lawyer glance at `/terms/`.** It is a plain-language draft, not legal advice.
- **Analytics decision:** none exists. A cookieless tool such as Plausible, or Netlify server-side analytics, would show whether anyone uses the onboarding. Update `/privacy/` if added.

## Content work still pending
- **Research North Carolina and South Carolina properly** (cited statutes, regulator contacts, complaint links), then remove `noindex` for those two in `scripts/generate-states.py`, remove the "research pending" labels only for those states, and add them back to `sitemap.xml`. Do not remove pending labels without citing current authoritative sources.
- Optionally add a sourced line about the FTC's January 2024 undercover phone sweep of funeral homes. Verify the figures at ftc.gov before adding; they were not verified in this session.
- The FTC online-price-posting rulemaking: do not state its status without checking an FTC primary source.
- Consider renaming or adding a descriptive tagline to the logo. "Morticians Audit" suggests an audit the site says it cannot do.

## Things to verify (not done in this session)
- The live site was never viewed visually: check contrast, mobile layout, and the dark theme with Lighthouse, axe, or WAVE.
- Confirm a nonexistent URL returns a real 404 and not the homepage.
- Confirm the new og-image displays when a link is shared.
- Click every link on `/states/` and `/policies-and-law/`.
- The `compare/` page has no skip link or `<main id>`; minor accessibility gap.

## Style notes for whoever writes copy
Jessica wants direct, dry, plain writing with no performed warmth. No em dashes or hyphens as sentence punctuation (use periods or commas). If unsure of a fact, say so instead of guessing. The site avoids accusing providers: "a high price alone does not establish a violation" is a deliberate position.
