# Leadership Manual Integration — File Placement

I verified all of this with a real `npm install && npm run build` (and `npx oxlint`)
in a clone of your repo — it compiles clean. Here's where each file goes in
`Arlo-B213/Leadership-Assessment`:

| File here | Goes to (replaces existing) |
|---|---|
| `scenarios.js` | `src/data/scenarios.js` |
| `trainingModules.js` | `src/data/trainingModules.js` (**new file**) |
| `Manual.jsx` | `src/pages/Manual.jsx` (**new file**) |
| `App.jsx` | `src/App.jsx` |
| `Layout.jsx` | `src/components/Layout.jsx` |

## What changed

- **`scenarios.js`** — added 3 new hospitality/food-court scenarios (s6-s8:
  an 86'd item mid-rush, a cashier close to breaking, a VIP table's wrong
  course) in the exact same branching format as your existing 5. This also
  fixed a latent escaping bug in the existing file (`isn\\'t` had a doubled
  backslash in several places, which is invalid JS and would fail a build —
  worth knowing in case that file gets hand-edited again).
- **`trainingModules.js`** (new) — the Module 1 content (scripting matrix,
  engagement mechanics, dual-track growth) as structured data, same pattern
  as your `styles.js`. Modules 2 and 3 are placeholder `null`s — dropping
  real content into this one file is all that's needed to light them up on
  the `/manual` page, no page code changes required.
- **`Manual.jsx`** (new) — the Leadership Manual page, styled to match your
  existing cards/tables/typography exactly (same slate/indigo palette,
  same `rounded-xl border border-slate-200` card style as `TeamPage.jsx`
  and `ScenarioList.jsx`).
- **`App.jsx`** — added the `/manual` route.
- **`Layout.jsx`** — added "Leadership Manual" to the Tools dropdown.

## What I deliberately did NOT build

Your app already has two things that would have been duplicated:
- **The 20-question Assessment + 5 Styles system** already does what an
  "archetype quiz" would do — better, with real scoring and a roadmap.
- **Practice Scenarios** (`/practice`) already does what a "situational
  quiz" would do — branching choices, a complication, coached feedback.
  So instead of a second quiz system, the 3 new scenarios above extend
  *that* feature with hospitality-specific content.

## Next steps (not yet built)
- **Pre-Shift Builder** — a daily tool, still to build as a new page.
- **Daily Audit Log** — should write to Firestore via `src/utils/db.js`
  the same way results/teams/feedback already do, and its "non-negotiables
  check" should pull from `Team Standards` (already built on `/team`)
  instead of a hardcoded list — so whatever standards a manager actually
  sets there show up automatically in the audit log. Say the word and
  I'll build these next, verified the same way (clone, build, lint).

## To deploy
```
git pull                     # make sure you're current
# copy the files above into place per the table
git add .
git commit -m "Add Leadership Manual + hospitality practice scenarios"
git push
```
Your existing GitHub Actions / Vercel auto-deploy will pick it up from there.
