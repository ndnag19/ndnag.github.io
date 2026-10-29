---
layout: single
title: false
classes:
  - wide
  - home-page
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
    <a class="social-link" href="https://www.linkedin.com/in/ndnag/" target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn">
      <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      <span>LinkedIn</span>
    </a>
    <a class="social-link" href="https://x.com/ndnag19" target="_blank" rel="noopener noreferrer" aria-label="Follow me on X">
      <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19 9.46 12.504H16.595l-5.8-7.584-6.636 7.584h-3.68l8.6-9.83L0 1.153h7.595l5.242 6.93zm-1.29 19.49h2.039L6.486 3.24H4.298z"/></svg>
      <span>X</span>
    </a>
    <a class="social-link" href="https://www.instagram.com/nd_nag/" target="_blank" rel="noopener noreferrer" aria-label="Follow me on Instagram">
      <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4C20.5 2 22 3.5 22 7.8v8.4c0 4.3-1.5 5.8-5.8 5.8H7.8C3.5 22 2 20.5 2 16.2V7.8C2 3.5 3.5 2 7.8 2Zm.2 2C4.9 4 4 4.9 4 8v8c0 3.1.9 4 4 4h8c3.1 0 4-.9 4-4V8c0-3.1-.9-4-4-4H8Zm4 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/></svg>
      <span>Instagram</span>
    </a>
    <a class="social-link social-link--email" href="mailto:n.dheerajnag@outlook.com" aria-label="Send me an email">
      <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.75h18a1.75 1.75 0 0 1 1.75 1.75v9a1.75 1.75 0 0 1-1.75 1.75H3A1.75 1.75 0 0 1 1.25 16.5v-9A1.75 1.75 0 0 1 3 5.75Zm0 1.75v.22l9 6.04 9-6.04V7.5H3Zm18 2.32-8.51 5.71a.88.88 0 0 1-.98 0L3 9.82v6.68h18V9.82Z"/></svg>
      <span>E-mail</span>
    </a>
  </div>
</section>
