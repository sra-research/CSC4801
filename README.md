# CSC4801 — AI-assisted Software Engineering

The course website for **CSC4801: AI-assisted Software Engineering**. A static
site built for GitHub Pages, with no build step and no dependencies.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Course introduction: title and logistics, teaching staff (`#staff`), and the full Tue/Thu schedule (`#schedule`) |
| `project.html` | Team project — an empty leaderboard template for posting competition standings |

## Structure

```
.
├── index.html  project.html
├── assets/
│   ├── css/style.css          # design system (tokens, layout, components)
│   ├── js/main.js             # mobile nav, scroll reveal, avatars, year stamp
│   ├── favicon-32.png         # browser tab icon — the university crest
│   ├── apple-touch-icon.png   # 180px home-screen icon (flattened on white)
│   ├── uni-logo.png           # in-page brand mark — the university crest
│   ├── source/                # original crest + school logo, unmodified
│   └── slides/*.pptx          # lecture decks (gitignored, see Notes)
├── .nojekyll                  # serve assets/ as-is (skip Jekyll processing)
└── README.md
```

Fonts load from Google Fonts; everything else is local.

## Updating the schedule

The schedule is a plain table in `index.html` — two rows per week sharing one
row-spanning week number. To post a deck after class, replace that session's
placeholder dash in the Slides column:

```html
<td class="sched__slides">&mdash;</td>
<!-- becomes -->
<td class="sched__slides"><a href="assets/slides/01_LLMs.pptx" download>&darr; Slides</a></td>
```

The Assessments column lists quiz dates alongside HW release dates and deadlines.
Project rows carry `class="is-project"` on the `<tr>`,
which draws a red left edge.

## Updating the leaderboard

`project.html` holds eight placeholder rows. Replace each `lb__empty` cell with
real cells for team, members, score, and notes; add or delete rows freely. The
top three ranks automatically take a coloured left edge.

## Design

GitHub Primer light theme on a neutral base: white canvas, `#F6F8FA` alt fills,
hairline `#D1D9E0` borders, `#1F2328` ink, and 6px radii. Inter carries both
display and body; JetBrains Mono carries labels, dates, and data. The university
crest serves as both the favicon and the in-page brand mark, set 38px tall with a
hairline divider before the course title.

Color comes from Primer's syntax palette and is spent the way an editor spends it
— to mark a *kind* of thing, never as decoration. Accents (`--syn-*`) stay
saturated enough to read as small text; their paired fills (`--tint-*`) are
deliberately faint, roughly 8–10% of the accent over white, because a hue that
reads as a quiet hint on a badge turns garish across a large area. Color is always
redundant with a text label, and every text/background pair clears WCAG AA.

## Teaching staff

- **Jinsheng Ba** — Instructor
- **Xiaoyuan Liu** — Teaching Assistant
- **Tong Zhu** — Teaching Assistant
- **Haoyi Yu** — Undergraduate TF
- **Geyu Liu** — Undergraduate TF

## Publishing to GitHub Pages

1. Push this folder to the repository's default branch.
2. In **Settings → Pages**, set the source to that branch, root (`/`).
3. The `.nojekyll` file ensures the `assets/` directory is served unmodified.

## Notes

- **Lecture decks** — `assets/slides/` is gitignored, so the decks are not
  published yet. Drop that rule from `.gitignore` when you are ready to commit
  them, then fill in the Slides column week by week.
- **Calendar dates** — generated from a Tue/Thu meeting pattern starting the week
  of Sep 7, 2026 (first class Sep 8, last Dec 17), excluding CUHK-Shenzhen's
  National Day recess (Oct 1–7). The official course site is authoritative if a
  date differs.
- **Location** — still `TBD`, flagged with a `.tpl` badge in the overview.
