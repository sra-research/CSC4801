# CSC4801 — AI-assisted Software Engineering

The course website for **CSC4801: AI-assisted Software Engineering**. A static
site built for GitHub Pages. The home page is a single-scroll course hub —
overview, the teaching staff, a dated calendar of the fourteen weeks and their
two sessions each (with lecture decks attached inline), and grading — and two
focused pages carry the graded work.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Course hub: overview, schedule (`#schedule`), grading (`#grading`), and staff (`#staff`), all reachable from the top nav. Lecture decks download directly from their calendar entry |
| `assignments.html` | The three homeworks (agent from scratch → MCP & Skills → requirements critic + traceability) |
| `project.html` | Team capstone — the `FP-*` specification, milestones, and rubric |

The top navigation lists Overview, Staff, Schedule, and Grading as in-page
anchors into `index.html`, in the same order the sections appear on the page;
only **Assignments** and **Project** are standalone pages. Section headings use canonical noun phrases — *Course
Overview*, *Course Goals*, *Course Schedule*, *Course Grading*, *Course Staff*,
*Course Assignments*, *Course Project*, *Project Requirements/Milestones/Grading*
— rather than expressive sentences.

## Structure

```
.
├── index.html  assignments.html  project.html
├── assets/
│   ├── css/style.css          # design system (tokens, layout, components)
│   ├── js/main.js             # nav, scroll reveal, grade bars, agent-loop, avatars
│   ├── favicon-32.png         # browser tab icon — the university crest
│   ├── apple-touch-icon.png   # 180px home-screen icon (flattened on white)
│   ├── school-logo.png        # in-page brand mark — School of Data Science
│   ├── source/                # original crest + school logo, unmodified
│   └── slides/*.pptx          # 17 lecture decks
├── .nojekyll             # serve assets/ as-is (skip Jekyll processing)
└── README.md
```

No build step and no dependencies — plain HTML/CSS/JS. Fonts load from Google
Fonts; everything else is local.

## Design

GitHub-style light theme on a neutral base: white canvas, `#F6F8FA` alt fills,
hairline `#D1D9E0` borders, `#1F2328` ink, and 6px radii. Inter carries both
display and body; JetBrains Mono carries labels, dates, and data.

Two institutional marks are used, deliberately in different places. The
**university crest** is the browser-tab favicon and home-screen icon, where a
small full-color emblem reads well. The **School of Data Science logo** is the
in-page brand mark in the nav and footer, set 38px tall with a hairline divider
before the course identity, which reads `CSC4801` over *AI-assisted Software
Engineering*. Its source PNG shipped with a design-guide grid and
construction circles baked into the background; the version in `assets/` has
those stripped to transparency, with the originals kept in `assets/source/`.

Color is borrowed from GitHub's Primer syntax palette and spent the way an editor
spends it — to mark a *kind* of thing, never as decoration. The tokens live in
`:root` as `--syn-*` (accents, light), `--tint-*` (fills), and `--dk-*` (dark
panels). Accents stay saturated enough to read as small text; the paired fills
are deliberately faint — roughly 8–10% of the accent over white, giving them a
channel spread near the neutral greys — because a hue that reads as a quiet hint
on a badge turns garish across a large card.

| Token | Marks |
| --- | --- |
| `--syn-num` constant blue | lectures, `FP-*` requirement IDs, note callouts, the agent-panel line numbers |
| `--syn-fn` entity purple | exercises, important callouts, the agent-panel function names |
| `--syn-key` keyword red | the calendar date stripe, deadlines, project weeks |
| `--syn-str` string blue | file paths and inline `code` |
| `--syn-var` variable orange | quizzes |
| `--syn-tag` tag green | guest speakers, verification and security |
| `--link` | prose links (chrome links stay ink, so blue always means "prose link") |

Three devices do the visual work. The agent-loop panel is a light editor pane —
a titlebar over rows of line number, function name, and trailing comment — with
the executing row marked by a blue left gutter bar and a pale blue fill, the way
an editor marks the current line. The calendar gives each week a tear-off date
cell with a red header stripe, like a desk calendar page, and stacks that week's
two sessions beside it separated by a hairline; on the three project weeks the
cell body inverts to ink while the red stripe stays, and every session carries a
color-coded kind badge (Lecture / Exercise / Guest Speaker / Project). The grading
bars all share one red fill, matching that date stripe, since the components are
parts of a single total rather than different kinds of thing — so the weights
compare on length alone.

The only dark surface on the site is the `.well` code block on the project page,
which uses the GitHub dark syntax tokens (`--dk-*`).

Color is always redundant with a text label, never the sole carrier of meaning.
Every text/background pair clears WCAG AA, including the tinted labels. Layout is
responsive and respects `prefers-reduced-motion`. Profile photos are deterministic
grayscale SVG avatars generated in `main.js`.

## Teaching team

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

- **Grading weights** — the course split on `index.html` is `60 / 30 / 10`
  (project / assignments / quizzes). The capstone's internal rubric on
  `project.html` is a separate `40 / 40 / 20`.
- **Calendar dates** — the calendar is generated from a Tue/Thu meeting pattern
  starting the week of Sep 7, 2026 (first class Sep 8, last Dec 10). Submission
  links live on the official course site, which is authoritative if a date differs.
- **Location** — still `TBD`, flagged with a `.tpl` badge in the overview.
