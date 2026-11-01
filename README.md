# Dheerajnag Nelanutala — personal website

Personal portfolio and writing site, published at [ndnag.com](https://ndnag.com).

## Editing the site

Use the website editor at [ndnag.com/admin](https://ndnag.com/admin/). Decap Turbo saves content to the `main` branch; GitHub Pages then builds and publishes the site.

### Articles

- Create and edit articles in **Articles** in the website editor.
- Each article has a title, publish date, short introduction, optional cover image, and Markdown body.
- New articles are marked as published by default. The home page features the newest published article, and `/articles/` lists the full collection.
- Article files are stored in `_posts/`.

### Projects and products

- Create and edit entries in **Projects & Products**.
- The **Project or product link** field is stored as `external_url`; Jekyll reserves `url` for the page's own address.
- Lower display-order numbers appear first. Entries appear on both the home page and `/selected-work/`.
- Project files are stored in `_projects/`.

### Images

Upload images through the website editor. They are stored in `assets/images/uploads/` and can be inserted into article content.

## Local preview

The site uses Jekyll through the `github-pages` gem. With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`.

## Publishing

Changes pushed to `main` trigger the GitHub Pages build and deployment. Check the repository's **Actions** tab for the build and deployment status.

## Main folders and files

- `index.md` — home page and featured content
- `_pages/` — About, articles, and Work & Projects pages
- `_posts/` — articles
- `_projects/` — project and product cards
- `assets/css/main.scss` — site styling
- `admin/config.yml` — website editor fields and defaults
