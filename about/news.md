---
layout: newsletter-page
navCategory: About
title: News
permalink: /about/news
description:
sign-up-text: >-
  Sign up for the newsletter and get the latest news on upcoming programs and
  events
newsletters:
  - link: https://www.kqed.org/news/12048156/#episode-transcript
    month_year: July 2025
    title: 'KQED podcast shares New Angle: Voice "Finding Julia Morgan" episode '
  - title: >-
      Collective Access: Disability, Gender, and Design | Center for
      Architecture Panel
    month_year: July 2025
    link: >-
      https://calendar.aiany.org/2025/07/24/collective-access-disability-gender-and-design/
  - title: >-
      Architecture nonprofit leaders in New York form Public Design Alliance, a
      new coalition to combat federal funding cuts
    link: https://www.archpaper.com/2025/06/nonprofits-form-public-design-alliance/
    month_year: June 2025
  - title: Remembering Bev
    month_year: September 2024
    link: https://www.archpaper.com/2024/09/an-tributes-to-beverly-willis/
  - title: BWAF Receives Special Citation for Service to Women in Architecture
    month_year: June 2024
    link: >-
      https://www.aiany.org/news/aia-new-york-elects-2025-leadership-and-honors-community-achievements-at-157th-annual-meeting/
  - title: >-
      Beverly Willis Architecture Foundation opens The Bev, a new multi-use
      headquarters in Manhattan
    month_year: January 2024
    link: >-
      https://www.archpaper.com/2024/01/beverly-willis-architecture-foundation-the-bev-manhattan/
  - link: >-
      https://www.architectmagazine.com/Design/the-bev-a-new-manhattan-hub-for-women-in-architecture_o
    month_year: January 2024
    title: 'The Bev: a New Manhattan Hub for Women in Architecture'
_inputs:
  $.title:
    hidden: true
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
            <a href="{{newsletter.link}}" target="_blank">
                <h3><b>{{newsletter.title}}</b> / {{newsletter.month_year}}</h3>
                <p>{{newsletter.description}}</p>
            </a>
        {% endfor %}
        </div>
    </div>
</div>