---
permalink: /
title: "Seoyul Oh"
excerpt: "Computer Science Ph.D. candidate at UIUC researching AI for networked systems, including reinforcement learning, reliable infrastructure agents, and decentralized satellite networks."
redirect_from:
  - /about/
  - /about.html
---

<section class="intro" id="about" aria-labelledby="name">
  <div class="intro-copy">
    <div class="intro-title">
      <p class="profile-focus">AI for Networked Systems</p>
      <h1 id="name">Seoyul Oh</h1>
    </div>
    <div class="intro-credentials">
      <p class="intro-role">Ph.D. Candidate <span aria-hidden="true">|</span> <a href="https://siebelschool.illinois.edu/" target="_blank" rel="noopener noreferrer">Computer Science, UIUC</a></p>
    </div>
    <div class="biography">
      <p>I’m a Computer Science Ph.D. candidate at the <a href="https://siebelschool.illinois.edu/" target="_blank" rel="noopener noreferrer">University of Illinois Urbana-Champaign</a>, co-advised by <a href="https://fyy.cs.illinois.edu/" target="_blank" rel="noopener noreferrer">Francis Y. Yan</a> and <a href="https://deepakv.web.illinois.edu/" target="_blank" rel="noopener noreferrer">Deepak Vasisht</a>.</p>
      <p>My research focuses on <strong>AI for networked systems</strong>. I study the limits of reinforcement learning for system optimization and develop AI agents for reliable infrastructure management. I have also designed decentralized satellite networks.</p>
    </div>
    <div class="intro-contact">
      <a class="profile-email" href="mailto:{{ site.author.email }}" target="_blank" rel="noopener noreferrer">{% include site-icon.html type='mail' %}{{ site.author.email }}</a>
      <div class="profile-links" aria-label="Professional profiles">
        <a href="{{ site.author.googlescholar }}" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer">{% include profile-icon.html type='google-scholar' %}<span class="profile-tooltip" aria-hidden="true">Google Scholar</span></a>
        <a href="https://github.com/{{ site.author.github }}" aria-label="GitHub" target="_blank" rel="noopener noreferrer">{% include profile-icon.html type='github' %}<span class="profile-tooltip" aria-hidden="true">GitHub</span></a>
        <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">{% include profile-icon.html type='linkedin' %}<span class="profile-tooltip" aria-hidden="true">LinkedIn</span></a>
        {% if site.author.twitter %}<a href="https://x.com/{{ site.author.twitter }}" aria-label="Twitter (X)" target="_blank" rel="noopener noreferrer">{% include profile-icon.html type='x-twitter' %}<span class="profile-tooltip" aria-hidden="true">Twitter (X)</span></a>{% endif %}
        <a href="{{ site.author.cv | relative_url }}" aria-label="CV" target="_blank" rel="noopener noreferrer">{% include resource-icon.html type='paper' %}<span class="profile-tooltip" aria-hidden="true">CV</span></a>
      </div>
    </div>
  </div>
  <figure class="profile-picture">
    <img class="profile-photo" src="{{ '/images/profile_me.png' | relative_url }}" alt="Seoyul Oh" width="885" height="1178" fetchpriority="high">
  </figure>
</section>

<section class="content-section section-grid" id="news" aria-labelledby="news-heading">
  <div class="section-heading">
    <h2 id="news-heading">{% include site-icon.html type='news' %}News</h2>
  </div>
  <div>
    <ul class="news-list">
      <li><time datetime="2026-09">Sep 2026</time><p><strong>Rediscovering heuristics: A litmus test for RL in networked systems</strong> was accepted at <a href="https://conferences.sigcomm.org/hotnets/2026/" target="_blank" rel="noopener noreferrer"><strong>HotNets 2026</strong></a></p></li>
      <li><time datetime="2026-09">Sep 2026</time><p><a href="https://arxiv.org/abs/2609.29029" target="_blank" rel="noopener noreferrer"><strong>RIFT</strong></a> was accepted at <a href="https://mlforsystems.org/" target="_blank" rel="noopener noreferrer"><strong>ML for Systems @ NeurIPS 2026</strong></a></p></li>
      <li><time datetime="2026-08">Aug 2026</time><p>Completed my internship at <span class="inline-organization"><img src="{{ '/images/organizations/apple.svg' | relative_url }}" width="18" height="18" alt="" decoding="async"><strong>Apple</strong></span>, working on reliable video streaming over satellite links</p></li>
    </ul>
    <details class="older-news">
      <summary>Earlier updates</summary>
      <ul class="news-list">
        <li><time datetime="2025-12">Dec 2025</time><p><a href="https://drops.dagstuhl.de/storage/01oasics/oasics-vol139-nines2026/OASIcs.NINeS.2026.6/OASIcs.NINeS.2026.6.pdf" target="_blank" rel="noopener noreferrer"><strong>EcoCell</strong></a> was accepted at <a href="https://2026.nines-conference.org/" target="_blank" rel="noopener noreferrer"><strong>NINeS 2026</strong></a></p></li>
        <li><time datetime="2024-09">Sep 2024</time><p><a href="https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-449.pdf" target="_blank" rel="noopener noreferrer"><strong>MP-LEO</strong></a> was accepted at <a href="https://conferences.sigcomm.org/hotnets/2024/" target="_blank" rel="noopener noreferrer"><strong>HotNets 2024</strong></a></p></li>
        <li><time datetime="2023-09">Sep 2023</time><p>Started my Ph.D. in Computer Science at <strong>UIUC</strong></p></li>
      </ul>
    </details>
  </div>
