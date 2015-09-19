---
title: Lorem ipsum dolor adipisicing elit.
description:
permalink: /public-library-software/

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
      <ul class="list-double">
        <li><a href="#resp">responsive</a></li>
        <li><a href="#disc">discovery</a></li>
        <li><a href="#ils">ILS integration</a></li>
        <li><a href="#portal">database portal</a></li>
        <li><a href="#cms">website CMS</a></li>
      </ul>
      <p><a href="/free-trial/" class="btn" data-type="page-transition">start free trial</a></p>
    </div> <!-- .section-content -->

    <ul class="block-navigation">
      <li><button class="cd-prev inactive">&larr; Prev Feature</button></li>
      <li><button class="cd-next">Next Feature &rarr;</button></li>
    </ul> <!-- .block-navigation -->

    <div class="cd-image-block">
      <ul class="cd-images-list">
        <li class="is-selected">
          <a href="#0">
            <h2>Responsive</h2>
          </a>
        </li>
        <li>
          <a href="#0">
            <h2>Discovery</h2>
          </a>
        </li>
        <li>
          <a href="#0">
            <h2>ILS Integration</h2>
          </a>
        </li>
        <li>
          <a href="#0">
            <h2>Database Portal</h2>
          </a>
        </li>
        <li>
          <a href="#0">
            <h2>Website CMS</h2>
          </a>
        </li>
      </ul> <!-- .cd-images-list -->
    </div> <!-- .cd-image-block -->
  </div> <!-- .page-half -->

  <div class="page--half">
    <div class="cd-content-block">
      <ul>
        <li class="is-selected">
          <div class="page--quarter__top video--frame">
            <div class="section--content full--width">
              <video width="100%" controls>
                <source src="mov_bbb.mp4" type="video/mp4">
              </video>
            </div>
          </div> <!-- .page-quarter-top -->

          <div class="page--quarter__bottom">
            <div class="section--content full--width">
              <p>Short description of public stuff...</p>
              <div class="features">
                <p>Experience your library anywhere, on any device!</p>
                <p>Visually showcase desktop, tablet, phone</p>
              </div>
            </div>
          </div> <!-- .page-quarter-bottom -->
        </li>
        {% include features-1.html %}
      </ul>

      <button class="cd-close">Close</button>
    </div>
  </div> <!-- .page-half -->
</div> <!-- .page-full -->