# Dheerajnag Nelanutala — personal website

Personal portfolio and writing site, published at [ndnag.com](https://ndnag.com).

## Editing the site

Use the website editor at [ndnag.com/admin](https://ndnag.com/admin/). Decap Turbo saves content to the `main` branch; GitHub Pages then builds and publishes the site.

### Articles

- Create and edit articles in **Articles** in the website editor.
- Each article has a title, publish date, short introduction, optional cover image, and Markdown body.
- You are credited by default. Add one or more contributors with optional profile links in the **Contributors** field; credits appear on the article, article listing, and home feature.
- Search the article list by title or short introduction.
- New articles are marked as published by default. The home page features the newest published article, and `/articles/` lists the full collection.
- Article files are stored in `_posts/`.

### Projects and products

- Create and edit entries in **Projects & Products**.
- The **Project or product link** field is stored as `external_url`; Jekyll reserves `url` for the page's own address.
- Upload a card illustration or use the built-in graphic. Set the background and accent colors with the picker or by entering hex values.
- Lower display-order numbers appear first. Entries appear on both the home page and `/selected-work/`.
- Project files are stored in `_projects/`.

### Selected work

- Add, edit, reorder, or remove case studies in **Selected Work** in the website editor.
- Each entry can include a short introduction, the question, challenge, approach, work delivered, and impact. Empty sections are omitted from the page, so the structure can flex to fit each story.
- The first three case studies appear as short previews; readers can expand each one or show the remaining entries.
- Lower display-order numbers appear first. Selected work appears before Tools & Products on `/selected-work/`.
- Case study files are stored in `_selected_work/`.

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
- `_selected_work/` — editable selected-work case studies
- `assets/css/main.scss` — site styling
- `admin/config.yml` — website editor fields and defaults
