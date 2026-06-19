# OP3DSG project page

Standalone, nerfies-style paper page served at **https://k2room.github.io/OP3DSG/**.

It is a plain static page: `index.html` has **no Jekyll front matter**, so Jekyll
copies the whole `OP3DSG/` folder to the built site verbatim. Nothing else in the
repo needs to change.

## Files
```
OP3DSG/
├── index.html              ← page content (edit the `<!-- EDIT -->` spots)
└── static/
    ├── css/index.css       ← styles
    ├── js/index.js         ← BibTeX copy button, smooth scroll
    ├── images/
    │   ├── teaser.svg       ← replace with your teaser (teaser.png / .gif)
    │   └── pipeline.svg     ← replace with your method figure
    └── videos/              ← put .mp4 files here if you add a video
```

## To customize
1. Open `index.html` and edit every block marked `<!-- EDIT -->`
   (title, authors, venue, Paper/arXiv/Code links, abstract, BibTeX).
2. Drop your real figures into `static/images/` and update the `src=` paths
   (or just overwrite `teaser.svg` / `pipeline.svg`).
3. Commit & push — GitHub Pages rebuilds automatically.

## Preview locally
From the repo root:
```bash
bundle exec jekyll serve
# then open http://localhost:4000/OP3DSG/
```
Or, since the page is fully standalone, just open `OP3DSG/index.html`
directly in a browser.

## Reusing for other papers
Copy this folder to a new name, e.g. `cp -r OP3DSG MA3DSG`, then edit the content.
It will be live at `https://k2room.github.io/MA3DSG/`.
