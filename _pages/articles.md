---
title: "Notes & Articles"
layout: single
permalink: /articles/
---

Ideas I’m working through, lessons from the field, and useful ways to think about analysis. I’ll keep adding to this collection as I learn.

<div class="article-list">
  {% for post in site.posts %}
    <article class="article-list__item">
      <p class="eyebrow">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      {% if post.excerpt %}<p>{{ post.excerpt | strip_html | strip }}</p>{% endif %}
      <a class="text-link" href="{{ post.url | relative_url }}">Read the article <span aria-hidden="true">↗</span></a>
    </article>
  {% endfor %}
</div>
