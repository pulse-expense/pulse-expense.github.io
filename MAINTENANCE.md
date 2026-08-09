# Pulse v15.1 — Maintenance Release

This release freezes the major feature set and focuses on reliability and small UI improvements.

## Changes
- Registers the existing service worker so PWA/offline caching is actually activated.
- Bumps the cache namespace to `pulse-commercial-v15-1` to force a clean asset refresh.
- Adds a concise app description for browser/PWA metadata.
- Removes the internal version number from the browser title.
- Adds a startup fallback screen instead of leaving a blank page if initialization fails.
- Keeps the V14 Supabase schema and existing user data unchanged.

## Deploy
Upload `index.html` and `sw.js` to the existing GitHub Pages repository. Keep the existing `config.js` and `manifest.json`. No new SQL migration is required for this maintenance release.

## QA focus
Authentication, expense CRUD, savings/investments, goals, net worth, recurring plans, reminders, backup, mobile/PWA, and account-level data isolation.
