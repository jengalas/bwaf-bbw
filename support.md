---
title: Support
permalink: /support
layout: default
header: Make a Donation
link:
  text: To make a recurring donation, become a Friend and enjoy membership benefits
  url: /programs/friends
text-block: >-
  <p>Our mission at Beverly Willis Architecture Foundation (BWAF) is to change
  the culture of the building industry for women through education and research.
  This work is proving more urgent and important than ever before. We depend on
  your donations to continue providing high-quality reference materials and for
  sustaining our educational programming.</p><p>BWAF is a 501(c)3 nonprofit
  organization in the State of New York, and your donations are 100%
  tax-deductible. We rely upon donations for our operations and programming, and
  we offer a heartfelt thank you for your contribution.</p>

# CloudCannon config  
_inputs:
  title:
    hidden: true
  header:
    label: Header in Left Column
  text-block:
    type: html
  link:
    label: Link in Left Column
---
<div class="support-page">
    <div class="main-two-up">
        <div>
            <h1>{{page.header}}</h1>
            <a href="{{page.link.url}}" class="lefthand-link">{{page.link.text}}⟶</a>
        </div>
        <div class="text-block">
            {{page.text-block}}
        </div>
    </div>
    <div class="main-two-up">
        <div>
        </div>
        <div class="donation-block">
            <div class="donation-block-inner">
                <div>
                    <h2><b>Select a donation amount</b></h2>
                    <div class="donation-buttons sponsorship-buttons">
                        <label>
                            $100
                            <input type="radio" name="sponsorship-type" value="100">
                        </label>
                        <label>
                            $250
                            <input type="radio" name="sponsorship-type" value="250">
                        </label>
                        <label>
                            $500
                            <input type="radio" name="sponsorship-type" value="500">
                        </label>
                        <label>
                            $1,000
                            <input type="radio" name="sponsorship-type" value="1000">
                        </label>
                        <label>
                            $2,500
                            <input type="radio" name="sponsorship-type" value="2500">
                        </label>
                        <input class="btn-other h2" type="number" name="sponsorship-type" placeholder="Other Amount">
                    </div>                    
                </div>
                <br>
                <div>
                    <h2><b>Select payment method</b></h2>
                    <div class="payment-buttons">
                        <button class="h2 active" id="btnPaypal"><b>PayPal</b></button>
                        <button class="h2" id="btnPayByCheck"><b>Check</b></button>
                    </div>
                </div>
                <div id="view-paypal">
                    <h2><b>Enter your information</b></h2>
                    <label for="firstname">First name</label>
                    <input type="text" name="firstname" id="firstname" placeholder="First name"><br>
                    <label for="firstname">Last name</label>
                    <input type="text" name="lastname" id="lastname" placeholder="Last name"><br>
                    <label for="firstname">Email address</label>
                    <input type="text" name="emailaddress" id="emailaddress" placeholder="Email address"><br>
                    <button id="donate-form--donate-btn"><span class="h2"><b>Donate Now</b></span></button>
                </div>
                <div id="view-pay-by-check">
                    <h2>Please make your check payable to:<br><b>Beverly Willis Architecture Foundation</b></h2>                    
                    <h2>Please mail your check to:
                        <br><b>Beverly Willis Architecture Foundation</b>
                        <br><b>141 West Broadway<br>New York, NY 10013</b>
                    </h2>
                    <figcaption>All contributions will be gratefully acknowledged and are 100% tax deductible.</figcaption>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="/assets/js/form.js"></script>