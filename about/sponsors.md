---
layout: default
title: Sponsors
permalink: "/sponsors"
navCategory: About
description: Beverly Willis Architecture Foundation would not exist without the financial
  support and generosity of our supporters. We give our deepest gratitude to our supporters
  listed on this page.
supporters-header: ''
supporters:
- name: Brookfield Properties
  image: "/v1620155874/B-prop_id_rgb_q198gs.jpg"
- name: Silman
  image: "/v1620155920/Silman_Logo_djgqp7.jpg"
friends-header: 'Corporate Sponsors: Friends'
friends:
- name: Brookfield Properties
  image: "/v1620155874/B-prop_id_rgb_q198gs.jpg"
- name: Silman
  image: "/v1620155920/Silman_Logo_djgqp7.jpg"
sponsors:
- sponsors-header: 2020 Leadership Awards Gala Sponsors
  sponsors:
  - amt: Legacy
    sponsors:
    - Brookfield Properties
  - amt: Visionary
    sponsors:
    - Silman
  - amt: Transformational
    sponsors:
    - New York University
    - Skidmore, Owings and Merrill
    - Thornton Tomasetti, Inc.
  - amt: Champion
    sponsors:
    - Arup
    - Dattner Architects
    - Foster + Partners
    - HOK
    - IDC Foundation
    - Ikon.5 Architects
    - Ingram Yuzek Gainen Carroll & Bertolotti, LLP
    - Jaros, Baum & Bolles
    - LANGAN Engineering
    - Levien & Company
    - Loring Consulting Engineers
    - Robert A.M. Stern Architects
    - Sciame
    - Turner Construction Company
  - amt: Catalyst
    sponsors:
    - Davis Brody Bond
    - Diller, Scofidio + Renfro
    - Ennead Architects
    - Kohler Ronan, LLC Consulting Engineers
    - Mancini Duffy
    - Marble Fairbanks
    - Perkins&Will
    - Shildan Group
    - Spacesmith
    - WSP Global Inc.
    - Zetlin & De Chiara LLP
pioneering-women:
  header: ''
  sponsors-groups:
  - amt: Early Sponsors
    sponsors:
    - Forest City Realty Trust
    - Erleen Hatfield
    - Claire Weisz
  additional-supporters: ''
previous-years-header: Continued General Support is Generously Provided By
previous-years:
- name: Brookfield Properties
  image: "/v1620155874/B-prop_id_rgb_q198gs.jpg"
- name: Silman
  image: "/v1620155920/Silman_Logo_djgqp7.jpg"

---
<div class="main-two-up">
    <div>
        <h1>Sponsors</h1>
    </div>
    <div>
        <p>{{page.description}}</p>
    </div>
</div>
<!-- <div class="main-two-up">
    <div>
        <h2><b>{{page.supporters-header}}</b></h2>
    </div>
    <div class="logos-block">
        {% for supporter in page.supporters %}
        <div><img src="{{site.cloudinary}}/w_200/{{supporter.image}}" alt="{{supporter.name}}"></div>
        {% endfor %}
    </div>
</div> -->
{% for sponsorsgroup in page.sponsors %}
<div class="main-two-up">
    <div>
        <h2 class="h3"><b>{{sponsorsgroup.sponsors-header}}</b></h2>
    </div>
    <div>
          <div class="logos-block">
            {% for supporter in page.supporters %}
            <div><img src="{{site.cloudinary}}/w_200/{{supporter.image}}" alt="{{supporter.name}}"></div>
            {% endfor %}
            <br><br><br><br>
          </div>
          <div class="text-block">
              {% for sponsorgroup in sponsorsgroup.sponsors %}
              <p>
                  <strong>{{sponsorgroup.amt}}</strong><br>
                      {% for sponsor in sponsorgroup.sponsors %}
                          {% if forloop.index > 1 %}
                              <br>{{sponsor}}
                          {% else %}
                              {{sponsor}}
                          {% endif %}
                      {% endfor %}
              </p>
              {% endfor %}
          </div>
          <br>
    </div>
</div>
{% endfor %}
<div class="hr"></div>
<div class="main-two-up">
    <div>
        <h2><b>{{page.friends-header}}</b></h2>
    </div>
    <div class="logos-block">
        {% for friend in page.friends %}
        <div><img src="{{site.cloudinary}}/w_200/{{friend.image}}" alt="{{friend.name}}"></div>
        {% endfor %}
    </div>
</div>
<div class="hr"></div>
<div class="main-two-up">
    <div>
      <h2><b>Sponsors: <a href="https://pioneeringwomen.bwaf.org/" target="_blank">Pioneering Women of American Architecture</a></b></h2>
    </div>
    <div>
        {% for sponsorsgroup in page.pioneering-women.sponsors-groups %}
          <ul class="sponsors-amounts">
              <li class="smallest">
                  <b>{{sponsorsgroup.amt}}</b>
              </li>
              <li class="smallest">
                  <div>
                    {% for sponsor in sponsorsgroup.sponsors %}
                          {% if forloop.index > 1 %}
                              <br>{{sponsor}}
                          {% else %}
                              {{sponsor}}
                          {% endif %}
                    {% endfor %}
                  </div>
              </li>
          </ul>
          <br>
        {% endfor %}
        <ul class="sponsors-amounts">
              <li class="smallest">
                  <b>Additional Supporters</b>
              </li>
              <li class="smallest">
                  <div>
                    {{page.pioneering-women.additional-supporters }}
                  </div>
              </li>
          </ul>
          <br>
    </div>
</div>
<div class="hr"></div>
<div class="main-two-up">
    <div>
        <h2><b>{{page.previous-years-header}}</b></h2>
    </div>
    <div class="logos-block">
        {% for supporter in page.previous-years %}
        <div><img src="{{site.cloudinary}}/w_200/{{supporter.image}}" alt="{{supporter.name}}"></div>
        {% endfor %}
    </div>
</div>
{% include prefooter.html %}