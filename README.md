# Pulse v15.5 — Spending Pulse Amount Labels

Maintenance/UI update based on the public v15.4 build.

## What's changed
- Spending Pulse now displays the amount spent above every day that has spending.
- Large amounts use compact labels such as ₹6.1k, while smaller amounts show the exact rupee amount.
- Hovering a bar still exposes the exact date and exact amount.
- Today's day label remains highlighted.
- Existing Budget Edit/Delete and previous budget/date fixes are retained.
- Service-worker cache bumped to v15.5 so GitHub Pages picks up the new UI.

## Deployment
Replace `index.html`, `sw.js`, and `README.md` in the existing GitHub Pages repository. Keep your existing `config.js` and `manifest.json`.

After deployment, hard refresh once with Ctrl+Shift+R.
