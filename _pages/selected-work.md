---
title: "Work & Projects"
layout: single
classes:
  - centered-page
  - projects-page
permalink: /selected-work/
---

I work on questions where the answer depends on more than a polished spreadsheet: which assumptions hold up, what could change the decision, and what a team should do next. I also build small tools that make repetitive work easier.

## Selected work

{% assign selected_work = site.selected_work | sort: "order" %}
<div class="case-study-list">
  {% for item in selected_work %}
    <article class="case-study">
      <header class="case-study__header">
        <div class="case-study__heading">
          {% if item.context %}<p class="eyebrow">{{ item.context }}</p>{% endif %}
          <h3>{{ item.title }}</h3>
          {% if item.summary %}<p class="case-study__summary">{{ item.summary }}</p>{% endif %}
        </div>
        <span class="case-study__number" aria-hidden="true">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span>
      </header>
      <dl class="case-study__details">
        {% if item.question %}<div><dt>The question</dt><dd>{{ item.question | markdownify }}</dd></div>{% endif %}
        {% if item.challenge %}<div><dt>The challenge</dt><dd>{{ item.challenge | markdownify }}</dd></div>{% endif %}
        {% if item.approach %}<div><dt>Approach</dt><dd>{{ item.approach | markdownify }}</dd></div>{% endif %}
        {% if item.solution %}<div><dt>What I delivered</dt><dd>{{ item.solution | markdownify }}</dd></div>{% endif %}
        {% if item.impact %}<div class="case-study__impact"><dt>Impact</dt><dd>{{ item.impact | markdownify }}</dd></div>{% endif %}
      </dl>
    </article>
  {% endfor %}
</div>

<section class="projects-listing" aria-labelledby="projects-title">
  <div class="section-heading">
    <div><p class="eyebrow">Tools & products</p><h2 id="projects-title">Small tools, useful by design.</h2></div>
  </div>
  {% assign projects = site.projects | sort: "order" %}
  <div class="work-grid work-grid--listing">
    {% for project in projects %}
      <article class="work-card work-card--{{ project.tone }}" style="{% if project.card_background %}--card-background: {{ project.card_background }};{% endif %}{% if project.card_accent %}--card-accent: {{ project.card_accent }};{% endif %}">
        <div class="work-card__top"><span class="work-card__type">{{ project.category }}</span><span class="work-card__number">0{{ forloop.index }}</span></div>
        <div class="work-card__symbol work-card__symbol--{{ project.symbol }}" aria-hidden="true">
          {% if project.card_image %}<img src="{{ project.card_image | relative_url }}" alt="">
          {% elsif project.symbol == "pan" %}<span></span><span></span><span></span><span></span>
          {% elsif project.symbol == "gantt" %}<span></span><span></span><span></span><span></span>
          {% else %}<span>↗</span><span>↘</span><span>→</span>{% endif %}
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.excerpt }}</p>
        <a class="text-link" href="{{ project.external_url }}" target="_blank" rel="noopener noreferrer">{{ project.link_label }} <span aria-hidden="true">↗</span></a>
      </article>
    {% endfor %}
  </div>
</section>
