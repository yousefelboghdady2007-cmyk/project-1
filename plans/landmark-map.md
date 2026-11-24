# Landmark map — planned structure

All four pages share the same shell so navigation and footer remain consistent.

```text
body
├── a.skip-link  → #main-content
├── header.site-header
│   ├── a.brand
│   └── nav[aria-label="Main navigation"]
│       └── ul > li > a (Home, Course staff, Schedule, Registration)
├── main#main-content
│   └── page-specific content
└── footer.site-footer
```

## Page-specific landmarks
- **index.html:** main > hero section + content-grid (article + aside)
- **staff.html:** main > page-intro + content-grid (article + aside)
- **schedule.html:** main > page-intro + timetable section + notes section
- **register.html:** main > page-intro + registration section containing the form

# Heading outlines

## index.html
- H1: Web Design & Development
  - H2: About this course
  - H2: Learning outcomes
  - H2: Weekly teaching sessions
  - H2: Quick information (aside)
    - H3: Useful pages
    - H3: External learning resource

## staff.html
- H1: Course staff
  - H2: Teaching team
    - H3: Dr. Hend Shaaban
    - H3: TA Fatma El-Sayed
  - H2: Staff responsibilities
  - H2: Contact and support (aside)
    - H3: Before asking for help

## schedule.html
- H1: Weekly schedule
  - H2: Class timetable
  - H2: Schedule notes

## register.html
- H1: Student registration
  - H2: Registration form

# Notes
The heading outline is intentionally hierarchical. A heading level is selected for its document structure, not its visual size.
