# Morticians Audit handoff

Updated October 10, 2026.

## Current repository
Work is being made in `jessibellestarr/MA-Landingpage` on `main`. Jessica has confirmed this is the correct repository. The earlier confusion was about which Netlify account owns the deployment, not which GitHub repository contains the project. Do not invent or switch repositories. Confirm the correct Netlify account before changing deployment settings.

## Product position
Morticians Audit is free consumer funeral-rights and price education for families. It is not a provider-facing compliance service and it must not label a provider or price list as unlawful without enough evidence. Preserve the core distinction among law, cemetery/crematory rules, provider policy, recommendation, and price.

Public founder name stays `Jessica H`. Founder wording stays `former North Carolina licensed funeral director and embalmer`. Do not add a surname, current-license implication, license number, or public lookup unless Jessica explicitly changes that decision.

## State coverage now researched
All 50 state pages now provide linked official sources for selected requirements or consumer guidance and are indexable. The directory has one alphabetical list; the sitemap includes all 50 state routes.

Coverage varies. These pages do not establish every preservation deadline, cremation waiting period, home-funeral/home-burial rule, transport permission, preneed protection, or disposition option. Idaho and Indiana emphasize licensing; New Jersey explicitly identifies an upcoming November 1, 2026 statutory change rather than presenting it as current law. Never describe this as complete legal coverage.

`data/state-source-register.json` records this 39-state expansion's source links, topics, review date, and unresolved research categories. Expand the register to include the earlier eleven guides before using it as a nationwide rules engine. Keep unverified fields unresolved.

## October 10 expansion
New researched pages were added for Virginia, Tennessee, Georgia, and Florida using current official statutes, regulations, regulator pages, or state consumer guidance. Each page intentionally covers selected high-value issues instead of pretending to summarize every funeral, cemetery, medical-examiner, transport, home-burial, or public-health requirement.

### Virginia
Covers designation/authority, refrigeration after 48 hours, permission to embalm, cremation medical-examiner permission and identification, and Virginia DHP complaint routing.

### Tennessee
Covers the Tennessee Attorney General's statement that embalming is not required by Tennessee law, cremation authorization, regulator/preneed starting points, and Board complaint limitations.

### Georgia
Covers funeral-establishment and crematory licensing, release to the legally authorized person, crematory oversight, and Georgia Secretary of State complaint routing.

### Florida
Covers the statutory legally-authorized-person hierarchy, preservation/refrigeration after 24 hours, written cremation authorization, selected transport requirements, and Chapter 497 oversight.

## Federal Funeral Rule accuracy items
FTC primary guidance was rechecked October 10, 2026. Preserve these facts when editing the homepage or tools:

- A covered funeral provider must give a completed Statement of Funeral Goods and Services Selected at the end of the arrangements discussion. For in-person arrangements, giving it later does not satisfy the Rule.
- Telephone callers asking about prices or offerings must receive accurate price information. A provider cannot require callers to give a name, address, or phone number first.
- If legal or other requirements force a consumer to buy an item they did not request, the reason must be explained in writing on the Statement.
- Do not claim every cemetery, crematory, monument seller, or other death-care business is automatically covered by the FTC Funeral Rule. Coverage depends on the Rule's definition of funeral provider.

Homepage copy still has one known soft phrase: `you should receive` in the itemized-statement card. It should be tightened to `the provider must give you` when the homepage is next edited. Add the telephone anonymity right and written-requirement explanation in that same pass.

## Next product features, in priority order
1. Build `They told me I have to...` as a state-aware decision tool distinguishing law, cemetery/crematory rules, provider policy, and recommendation.
2. Complete a structured research schema for every state before building a nationwide rules engine. Include authority, embalming, refrigeration/preservation, cremation timing and authorization, permits, transport, home funeral/home burial, disposition options, preneed regulator, complaint route, official forms, source URLs, and review date.
3. Expand the comparison worksheet toward an estimate/GPL auditor. It should flag missing information and questions, not declare violations automatically.
4. Add a `Before you call the funeral home` price-call sheet, including the federal right to receive telephone price information without first identifying yourself.
5. Later add price intelligence using authoritative or clearly attributed survey data, ownership transparency, death-situation pathways, and Spanish content.

## SEO and indexing
Do not index generic state placeholders. Add a state to the sitemap only after state-specific research is completed and the page's robots tag is changed to `index,follow`. Keep source-review dates visible.

Current researched-state expansion commit set includes Virginia, Tennessee, Georgia, Florida, the state directory, and sitemap updates dated October 10, 2026.

## Deployment caution
GitHub edits are committed to `main`, but do not claim a Netlify deployment succeeded solely because a GitHub commit succeeded. The user previously identified a Netlify-account mismatch. Confirm the live domain or the correct Netlify account when deployment status matters.

## Style and safety rules
Use plain, calm consumer language. Do not assume a high price proves misconduct. Separate personal experience from law. Prefer state statutes, regulations, regulators, attorneys general, vital-records agencies, and FTC primary material over funeral-industry blogs. When the law is ambiguous or a page only covers selected topics, say so.

## Second October 10 expansion
Added Alabama, Kentucky, West Virginia, Maryland, and Ohio as sourced, indexable guides. Updated directory and sitemap in the same commit. Each page retains clear limits on topics and transport authority.

- Alabama: Board-published §§ 34-13-117 and 34-13-121 cover preservation, public viewing, cremation timing and paperwork; links to Board complaint forms. The Board compilation is dated October 2023; confirm amendments with the Board for a specific arrangement.
- Kentucky: current Board-linked CR-1 form covers authority, identification and choosing cremation without embalming; links to signed-complaint instructions. Crematory authority licensing also involves the Attorney General.
- West Virginia: §§ 30-6-3 and 30-6-21 cover representative priority, written permission, medical-examiner/coroner permission and tracking. Uses official wv.gov Board site, not the similarly named .com site.
- Maryland: current COMAR 10.29.19.09 and .05 cover casket/embalming restrictions and the permit holder's receipt-based 48-hour timetable, with emergency exceptions. Do not confuse it with a universal death-based deadline.
- Ohio: §§ 2108.81 and 4717.23 cover disposition authority, general 24-hour wait and cremation documents. Board website is the starting point for current complaint instructions.

Validation: unique canonicals, index/follow tags, retained guide.js route hooks, directory links, and sitemap entries checked before committing. Live deployment remains unconfirmed.

## Remaining-state expansion, October 10
Added all 39 remaining states with selected official-source guidance. Removed placeholder/noindex status on those pages, preserved shared scripts and route hooks, and updated the directory and sitemap together. State-specific paragraphs link to the cited source; each guide includes scope limits and a relevant official starting point for concerns.

Source limitations: some official sites blocked full-page retrieval, so only claims supported by available official search excerpts were included. Mississippi uses the Board's December 2025 compilation; Vermont's published page states it includes the 2025 session. New Jersey's 2025 act is explicitly upcoming on the review date. Avoid inferring complete current-law review from a review date. Recheck amendments and effective dates before adding more claims.

Validation: 39 unique page canonicals, index/follow tags, official source links, preserved route hooks, 50 unique directory state links and 50 unique sitemap state entries. GitHub commit does not establish live deployment.
