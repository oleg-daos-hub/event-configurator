# Event Configurator

A lightweight, single-page web app for configuring and pricing corporate/community events. Users step through a guided flow to select event parameters, get an instant cost estimate, and submit an enquiry.

## What it does

The configurator walks users through a sequential selection process:

1. **Event format** — Choose from: Launch events, AMAs & streams, Brand events, Ecosystem meetups, Roundtables
2. **Group size** — 50 people (Intimate) or 100 people (Large)
3. **Event type** — Select a participation level:
   - **Branded event** — Full ownership, from $15K
   - **Co-host** — Shared stage & visibility, from $8K
   - **Sponsorship** — Join an existing event, from $4K
   - **Custom package** — Bespoke quote on request
4. **Add-ons** (only for Branded and Co-host types):
   - **Catering** — Basic / Classic / Extended / Signature tiers
   - **Drinks** — Standard / Extended / Signature tiers
   - **Hostess** — Basic / Standard / Premium tiers

Prices for add-ons are shown dynamically based on the selected group size. A running total updates as selections are made.

Once all steps are complete, the user proceeds to a **checkout page** with a full summary and a contact form (name, email, event date, phone, notes) to submit an enquiry.

## Project structure

```
event-configurator/
├── index.html      # Two-page layout: configurator + checkout
├── styles.css      # All styling (no framework, plain CSS)
├── script.js       # All logic: data, state, rendering, navigation
└── vercel.json     # Deployment config (cleanUrls, no trailing slash)
```

## Tech stack

- Vanilla HTML, CSS, JavaScript — no frameworks, no build step
- Deployed on [Vercel](https://vercel.com)

## Running locally

Just open `index.html` in a browser — no server or dependencies needed.

```bash
open index.html
```

## Deployment

The project is configured for Vercel with clean URLs:

```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

Push to the connected Git repository and Vercel will deploy automatically.

## Pricing data

All pricing is defined as constants at the top of `script.js` and can be updated there:

- `FORMATS` — list of event format labels
- `TYPES` — event types with starting prices and included services
- `CATERING`, `DRINKS`, `HOSTESS` — tiered add-on packages with prices per group size (50 / 100 people)
