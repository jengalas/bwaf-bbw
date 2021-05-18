---
layout: default
navCategory: Resources
title: Newsletter Archive
permalink: "/resources/newsletter-archive"
description: Angles (formerly Briefly News) is the monthly newsletter of Beverly Willis
  Architecture Foundation. Here you can view an archive of previous newsletters. You
  can also sign up to receive future newsletters in your inbox.
sign-up-text: Sign up for the newsletter and get the latest news on upcoming programs
  and events
newsletters:
- title: Angles
  month_year: May 2021
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995070
  description: On politics and standing up for equality
- title: Angles
  month_year: April 2021
  link: https://mailchi.mp/bwaf/k0man47s2m-2995066
  description: To all Emerging Leaders, perseverance takes passion
- title: Angles
  month_year: March 2021
  link: https://mailchi.mp/bwaf/k0man47s2m
  description: The DNA is open this Women's History Month
- title: Angles
  month_year: February 2021
  description: Approaching a year...
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995034
- {}
- {}

---
<div class="main-two-up">
    <div>
        <h1>{{page.title}}</h1>
    </div>
    <div>
        <p>{{page.description}}</p>
    </div>
</div>
<div class="hr"></div>
<div class="main-two-up">
    <div>
        <a href="/subscribe" target="_blank" class="lefthand-link" style="color: var(--green)">{{page.sign-up-text}} →</a>
    </div>
    <div>
        <div class="newsletter-archive">
        {% for newsletter in page.newsletters %}
            <a href="{{newsletter.link}}">
                <h3><b>{{newsletter.title}}</b> / {{newsletter.month_year}}</h3>
                <p>{{newsletter.description}}</p>
            </a>
        {% endfor %}
        </div>
    </div>
</div>