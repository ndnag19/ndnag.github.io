---
title: "Notes & Articles"
layout: single
classes:
  - centered-page
permalink: /articles/
---

Ideas I’m working through, lessons from the field, and useful ways to think about analysis. I’ll keep adding to this collection as I learn.

<form class="article-search" role="search" data-article-search>
  <label class="screen-reader-text" for="article-search-input">Search articles by title or introduction</label>
  <input id="article-search-input" name="q" type="search" placeholder="Search articles" autocomplete="off" aria-controls="article-search-results">
  <button class="button button--solid" type="submit">Search</button>
</form>
<p class="article-search__status" data-search-status aria-live="polite"></p>
<p class="article-search__empty" data-search-empty hidden>No articles match “<span data-search-query></span>”. Try another search.</p>

<div class="article-list" id="article-search-results">
  {% for post in site.posts %}
    <article class="article-list__item" data-article-item data-search="{{ post.title | append: ' ' | append: post.excerpt | strip_html | normalize_whitespace | escape }}">
      <p class="eyebrow">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      {% include article-byline.html post=post %}
      {% if post.excerpt %}<p>{{ post.excerpt | strip_html | strip }}</p>{% endif %}
      <a class="text-link" href="{{ post.url | relative_url }}">Read the article <span aria-hidden="true">↗</span></a>
    </article>
  {% endfor %}
</div>
<script src="{{ '/assets/js/article-search.js' | relative_url }}" defer></script>
