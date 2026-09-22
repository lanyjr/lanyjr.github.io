# Maintaining this homepage

The main pages use the custom `folio` layout on the existing Jekyll / GitHub Pages setup. No JavaScript build step or external font service is required. The original Academic Pages theme remains available for legacy pages.

## Content

- `_pages/about.md`: homepage biography and research interests.
- `_config.yml`: contact email, profile information, and site metadata.
- `_publications/`: publications; use `layout: folio` and `prose: true` for the new design.
- `_data/ongoing.yml`: ongoing projects shown below publications.
- `_data/teaching.yml`: teaching experience.
- `_pages/cv.md`: CV content.
- `_data/navigation.yml`: top navigation.
- `assets/css/folio.css`: colors, spacing, responsive layout, and motion.
- `assets/js/folio.js`: theme preference, mobile navigation, and photo viewer.

## Add photographs

Put travel photos in `images/travel/` and teaching photos in `images/teaching/` (create the folders when needed). Use reasonably sized JPEG or WebP images. Replace the empty `[]` in `_data/travel.yml` or `_data/teaching_photos.yml` with entries like this, using your own photo and details:

```yaml
- title: "Photo title"
  image: /images/travel/your-photo.jpg
  alt: "A descriptive sentence about what is in the photograph"
  location: "Place"
  date: "September 2026"
  caption: "A short memory or caption."
```

Each photo opens in a larger viewer; press Escape or Close to return. An empty list shows a quiet placeholder. No sample photos or travel history are published.

## Add ongoing work

Replace `[]` in `_data/ongoing.yml` with:

```yaml
- title: "Project title"
  description: "A short description ready for public sharing."
  # url: "https://example.com/your-project"  # Optional
```

## Preview and publish

With a supported Ruby and Bundler installed, run `bundle install`, then `bundle exec jekyll serve --host 127.0.0.1`. Open the address printed by Jekyll. Keep local caches and generated `_site/` files out of commits.

In GitHub Desktop, review Changes, commit to the current branch, and click Push origin only when you are ready to upload. Whether this publishes the live website depends on the repository's GitHub Pages settings.
