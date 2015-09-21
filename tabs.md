---
title: Lorem ipsum dolor adipisicing elit.
description:
permalink: /tabs/

class:

author:
share_image:

sitemap:
  exclude: 'no'
---

<div class="page--full">
  <div class="page--half public">
    <div class="section--content">
      <h1>Public Library Features</h1>
      <ul class="tabs-menu list-double">
        <li class="current"><a href="#responsive">responsive</a></li>
        <li><a href="#disc">discovery</a></li>
        <li><a href="#ils">ILS integration</a></li>
        <li><a href="#portal">database portal</a></li>
        <li><a href="#cms">website CMS</a></li>
      </ul>
      <p><a href="/free-trial/" class="btn" data-type="page-transition">start free trial</a></p>
    </div> <!-- .section-content -->
  </div> <!-- .page-half -->


  <div class="page--half right tab">
    {% include responsive.html %}
    {% include discovery.html %}
    {% include ils.html %}
    {% include database.html %}
    {% include cms.html %}
  </div> <!-- .page-half -->
</div> <!-- .page-full -->