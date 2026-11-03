# Dang Yonghao · 党永浩

A lightweight, bilingual academic homepage for GitHub Pages. It is built with plain HTML, CSS, and JavaScript; there is no build step or dependency install.

## Preview locally

Open `index.html` in a browser, or serve this folder with any static file server. For example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository for the site. To use a project URL such as `https://USERNAME.github.io/REPOSITORY/`, upload the *contents* of this package to the repository root (so `index.html` is at the root, not nested in another folder). For a user site, name the repository `USERNAME.github.io`.
2. Commit and push the files to the repository's default branch.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the default branch and the **/(root)** folder, then save.
4. Wait for the Pages deployment to finish. GitHub will show the published address in the Pages settings.

All site assets and links are relative, so the homepage works under a repository subpath. `.nojekyll` is included to let GitHub Pages serve files without Jekyll processing. This package is source only; it does not publish the site or configure a domain.

## Update the content

- Edit the Chinese and English copy in `content.js`.
- The homepage portrait is stored at `assets/portrait.jpg`; replace it only with an image approved for public release and update the bilingual alt text in `content.js` if needed.
- Publication title, venue, year, and DBLP record links live in the same file. The complete DBLP journal and conference list is included; `CONTENT_SOURCES.md` explains its scope and verification sources.
- Research-direction images are in `assets/` and referenced from `content.js`. Replace only with materials approved for public release, and keep filenames or update the corresponding entries in `content.js`.
- Where a public project image or video has not been verified, the page intentionally shows an asset placeholder. Replace it only with an approved, accurate image or a verified public video embed; do not treat the placeholder as a demo.
- Check both language versions and a narrow mobile viewport before publishing.

## Privacy and attribution

The package excludes personal details and internal project identifiers, budgets, screenshots, and embedded presentation videos. The portrait and three research-direction images were supplied by the researcher; see `CONTENT_SOURCES.md`. Verify all copy and permissions before making changes public.

## Package contents

`index.html`, `styles.css`, `main.js`, `content.js`, `assets/`, `CONTENT_SOURCES.md`, and `.nojekyll` are the complete deployable site.
