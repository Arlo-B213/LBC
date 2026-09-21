# The Service Stack — PWA Deployment

## Files
- `index.html` — the app
- `manifest.json` — makes it installable
- `service-worker.js` — caches the app shell for offline use
- `icon-192.png`, `icon-512.png` — app icons

## Deploy to GitHub Pages (same pattern as your other trackers)
1. Create a new repo (or a folder in an existing one), e.g. `Service-Stack`.
2. Push all 5 files to the repo root — keep them all in the same folder,
   the relative paths in index.html/manifest.json depend on that.
3. In the repo Settings → Pages, set the source to the branch/folder
   you pushed to.
4. Visit `https://<your-username>.github.io/Service-Stack/` — Chrome
   and Safari will offer "Add to Home Screen" / an install icon in
   the address bar.

## Shared audit log data (Firebase)
The Daily Audit Log now writes to the `lbcamp-79927` Firebase project
(Firestore, collection `audit_logs`), so every shift lead's submission
shows up live for everyone with the link — same pattern as your Soft
Skills KPI Tracker. It falls back automatically, in order:
1. Firebase Firestore (used on GitHub Pages / any normal browser)
2. `localStorage` (only if Firebase can't load — fully offline)

### One-time setup: open the Firestore rules
Since this app has no login, Firestore needs rules that allow
reads/writes without authentication. In the Firebase console for
`lbcamp-79927` → **Firestore Database → Rules**, use:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /audit_logs/{doc} {
      allow read, write: if true;
    }
  }
}
```

This is fine for an internal tool only your leads have the link to,
but it does mean anyone with the Firebase project ID could technically
read/write that collection — don't put anything sensitive in it.