</section>

<section class="content-section" id="publications" aria-labelledby="publications-heading">
  <div class="section-header">
    <h2 id="publications-heading">{% include site-icon.html type='publications' %}Publications</h2>
    <a href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">View on Google Scholar <span aria-hidden="true">↗</span></a>
  </div>
  {% for group in site.data.publications %}
  <div class="publication-group{% if group.highlights %} highlight-group{% endif %}">
    {% unless group.highlights %}<div class="group-label">{{ group.label }}{% if group.note %}<span>{{ group.note }}</span>{% endif %}</div>{% endunless %}
    <div>
      {% for paper in group.papers %}
      <article class="publication{% if group.highlights %} research-highlight{% endif %}{% unless paper.image %} without-figure{% endunless %}"{% if paper.id %} id="{{ paper.id }}" aria-labelledby="{{ paper.id }}-title"{% endif %}>
        <div class="publication-content">
        <div class="publication-meta">
          {% if paper.status %}<span class="venue-badge status-badge">{{ paper.status }}</span>{% else %}<span class="venue-badge">{{ paper.venue }}{% if paper.year %} ’{{ paper.year | modulo: 100 }}{% endif %}</span>{% endif %}
          {% if paper.project %}{% unless paper.title contains paper.project %}<span class="publication-project"><span aria-hidden="true">|</span> {{ paper.project | escape }}</span>{% endunless %}{% endif %}
        </div>
        <h3{% if paper.id %} id="{{ paper.id }}-title"{% endif %}>{{ paper.title | escape }}</h3>
        <p class="authors">{{ paper.authors | escape | replace: 'Seoyul Oh', '<strong>Seoyul Oh</strong>' }}</p>
        {% if paper.links %}
        <div class="paper-links" aria-label="Resources for {{ paper.title | escape }}">
          {% for link in paper.links %}
          {% assign first_character = link.url | slice: 0 %}
          <a href="{% if first_character == '/' %}{{ link.url | relative_url }}{% else %}{{ link.url }}{% endif %}" aria-label="{{ link.label }}: {{ paper.title | escape }}" target="_blank" rel="noopener noreferrer">{% if link.icon %}{% include resource-icon.html type=link.icon %}{% endif %}{{ link.label }}</a>
          {% endfor %}
        </div>
        {% endif %}
        {% if paper.summary %}
        <details class="research-summary">
          <summary aria-label="Read summary: {{ paper.title | escape }}">Read summary <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="m9 5 7 7-7 7"/></svg></summary>
          <div class="summary-content"><p>{{ paper.summary | escape }}</p></div>
        </details>
        {% endif %}
        </div>
        {% if paper.image %}
        <figure class="research-figure">
          <div class="research-image"><img src="{{ paper.image | relative_url }}" alt="{{ paper.image_alt | escape }}" width="{{ paper.image_width }}" height="{{ paper.image_height }}" loading="lazy" decoding="async"></div>
        </figure>
        {% endif %}
      </article>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</section>

<section class="content-section section-grid" id="experience" aria-labelledby="experience-heading">
  <div class="section-heading"><h2 id="experience-heading">{% include site-icon.html type='experience' %}Work experience</h2></div>
  <div>
    <article class="record organization-record">
      <div class="record-heading"><h3 class="record-organization"><img class="organization-logo" src="{{ '/images/organizations/apple.svg' | relative_url }}" width="24" height="24" alt="" loading="lazy" decoding="async"><a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">Apple</a></h3><p class="record-date">May – Aug 2026</p></div>
      <p class="record-role">Software Engineering Intern</p>
      <p class="record-detail">Developed network optimizations for reliable real-time video streaming over direct-to-cell LEO satellite links with limited bandwidth and highly variable network conditions.</p>
    </article>
    <article class="record organization-record">
      <div class="record-heading"><h3 class="record-organization"><img class="organization-logo" src="{{ '/images/organizations/purdue.png' | relative_url }}" width="96" height="96" alt="" loading="lazy" decoding="async"><a href="https://www.purdue.edu/" target="_blank" rel="noopener noreferrer">Purdue University</a></h3><p class="record-date">Aug 2022 – Feb 2023</p></div>
      <p class="record-role">Visiting Researcher</p>
      <p class="record-detail">Host: <a href="https://www.cs.purdue.edu/homes/chunyi/" target="_blank" rel="noopener noreferrer">Chunyi Peng</a></p>
      <p class="record-detail">Researched 5G mobility and connectivity through measurements using cellular-connected drones.</p>
    </article>
  </div>
