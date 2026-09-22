---
layout: folio
permalink: /
title: "Yijin Ren"
home: true
redirect_from:
  - /about/
  - /about.html
---

<section class="hero" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> FIRST-YEAR PHD STUDENT · COLUMBIA IEOR</p>
    <h1 id="hero-title">Yijin <em>Ren.</em></h1>
    <p class="hero-tagline">Learning at scale.<br>Thinking in gradients.</p>
    <p class="hero-summary">Exploring pre-training, first-order methods,<br class="desktop-break"> and new questions in reinforcement learning.</p>
    <div class="hero-actions"><a class="button button-primary" href="{{ '/publications/' | relative_url }}">Explore my research <span aria-hidden="true">↗</span></a><a class="text-link" href="mailto:{{ site.author.email }}">Get in touch <span aria-hidden="true">↗</span></a></div>
  </div>
  <div class="portrait-composition">
    <svg class="contour-art" viewBox="0 0 480 490" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="1"><ellipse cx="270" cy="240" rx="210" ry="224" transform="rotate(-32 270 240)"/><ellipse cx="270" cy="240" rx="177" ry="194" transform="rotate(-32 270 240)"/><ellipse cx="270" cy="240" rx="144" ry="164" transform="rotate(-32 270 240)"/><ellipse cx="270" cy="240" rx="111" ry="134" transform="rotate(-32 270 240)"/><path d="M24 440L106 356L139 391L205 279L240 291L298 165L345 181L425 38" stroke-dasharray="3 7"/></g></svg>
    <figure class="portrait"><img src="{{ '/images/headshot.png' | relative_url }}" alt="Yijin Ren" width="383" height="586" fetchpriority="high"><figcaption><span>YIJIN REN</span><span>COLUMBIA / IEOR</span></figcaption></figure>
    <span class="portrait-note" aria-hidden="true">x<sub>t+1</sub> = x<sub>t</sub> − η<sub>t</sub> ∇f(x<sub>t</sub>)</span>
  </div>
</section>

<section class="editorial-section" aria-labelledby="about-title">
  <div class="section-label"><span class="section-number">01 / ABOUT</span><h2 id="about-title">A little<br>background.</h2></div>
  <div class="about-copy prose">
    <p>I am a first-year PhD student in the <a href="https://ieor.columbia.edu/">Department of Industrial Engineering and Operations Research (IEOR)</a> at Columbia University.</p>
    <p>I graduated from the Pilot Class of the Research Institute for Interdisciplinary Science at Shanghai University of Finance and Economics (SUFE). During my undergraduate studies, I was advised by <a href="https://www.acem.sjtu.edu.cn/en/faculty/dengqi.html">Qi Deng</a> at the Antai College of Economics and Management, Shanghai Jiao Tong University, and <a href="https://stanford.edu/~yyye/">Yinyu Ye</a>, the K. T. Li Professor of Engineering (Emeritus) in Management Science and Engineering at Stanford University.</p>
    <p>My research primarily focuses on <strong>pre-training</strong> and <strong>first-order methods</strong>. I am also beginning to explore problems in <strong>reinforcement learning</strong>.</p>
  </div>
</section>

<section class="focus-section" aria-labelledby="focus-title">
  <div class="section-heading"><div><p class="section-number">02 / RESEARCH INTERESTS</p><h2 id="focus-title">Questions I think about.</h2></div><span class="small-note">Optimization × Machine learning</span></div>
  <div class="focus-grid">
    <article class="focus-item"><span class="focus-index">01</span><h3>Pre-training</h3><p>Learning at scale, with optimization at the center.</p><span class="topic-label">PRIMARY FOCUS</span></article>
    <article class="focus-item"><span class="focus-index">02</span><h3>First-order methods</h3><p>Understanding and designing methods that learn from gradients.</p><span class="topic-label">PRIMARY FOCUS</span></article>
    <article class="focus-item"><span class="focus-index">03</span><h3>Reinforcement learning</h3><p>Exploring new questions in learning and decision-making.</p><span class="topic-label">EXPLORING</span></article>
  </div>
</section>

<section class="selected-section" aria-labelledby="selected-title">
  <div class="section-heading"><div><p class="section-number">03 / RESEARCH</p><h2 id="selected-title">Selected publication.</h2></div><a class="text-link" href="{{ '/publications/' | relative_url }}">All research <span aria-hidden="true">↗</span></a></div>
  {% for post in site.publications reversed limit:1 %}{% include folio-publication.html %}{% endfor %}
</section>

<section class="contact-section" aria-labelledby="contact-title">
  <div><p class="section-number">LET'S CONNECT</p><h2 id="contact-title">Ideas, questions,<br>or just a hello.</h2><p>Please feel free to contact me with any questions.</p></div>
  <a class="contact-email" href="mailto:{{ site.author.email }}">{{ site.author.email }} <span aria-hidden="true">↗</span></a>
</section>
