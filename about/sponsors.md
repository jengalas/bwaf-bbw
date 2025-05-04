---
layout: default
title: Sponsors
permalink: /sponsors
navCategory: About
description: >-
  Beverly Willis Architecture Foundation would not exist without the financial
  support and generosity of our supporters. We give our deepest gratitude to all
  the supporters listed on this page.
leader-level:
  - leaders-header: Leader
    leaders:
      - name: Brookfield Properties
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1740085626/Screenshot_2025-02-20_at_4.06.52_PM.png
      - name: Related
        image:  >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1739491143/related-companies-logo-vector_800px-sq.png 
      - name: Related Ross
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1741893830/relatedross_logo.jpg          
visionary-level:
  - visionaries-header: Visionary
    visionaries:
      - name: Robert A.M Stern Architects
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1746194636/Screenshot_2025-05-01_at_12.46.25_PM_eejows.png
      - name: Wanda Bubriski
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1746194650/Screenshot_2025-05-01_at_12.46.32_PM_tu75xi.png
sponsors:
  - sponsors-header: Bevy Leadership Awards 2025 Sponsors
    sponsors:
      - amt: Advocate
        sponsors:
          - Arup
          - DeSimone Consulting Engineers
          - Gentler
          - 'HR&A Advisors '
          - 'I-Grace Builders & Advisors '
          - Jaros, Baum & Bolles
          - Kohn Pedersen Fox
          - Langan
          - 'Marvel Architects '
          - 'Sciame '
          - Sciame Homes
          - Skidmore, Owings & Merrill
          - Thornton Tomasetti
          - Turner Construction
      - amt: Supporter
        sponsors:
          - 'Alloy Development '
          - Anchin
          - And Partners NY
          - Bala Engineers
          - 'Benchmark Builders '
          - 'BFC Partners '
          - Cetra Ruddy
          - Ciardullo A&E
          - 'Civetta & Sons '
          - Clark Construction
          - Consigli
          - 'Coterie | Atria Senior Living '
          - 'Dattner Architects '
          - DLR Group
          - Diller Scofidio + Renfro
          - 'Elkus Manfredi Architects '
          - 'Empire Office '
          - 'Falkbuilt '
          - 'Field Operations '
          - 'Gilsanz Murray Steficek '
          - 'Great Ink Communications '
          - Hart Howerton
          - Hatfield Group
          - 'Hausman LLC '
          - HOK
          - 'Interface '
          - 'JDP Mechanical Engineering '
          - JFK&M Consulting Group
          - 'KGM Architectural Lighting '
          - 'Kieran Timberlake '
          - 'March and White Design '
          - 'Metropolitan Walters '
          - NBBJ
          - OMA
          - Perkins Eastman
          - 'Pure Project Management '
          - 'S9 Architecture '
          - 'Steelcase '
          - 'Studio Gang '
          - Trinity Consultants | Cerami | Longman Lindsey
          - TYLin
          - WeWork
      - amt: Donors
        sponsors:
          - AKRF
          - 'Annya Ramirez '
          - 'Bungalow Projects '
          - Cactus Systems LLC
          - Hausman LLC
          - 'JLL Capital Projects '
          - 'Julia Murphy '
          - New York Building Congress
          - 'Sabrina Kanner '
          - 'Sage and Coombe Architects '
          - Sandra Joslyn
friends-level:
  - friends-header: Friends
    friends:
      - name:
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1741294513/Alloy-Logo.png
      - name: Cooper Carry
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1621379491/cc_identity_logo_black_nnig5h.jpg
      - name:
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1746038218/Screenshot_2025-04-30_at_2.36.45_PM.png
      - name:
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1746038159/Screenshot_2025-04-30_at_2.35.45_PM.png
      - image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1621379339/LanganBlackCMYK-print_ic5idu.jpg
        name:
      - name:
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1746038085/Screenshot_2025-04-30_at_2.34.33_PM.png
      - name:
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1741727865/RAMSA_logo.jpg
      - name:
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1739491143/related-companies-logo-vector_800px-sq.png
      - name:
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1746038037/c174b70fe2ec4728804a112269d03528.jpg
      - name:
        image: >-
          https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/v1737833026/Thornton-Thomasetti-logo-black-stacked.jpg           
_inputs:

---
<!-- TODO: Figure out how to add links to images here that will work with CloudCannon -->

<div class="main-two-up">
    <div>
        <h1>Sponsors</h1>
    </div>
    <div>
        <p>{{page.description}}</p>
    </div>
</div>

{% for sponsorsgroup in page.sponsors %}
<div class="main-two-up">
  <div>
      <h2 class="h3"><b>{{sponsorsgroup.sponsors-header}}</b></h2>
  </div>
  <div>
    <p style="margin-bottom: -2rem;"><strong>{{ page.leader-level[0].leaders-header }}</strong></p>
    <div class="logos-block" style="margin-bottom: 2rem;">  
      {% for leader in page.leader-level[0].leaders %}
      <div><img src="{{leader.image | replace: 'https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload', 'https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/w_200'}}" alt="{{leader.name}}"></div>
      {% endfor %}
      <br><br><br><br>
    </div>
    <p style="margin-bottom: -2rem;"><strong>{{ page.visionary-level[0].visionaries-header }}</strong></p>
    <div class="logos-block" style="margin-bottom: 2rem;">  
      {% for visionary in page.visionary-level[0].visionaries %}
      <div><img src="{{visionary.image | replace: 'https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload', 'https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/w_200'}}" alt="{{visionary.name}}"></div>
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
        <h2 class="h3"><b>{{page.friends-level[0].friends-header}}</b></h2>
    </div>
    <div class="logos-block">
        {% for friend in page.friends-level[0].friends %}
        <div><img src="{{friend.image | replace: 'https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload', 'https://res.cloudinary.com/beverly-willis-architecture-foundation/image/upload/w_200'}}" alt="{{friend.name}}"></div>
        {% endfor %}
    </div>
</div>

{% include prefooter.html %}