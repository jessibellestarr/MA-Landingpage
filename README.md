# Morticians Audit

Consumer funeral-rights education for families in South Carolina and North Carolina.

## Site

This is a dependency-free static site: `index.html` and `style.css`. Netlify build command: leave blank. Publish directory: `.`.

The state selector reveals official state resources, and the General Price List checklist is manual. The page does not accept uploads, certify compliance, or make legal findings. It has no accounts, analytics scripts, cookies, or third-party assets.

## Publish and domain setup

1. Connect this repository to the existing Morticians Audit site in Netlify, or deploy the repository's root directory.
2. Add `morticiansaudit.com` in Netlify's Domain management before changing DNS.
3. In Netlify, open **Pending DNS verification** for the domain and use the exact record values shown for that site.
4. At Namecheap, edit **Advanced DNS → Host Records**. Keep unrelated mail records. Remove only conflicting records for the same host when replacing them.
5. Verify the Netlify deployment and HTTPS before sharing the custom domain.

For this static site, use no build command and publish `.`. Netlify's current record values for the actual site take precedence over generic examples.

## Local preview

Run `python3 -m http.server 8080 --bind 127.0.0.1` from the repository root, then open `http://127.0.0.1:8080`.

## Scope

Educational information only; not a law firm or government agency and not legal advice. Funeral prices are not capped by the FTC Funeral Rule; a high price alone does not establish a violation. Check the cited official sources for current guidance.

## Guided state pages

Run `python3 scripts/generate-states.py` after changing the state page template.
All 50 routes exist. North Carolina and South Carolina have sourced, bounded guides in `scripts/state-content/`. The other 48 remain general starting pages with research-pending labels and noindex.
Official sources for the NC/SC topics were reviewed October 6, 2026, including North Carolina S.L. 2026-48 effective October 1, 2026. Preserve the source fragments when regenerating.
Do not remove the research-pending labels without reviewing and citing current authoritative provisions.
Onboarding choices are placed in URL parameters and may appear in hosting logs; no personal details are requested.
The free estimate comparison stores entries only in page memory. Payments are not integrated.
