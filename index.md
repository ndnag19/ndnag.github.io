---
layout: single
title: false
classes: wide home-page
permalink: /
author_profile: false
---

<section class="home-hero" aria-labelledby="home-title">
  <div class="home-hero__copy">
    <p class="eyebrow"><span class="eyebrow__dot" aria-hidden="true"></span> Healthcare · strategy · finance · ideas</p>
    <h1 id="home-title">Good work starts with <em>better questions.</em></h1>
    <p class="home-hero__lead">Hi, I’m Dheerajnag. I work across healthcare, finance, and strategy—and I like making complex things a little easier to understand, use, and act on.</p>
    <div class="home-hero__actions">
      <a class="button button--solid" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
      <a class="button button--quiet" href="#notes">Read my notes <span aria-hidden="true">↗</span></a>
    </div>
    <p class="home-hero__aside">A home for things I’ve worked on, things I’m learning, and the occasional useful tool.</p>
  </div>
  <div class="home-hero__art">
    <img src="/assets/images/dheerajnag-profile.png" alt="Dheerajnag Nelanutala, wearing glasses and a dark suit" width="680" height="680" fetchpriority="high">
    <div class="art-note"><span class="art-note__mark" aria-hidden="true">✳</span><span>Curious by<br>default</span></div>
  </div>
</section>

<section class="home-section work-section" id="work" aria-labelledby="work-title">
  <div class="section-heading">
    <div><p class="eyebrow">Selected work</p><h2 id="work-title">Useful things, built with care.</h2></div>
    <a class="text-link" href="/selected-work/">See all work <span aria-hidden="true">↗</span></a>
  </div>
  {% assign projects = site.projects | sort: "order" %}
  <div class="work-grid">
    {% for project in projects limit:3 %}
      <article class="work-card work-card--{{ project.tone }}">
        <div class="work-card__top"><span class="work-card__type">{{ project.category }}</span><span class="work-card__number">0{{ forloop.index }}</span></div>
        <div class="work-card__symbol work-card__symbol--{{ project.symbol }}" aria-hidden="true">
          {% if project.symbol == "pan" %}<span></span><span></span><span></span><span></span>
          {% elsif project.symbol == "gantt" %}<span></span><span></span><span></span><span></span>
          {% else %}<span>↗</span><span>↘</span><span>→</span>{% endif %}
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.excerpt }}</p>
        <a class="text-link" href="{{ project.url }}" target="_blank" rel="noopener noreferrer">{{ project.link_label }} <span aria-hidden="true">↗</span></a>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-section notes-section" id="notes" aria-labelledby="notes-title">
  <div class="notes-card">
    <div class="notes-card__copy">
      <p class="eyebrow">A note I’m thinking through</p>
      {% assign featured_article = site.posts.first %}
      {% if featured_article %}
        <h2 id="notes-title">{{ featured_article.title }}</h2>
        <p>{{ featured_article.excerpt | strip_html | strip }}</p>
        <a class="button button--outline" href="{{ featured_article.url | relative_url }}">Read this note <span aria-hidden="true">↗</span></a>
      {% else %}
        <h2 id="notes-title">Ideas, made useful.</h2>
        <p>Notes on healthcare, investing, analysis, and the tools that help us think.</p>
        <a class="button button--outline" href="/articles/">Browse notes <span aria-hidden="true">↗</span></a>
      {% endif %}
    </div>
    <div class="notes-card__visual" aria-hidden="true">
      <span class="notes-card__sun"></span>
      <span class="notes-card__axis notes-card__axis--x"></span>
      <span class="notes-card__axis notes-card__axis--y"></span>
      <span class="notes-card__bar notes-card__bar--one"></span>
      <span class="notes-card__bar notes-card__bar--two"></span>
      <span class="notes-card__bar notes-card__bar--three"></span>
      <span class="notes-card__range"></span>
      <span class="notes-card__caption">Look closer<br>at the signal</span>
    </div>
  </div>
</section>

<section class="home-section about-section" id="about" aria-labelledby="about-title">
  <div class="about-section__intro">
    <p class="eyebrow">A little about me</p>
    <h2 id="about-title">Work is part of the picture. Curiosity is the thread.</h2>
  </div>
  <div class="about-section__body">
    <p>I’ve spent close to five years working with healthcare and biopharma companies on commercial strategy, due diligence, and investment questions. Before that, I studied engineering at NIT Tiruchirappalli; these days I’m pursuing an MBA at IIMA.</p>
    <p>Outside the day job, I’m drawn to healthcare investing, productivity systems, and tools that make everyday work feel a little more thoughtful. This site is where those interests can sit together.</p>
    <a class="text-link" href="/about/">More about me <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="home-contact" id="contact" aria-labelledby="contact-title">
  <div><p class="eyebrow">Say hello</p><h2 id="contact-title">Good conversations start somewhere.</h2></div>
  <div class="home-contact__links">
    <a href="https://www.linkedin.com/in/ndnag/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
    <a href="https://www.instagram.com/ndnag19/" target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
  </div>
</section>
