---
layout: newsletter-page
navCategory: Resources
title: Newsletter Archive
permalink: "/resources/newsletter-archive"
description: Angles (formerly Dispatches From Home, formerly Briefly News) is the
  monthly newsletter of Beverly Willis Architecture Foundation. Here you can view
  an archive of previous newsletters. You can also sign up to receive future newsletters
  in your inbox.
sign-up-text: Sign up for the newsletter and get the latest news on upcoming programs
  and events
newsletters:
- title: Special Blast
  month_year: March 2022
  link: https://mailchi.mp/a86faef6fb15/bwaf-2022-industry-leaders-roundtable-retreat
- title: Angles
  month_year: January 2022
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995184?e=[UNIQID]
- title: Angles
  month_year: 'December 2021 '
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995174
- title: 'Special Blast '
  month_year: 'November 2021 '
  link: https://mailchi.mp/bwaf/less-than-one-week-left-to-sponsor-register-for-the-inaugural-bevy-awards-celebration-2995166
- title: Angles
  month_year: November 2021
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995158
- title: Special Blast
  month_year: October 2021
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995150
- title: Angles
  month_year: October 2021
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995146
- title: Special Blast
  month_year: September 2021
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995118
- title: Angles
  month_year: August 2021
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995110
- title: Angles
  month_year: July 2021
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995094
- title: Angles
  month_year: June 2021
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995086
- title: Angles
  month_year: May 2021
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995070
  description: ''
- title: Angles
  month_year: April 2021
  link: https://mailchi.mp/bwaf/k0man47s2m-2995066
  description: ''
- title: Angles
  month_year: March 2021
  link: https://mailchi.mp/bwaf/k0man47s2m
  description: ''
- title: Angles
  month_year: February 2021
  description: ''
  link: https://mailchi.mp/bwaf/b5rrdu42wi-2995034
- title: Angles
  month_year: January 2021
  link: https://mailchi.mp/bwaf/b5rrdu42wi
  description: ''
- title: Special Blast
  month_year: December 2020
  link: https://mailchi.mp/bwaf/b5rrdu42wi
  description: ''
- title: Dispatches From Home
  month_year: December 2020
  link: https://mailchi.mp/bwaf/bwaf-briefly-news-save-the-dates-2994994
- title: Dispatches From Home
  month_year: November 2020
  link: https://mailchi.mp/bwaf/bwaf-briefly-news-save-the-dates-2994982
- title: Dispatches From Home
  link: https://mailchi.mp/bwaf/bwaf-briefly-news-save-the-dates-2994962
  description: ''
  month_year: October 2020
- title: Dispatches From Home
  month_year: September 2020
  link: https://mailchi.mp/bwaf/bwaf-briefly-news-save-the-dates-2994954
  description: ''
- title: Dispatches From Home
  month_year: August 2020
  link: https://mailchi.mp/bwaf/dispatches-from-phase-2-and-pioneering-women-of-american-architecture-patricia-weston-swan-2994946
  description: ''
- title: Dispatches From Home
  link: https://mailchi.mp/bwaf/dispatches-from-phase-2-and-pioneering-women-of-american-architecture-patricia-weston-swan-2994938
  month_year: July 2020
- title: Dispatches From Home
  month_year: June 2020
  link: https://mailchi.mp/bwaf/dispatches-from-phase-2-and-pioneering-women-of-american-architecture-patricia-weston-swan
- title: Special Blast
  month_year: June 2020
  link: https://mailchi.mp/bwaf/in-solidarity
  description: ''
- title: Dispatches From Home
  month_year: May 2020
  link: https://mailchi.mp/bwaf/bwaf-briefly-news-save-the-dates-2994906

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