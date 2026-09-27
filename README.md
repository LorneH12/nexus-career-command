# NEXUS.OS — Career Command

A light, responsive career workspace with a clearly labeled synthetic demo. This public repository contains no personal application records, contact details, chat history, or API credentials.

## Run

Requires Node.js 22 or later. No package installation is needed.

```sh
npm start
# Open http://127.0.0.1:3000
npm test
npm run build
```

The static interface can also be served by GitHub Pages from the main branch root. Hash routes support reloads and deep links. `dist/` contains only the six public browser files after build.

## What works in this release

- Ten navigable modules: Command, Missions, Signal, Results, Portfolios, Evidence, Intelligence, Memory, Growth, Settings.
- Local demo opportunity creation/editing, evidence validation, duplicate requisition detection, filters and dossiers.
- Separate confirmation, hiring outcomes, and overdue non-response flags; receipts do not inflate human-response rates.
- Rule-based recommendations and command navigation; Ctrl/Cmd+K opens the panel.
- Browser-local demo chat notes and explicitly confirmed decisions; search and JSON export.
- Demo growth records, progress changes, and new source links.
- Browser speech-recognition detection, editable transcript, stop/cancel, and typing fallback. Availability depends on the browser and microphone permission.
- Mobile layout, keyboard navigation, semantic controls, reduced-motion support, escaped record text, safe external links.
- A server-side, authenticated **read-only** Notion snapshot adapter. It is not configured or deployed by this repository alone.

## Private connection

ChatGPT's Notion connection is separate from this site's credentials. Put credentials in the hosting provider's secret configuration; do not paste them into chat or commit them. See `.env.example` for variable names.

The server requires `NOTION_TOKEN`, `NOTION_MISSIONS_SOURCE`, and a unique `NEXUS_PASSWORD` of at least 24 characters. `NOTION_CONTACTS_SOURCE` is optional. Use the existing Mission Ledger and Contact Intelligence data source IDs, and authorize the Notion integration for only the needed sources. Never enter real values in browser JavaScript.

For local use, Node can read a private `.env` with `node --env-file=.env server.mjs`. For remote deployment, use an HTTPS endpoint and authenticated access; Basic authentication is only acceptable over TLS. The login name is `nexus`. The server binds to loopback unless `HOST` is configured. API routes fail closed if credentials are missing. Only an explicit static-file allowlist is served; environment and server files are never served by the Node app.

In Settings choose **Check private connection**. A successful response replaces demo missions and contacts with a private snapshot held only in tab memory. Private edits and chat writes remain disabled in this release. Refresh retrieves the latest source snapshot. No automatic mailbox ingestion, outreach, job submission, AI service, or live analytics is running.

## Editing guide

| File | Purpose |
|---|---|
| `index.html` | Accessible shell, dialogs and entry point |
| `style.css` | Light theme, bokeh background, layout and responsive rules |
| `app.js` | Pages, forms, commands and user interactions |
| `model.js` | Outcome rules, validation, safe URLs, commands and counting |
| `demo.js` | Fictional records only |
| `store.js` | Local demo persistence and same-origin API client |
| `server.mjs` | Private read-only Notion adapter and static allowlist |
| `model.test.mjs` | Business-rule and API access tests |
| `build.mjs` | Public-only static export |

Modules are kept at the repository root so the initial release can be uploaded through GitHub's browser interface while the connected API lacks Contents write access. The separation is logical and editable; folder restructuring can follow when a normal Git push path is available.

## Known limitations

This is the **interface milestone**, not the full connected MVP. The following acceptance items remain open: private hosting/auth configuration; authenticated Notion writes; durable chat and decision sync; retries/conflict handling; full Career Truth validation; live historical imports; AI answers; analytics; external growth recommendation sourcing; device-specific microphone tests; cross-device persistence.

The existing Notion databases and all previous portfolios are preserved. Notion workspace discovery does not establish website API authentication. The GitHub connector returned 403 on branch creation, and terminal Git lacked credentials; browser repository creation succeeded. Keep these capabilities distinct.

## Privacy and data handling

The default mode stores **demo** records and notes in this browser's local storage. Do not enter sensitive personal data into the public demo. Reset demo removes this browser's demo data. JSON exports contain everything entered locally: handle them accordingly. Notion snapshots are not written to browser local storage. Growth examples do not represent verified real events or courses. Analytics placeholders never show invented traffic.

## Verification

Run `npm test` for the business-rule/access checks. See `RELEASE_STATUS.md` for deployment and browser verification. A green unit-test run does not establish a working Notion connection or microphone support.

## API references

- https://developers.notion.com/reference/query-a-data-source
- https://developers.notion.com/reference/retrieve-a-page
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
