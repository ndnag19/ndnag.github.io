---
title: "Work & Projects"
layout: single
classes:
  - centered-page
  - projects-page
permalink: /selected-work/
---

I work on questions where the answer depends on more than a polished spreadsheet: which assumptions hold up, what could change the decision, and what a team should do next. I also build small tools that make repetitive work easier.

## Selected projects

{% assign projects = site.projects | sort: "order" %}
<div class="work-grid work-grid--listing">
  {% for project in projects %}
    <article class="work-card work-card--{{ project.tone }}">
      <div class="work-card__top"><span class="work-card__type">{{ project.category }}</span><span class="work-card__number">0{{ forloop.index }}</span></div>
      <div class="work-card__symbol work-card__symbol--{{ project.symbol }}" aria-hidden="true">
        {% if project.symbol == "pan" %}<span></span><span></span><span></span><span></span>
        {% elsif project.symbol == "gantt" %}<span></span><span></span><span></span><span></span>
        {% else %}<span>↗</span><span>↘</span><span>→</span>{% endif %}
      </div>
      <h3>{{ project.title }}</h3>
      <p>{{ project.excerpt }}</p>
      <a class="text-link" href="{{ project.external_url }}" target="_blank" rel="noopener noreferrer">{{ project.link_label }} <span aria-hidden="true">↗</span></a>
    </article>
  {% endfor %}
</div>

## Selected work

### Commercial strategy across 18 markets

Advised senior leadership at a top pharmaceutical company on in-house versus partnership choices across 18 markets and 177 brands. The analysis identified opportunities for approximately $50M in operating-income uplift.

### Healthcare M&A and due diligence

Contributed to more than ten healthcare due diligence engagements, building forecasts and valuation models to assess opportunities and risks across transactions exceeding $1B in aggregate value.

### A biotech’s launch and partnership decision

Helped a German biotech assess launch requirements across the US, Europe, and Japan, and compare independent commercialization with partnership options. The work informed a launch plan that reduced projected cash burn by 20%.

### Tools for faster commercial analysis

Helped build reusable forecasting and commercial planning tools, including a go-to-market accelerator that reduced project turnaround time by 30%.
