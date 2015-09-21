---
title: One Search, One Library | Stacks Library Software
description: Stacks allows searching and browsing of your programs, events and location within the same interface that they access your online catalog with full ILS Integration.
permalink: /tabs/

class:

author:
share_image:

sitemap:
  exclude: 'no'
---

<div class="page--full">
  <div class="page--half public">
    <div class="section--content full--width">
    <p><img src="{{ site.baseurl }}img/stacks-logo.png" alt="Stacks logo"></p>
      <h1>Public Library Features</h1>
      <ul class="tabs-menu list-double">
        <li class="current"><a class="btn" href="#responsive">responsive</a></li>
        <li><a class="btn" href="#disc">discovery</a></li>
        <li><a class="btn" href="#ils">ILS integration</a></li>
        <li><a class="btn" href="#portal">database portal</a></li>
        <li><a class="btn" href="#cms">website CMS</a></li>
      </ul>
      <!-- <p><a href="/free-trial/" class="btn" data-type="page-transition">start free trial</a></p> -->
    </div>
  </div>

  <div class="page--half right tab">
    {% include responsive.html %}
    {% include discovery.html %}
    {% include ils.html %}
    {% include database.html %}
    {% include cms.html %}
  </div>
</div>