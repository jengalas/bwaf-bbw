---
layout: default
title: Sponsors | Beverly Willis Architecture Foundation
permalink: "/sponsors"
navCategory: About
description: Beverly Willis Architecture Foundation would not exist without the financial
  support and generosity of our supporters. We give our deepest gratitude to our supporters
  listed on this page.
supporters-header: 2021 Supporters and Partners
supporters:
- name: Brookfield Properties
  image: "/v1620155874/B-prop_id_rgb_q198gs.jpg"
- name: Silman
  image: "/v1620155920/Silman_Logo_djgqp7.jpg"
sponsors:
- sponsors-header: Leadership Awards Gala Sponsors
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
  header: Major Supporters of the Pioneering Women of American Architecture Project
  sponsors-groups:
  - amt: "$5,000 or more"
    sponsors:
    - MaryAnne Gilmartin, President and Chief Executive Officer
    - Forest City Ratner Companies
  - amt: "$5,000 or more"
    sponsors:
    - MaryAnne Gilmartin, President and Chief Executive Officer
    - Forest City Ratner Companies
  additional-supporters: Additional Supporters Heid Blau, FAIA; Sheila Cahnman, AIA;
    Lila Shoshkes; Marion Weiss, FAIA; Denelle Wrightson, AIA; Zeitlin & De Chiara,
    LLC.; Patricia Boyle, AIA; Marge Champion; Michael Crosbie, FAIA, Ph.D.; Peggy
    Deamer, Ph.D.; Julia Donoho, AIA; Paul Edholm; Sarah Haga, AIA; Patricia Harris,
    Esq., LEED AP; Cheryl A. Lazzaro; Kate Schwennsen, FAIA; Despina Stratigakos,
    Ph.D.; Allyne Winderman, FAIA; Kim Yao, AIA; Zubatkin Owner Representation, LLC;
    Shar Taylor; Dale B. Cohen, Assoc. AIA; Betsey Olenick Dougherty, FAIA; Karen
    Fairbanks, AIA; Diane Favro, Ph.D.; Marcia Ferranto; Cynthia Hammond, Ph.D.; James
    T. Hanley; Rena M. Klein, FAIA; Patricia Lancaster; Michele Lewis; Linda Lyons;
    W. Brett McKenzie, Ed.D.; Paula McKenzie; Karen McNeil, Ph.D.; Robin Osler, AIA;
    Kathryn Prigmore, FAIA; Deborah Rehn, AIA; Bruce Rosen; Victoria Rosner, Ph.D.;
    Avigail Sachs, Ph.D.; Pauline Saliga, Ph.D.; Michael Seto; Ellen Shoshkes, Ph.D.;
    Natividad Soto, AIA; Abigail Van Slyck Ph.D.; Jeffrey and Carla Watiker; Carol
    Willis; Jeanne Wills; Cynthia J. Wright, AIA; Laura Boyer; Nina Freedman; Jan
    Muntz, AIA; Nancy Nguyen; Alison Paul; Mardelle Shepley, Ph.D.; Judith Major,
    Ph.D.; Andrew Watiker; Laura Watiker
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
<div class="main-two-up">
    <div>
        <h2><b>{{page.supporters-header}}</b></h2>
    </div>
    <div class="logos-block">
        {% for supporter in page.supporters %}
        <div><img src="{{site.cloudinary}}/w_200/{{supporter.image}}" alt="{{supporter.name}}"></div>
        {% endfor %}
    </div>
</div>
<div class="main-two-up">
    <div>
    </div>
    <div>
        {% for sponsorsgroup in page.sponsors %}
          <ul class="sponsors-amounts">
              <li class="smallest">
                  <b>{{sponsorsgroup.sponsors-header}}</b>
              </li>
              {% for sponsorgroup in sponsorsgroup.sponsors %}
              <li class="smallest">
                  <div>{{sponsorgroup.amt}}</div>
                  <div>
                      {% for sponsor in sponsorgroup.sponsors %}
                          {% if forloop.index > 1 %}
                              <br>{{sponsor}}
                          {% else %}
                              {{sponsor}}
                          {% endif %}
                      {% endfor %}
                  </div>
              </li>
              {% endfor %}
          </ul>
          <br>
        {% endfor %}
    </div>
</div>
<div class="hr"></div>
<div class="main-two-up">
    <div>
      <h2><b>{{page.pioneering-women.header}}</b></h2>
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
        <h2><b>Previous Years Supporters and Partners</b></h2>
    </div>
    <div class="logos-block">
        {% for supporter in page.previous-years %}
        <div><img src="{{site.cloudinary}}/w_200/{{supporter.image}}" alt="{{supporter.name}}"></div>
        {% endfor %}
    </div>
</div>
{% include prefooter.html %}