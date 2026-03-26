# TODOS

## P2 — Client confirmation email
**What:** Auto-send a "We received your enquiry" email to the client on submission.
**Why:** Reduces "did it go through?" anxiety. Resend can CC the client in the same API call.
**Effort:** S — one extra `to` field or a second `resend.emails.send()` call in `api/enquiry.js`.
**Depends on:** Domain verification in Resend (can't send from onboarding@resend.dev to arbitrary addresses in production).

## P2 — Notion CRM auto-entry
**What:** On each submission, POST the enquiry as a new row in a Notion database.
**Why:** Structured lead tracking without manual copy-paste from email.
**Effort:** M — add `NOTION_TOKEN` + `NOTION_DB_ID` env vars, call Notion API from `api/enquiry.js`.
**Note:** No client-side changes needed — purely server-side addition.

## P3 — Custom guest counts
**What:** Allow arbitrary guest count (e.g. 75, 150) instead of only 50 or 100.
**Why:** Catering and beverage prices use a `{ 50: x, 100: y }` lookup — events with other sizes get incorrect or no pricing.
**Effort:** M — requires new pricing model (linear interpolation between tiers, or additional price tiers).
**Depends on:** Business decision on pricing strategy for non-standard sizes.