</section>

<section class="content-section section-grid" id="education" aria-labelledby="education-heading">
  <div class="section-heading"><h2 id="education-heading">{% include site-icon.html type='education' %}Education</h2></div>
  <div>
    <article class="record organization-record">
      <div class="record-heading"><h3 class="record-organization"><img class="organization-logo" src="{{ '/images/organizations/uiuc.svg' | relative_url }}" width="24" height="24" alt="" loading="lazy" decoding="async"><a href="https://siebelschool.illinois.edu/" target="_blank" rel="noopener noreferrer">University of Illinois Urbana-Champaign</a></h3><p class="record-date">Sep 2023 – Present</p></div>
      <p class="record-role">Ph.D. in Computer Science</p>
      <p class="record-detail">Advisors: <a href="https://fyy.cs.illinois.edu/" target="_blank" rel="noopener noreferrer">Francis Y. Yan</a> and <a href="https://deepakv.web.illinois.edu/" target="_blank" rel="noopener noreferrer">Deepak Vasisht</a></p>
    </article>
    <article class="record organization-record">
      <div class="record-heading"><h3 class="record-organization"><img class="organization-logo" src="{{ '/images/organizations/korea.png' | relative_url }}" width="24" height="24" alt="" loading="lazy" decoding="async"><a href="https://www.korea.edu/sites/en/index.do" target="_blank" rel="noopener noreferrer">Korea University</a></h3><p class="record-date">Feb 2023</p></div>
      <p class="record-role">M.S. in Electrical and Computer Engineering</p>
      <p class="record-detail">Advisor: <a href="https://sites.google.com/site/mnclab/home" target="_blank" rel="noopener noreferrer">Sangheon Pack</a></p>
    </article>
    <article class="record organization-record">
      <div class="record-heading"><h3 class="record-organization"><img class="organization-logo" src="{{ '/images/organizations/korea.png' | relative_url }}" width="24" height="24" alt="" loading="lazy" decoding="async"><a href="https://www.korea.edu/sites/en/index.do" target="_blank" rel="noopener noreferrer">Korea University</a></h3><p class="record-date">Feb 2021</p></div>
      <p class="record-role">B.S. in Electrical Engineering</p>
    </article>
  </div>
</section>

<section class="content-section section-grid" id="awards" aria-labelledby="awards-heading">
  <div class="section-heading"><h2 id="awards-heading">{% include site-icon.html type='awards' %}Awards</h2></div>
  <ul class="awards-list">
    <li><span class="record-date">Fall 2026</span><div><h3>International Fellowship</h3><p>American Association of University Women (AAUW) · $25,000</p></div></li>
    <li><span class="record-date">Fall 2025</span><div><h3>Korean Honor Scholarship</h3><p>Ministry of Foreign Affairs, Korea · $1,500</p></div></li>
    <li><span class="record-date">Fall 2025</span><div><h3>KASF–KIA Scholarship</h3><p>Korean American Scholarship Foundation · $2,500</p></div></li>
    <li><span class="record-date">Fall 2022</span><div><h3>International R&D Program Grant</h3><p>Ministry of Science and ICT, Korea · $12,580</p></div></li>
  </ul>
</section>

<section class="content-section section-grid" id="service" aria-labelledby="service-heading">
  <div class="section-heading"><h2 id="service-heading">{% include site-icon.html type='service' %}Teaching & Service</h2></div>
  <div>
    <article class="record">
      <div class="record-heading"><h3><a href="https://cs538.github.io/sp2025/" target="_blank" rel="noopener noreferrer">CS 538: Advanced Computer Networks</a></h3><p class="record-date">Spring & Fall 2025</p></div>
      <p class="record-role">Teaching Assistant · University of Illinois Urbana-Champaign</p>
      <p class="record-detail">Awarded the <strong>Outstanding Teaching Assistant Award</strong> in Spring 2025.</p>
    </article>
    <article class="record">
      <div class="record-heading"><h3>ACM SIGCOMM</h3><p class="record-date">2025 &amp; 2026</p></div>
      <p class="record-role">Artifact Evaluation Committee</p>
    </article>
    <article class="record">
      <div class="record-heading"><h3><a class="text-link" href="https://sites.google.com/view/pacmi/home" target="_blank" rel="noopener noreferrer">ACM SOSP PACMI Workshop</a></h3><p class="record-date">2025</p></div>
      <p class="record-role">Web Chair</p>
    </article>
  </div>
</section>
