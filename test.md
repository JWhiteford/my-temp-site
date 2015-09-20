---
title: Lorem ipsum dolor adipisicing elit.
description:
permalink: /test/

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

  </div> <!-- .page-half -->

  <div class="page--half">

    <div class="cd-tabs">
      <nav>
        <ul class="cd-tabs-navigation">
          <li><a data-content="responsive" class="selected" href="#0">responsive</a></li>
          <li><a data-content="discovery" href="#0">discovery</a></li>
          <li><a data-content="ils" href="#0">ILS integration</a></li>
          <li><a data-content="portal" href="#0">database portal</a></li>
          <li><a data-content="cms" href="#0">website CMS</a></li>
        </ul> <!-- cd-tabs-navigation -->
      </nav>

      <ul class="cd-tabs-content">

        <li id="resp" data-content="responsive" class="selected">
          <div>
            <!-- <h2>Responsive</h2> -->
            <p>Experience your library anywhere, on any device!</p>
            <!-- <p>Visually showcase desktop, tablet, phone.</p> -->
          </div>
        </li>

        <li id="disc" data-content="discovery">
          <div>
            <!-- <h2>Discovery</h2> -->

            <h3>Robust faceted search of your physical and digital resource catalogs</h3>
            <ul>
              <li>Read Online, Download Resources or Place Holds in your ILS</li>
              <!-- <li>EDS Logo | Polaris Logo | Sirsi Logo</li> -->
            </ul>
            <img src="{{ site.baseurl }}img/eds-logo.png" alt="EBSCO Discovery Service logo">
            <div class="feature-row">
              <div class="feature-card">
                <img src="{{ site.baseurl }}img/polaris-logo.png" alt="Polaris logo">
              </div>
              <div class="feature-card">
                <img src="{{ site.baseurl }}img/sirsi-logo.png" alt="Sirsi logo">
              </div>
            </div>

            <h3>Integrated ILS Details with Reviews &#38; Recommendations</h3>
            <ul>
              <li>Reviews, Similar Titles, Similar Authors Similar Series</li>
              <!-- <li>Baker &#38; Taylor Logo | Chilifresh Logo | EBSCO Novelist Select Logo</li> -->
            </ul>
            <div class="feature-row">
              <div class="feature-card">
                <img src="{{ site.baseurl }}img/baker-taylor-logo.png" alt="Baker Taylor logo">
              </div>
              <div class="feature-card">
                <img src="{{ site.baseurl }}img/chilifresh-logo.png" alt="Chilifresh logo">
              </div>
            </div>
            <div class="feature-row">
              <div class="feature-card">
                <img src="{{ site.baseurl }}img/novelist-logo.png" alt="Novelist Select logo">
              </div>
            </div>



            <div class="feature-row">
              <div class="feature-card">
                <h3>Book Jackets</h3>
                <!-- <ul>
                  <li>Load subscription jackets or use themed icons</li>
                  <li>Bowker Syndetics Logo | Content Cafe Logo</li>
                </ul> -->
                <img src="{{ site.baseurl }}img/bowker-syndetics-logo.jpg" alt="Bowker Syndetics logo">
                <img src="{{ site.baseurl }}img/content-cafe-logo.png" alt="Content Cafe logo">
              </div>

              <div class="feature-card">
                <h3>Social Media</h3>
                <p>Share and connect via Goodreads, Facebook, Twitter &#38; Google+</p>
                <div class="feature-row">
                  <div class="feature-card">
                    <img src="{{ site.baseurl }}img/goodreads-logo.png" alt="Goodreads logo">
                  </div>
                  <div class="feature-card">
                    <img src="{{ site.baseurl }}img/facebook-logo.png" alt="Facebook logo">
                  </div>
                </div>
                <div class="feature-row">
                  <div class="feature-card">
                    <img src="{{ site.baseurl }}img/twitter-logo.png" alt="Twitter logo">
                  </div>
                  <div class="feature-card">
                    <img src="{{ site.baseurl }}img/google-plus-logo.png" alt="Google+ logo">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li id="ils" data-content="ils">
          <div>
            <!-- <h2>ILS Integration</h2> -->

            <h3>Single Sign On</h3>
            <p>Patron authentication works with Polaris ILS, SirsiDynix Symphony, SirsiDynix Horizon and EZproxy for optimal user experience</p>
            <!-- <p>Version specific Logos for Sirsi products + Polaris Logo. EZProxy</p> -->

            <div class="feature-row">
              <div class="feature-card">
                <img src="{{ site.baseurl }}img/sirsidynix-logo.svg" alt="SirsiDynix logo">
              </div>
              <div class="feature-card">
                <img src="{{ site.baseurl }}img/innovate-polaris-logo.png" alt="Innovate Polaris logo">
              </div>
            </div>
            <div class="feature-row">
              <div class="feature-card">
                <img src="{{ site.baseurl }}img/ezproxy-logo.png" alt="EZproxy logo">
              </div>
            </div>

            <h3>My Account</h3>
            <p>Patrons can view fines, view items out, renew items out, view hold requests, cancel hold requests and manage their Wishlist</p>
            <!-- <p>Maybe use Stacks icons for these things instead of logos to keep the format consistent</p> -->
            <img src="{{ site.baseurl }}img/stacks-logo.png" alt="stacks logo">
          </div>
        </li>

        <li id="portal" data-content="portal">
          <div>
            <!-- <h2>Database Portal</h2> -->
            <h3>Access</h3>
            <p>Patrons can access all your databases in the same interface they search your physical and digital catalogues. Seamless single sign-on means direct access to all their favorite resources using EZproxy.</p>
            <!-- <p>Let's show a few DB icons: (westlocklibrary.ca uses TRAC test user and their EZProxy links)</p> -->

            <div class="feature-row">
              <div class="feature-card">
                <img src="{{ site.baseurl }}img/ebsco-host-logo.png" alt="Ebsco Host logo">
              </div>
              <div class="feature-card">
                <img src="{{ site.baseurl }}img/zinio-logo.png" alt="Zinio logo">
              </div>
            </div>
            <div class="feature-row">
              <div class="feature-card">
                <img src="{{ site.baseurl }}img/tumblebook-logo.png" alt="TumbleBook logo">
              </div>
            </div>
          </div>
        </li>

        <li id="cms" data-content="cms">
          <div>
            <!-- <h2>Website CMS</h2> -->
            <div class="feature-row">
              <div class="feature-card">
                <div class="icon-col">
                  <img src="{{ site.baseurl }}img/fi-paint-bucket.svg" alt="">
                </div>
                <div class="feature-desc">
                  <h3 class="theme">Customizable themes</h3>
                  <p>Easy-to-use drag-and-drop responsive layouts with color theme selectors</p>
                  <!-- <img src="{{ site.baseurl }}img/fi-paint-bucket.svg" alt=""> -->
                </div>
              </div>
              <div class="feature-card">
                <div class="icon-col">
                  <img src="{{ site.baseurl }}img/fi-marker.svg" alt="">
                </div>
                <div class="feature-desc">
                  <h3 class="location">Location &#38; Hours</h3>
                  <p>With optional Google Places integration, branching and maps</p>
                  <!-- <img src="{{ site.baseurl }}img/fi-marker.svg" alt=""> -->
                </div>
              </div>
            </div>

            <div class="feature-row">
              <div class="feature-card">
                <div class="icon-col">
                  <img src="{{ site.baseurl }}img/fi-calendar.svg" alt="">
                </div>
                <div class="feature-desc">
                  <h3 class="events">Events Management</h3>
                  <p>Manage all your events and program listings with online registration</p>
                  <!-- <img src="{{ site.baseurl }}img/fi-calendar.svg" alt=""> -->
                </div>
              </div>
              <div class="feature-card">
                <div class="icon-col">
                  <img src="{{ site.baseurl }}img/fi-share.svg" alt="">
                </div>
                <div class="feature-desc">
                  <h3 class="social">Social Media</h3>
                  <p>Easy integration with all your favorite social media throughout your web content</p>
                  <!-- <img src="{{ site.baseurl }}img/fi-share.svg" alt=""> -->
                </div>
              </div>
            </div>

            <div class="feature-row">
              <div class="feature-card">
                <div class="icon-col">
                  <img src="{{ site.baseurl }}img/fi-clock.svg" alt="">
                </div>
                <div class="feature-desc">
                  <h3 class="history">This Day in History</h3>
                  <p>Customizable database for historical events that can be paired with relevant library resources via ILS integration</p>
                  <!-- <img src="{{ site.baseurl }}img/fi-clock.svg" alt=""> -->
                </div>
              </div>
              <div class="feature-card">
                <div class="icon-col">
                  <img src="{{ site.baseurl }}img/fi-mail.svg" alt="">
                </div>
                <div class="feature-desc">
                  <h3 class="news">Newsletter Integration</h3>
                  <p>Themed signup widget for MailChimp and Industry Mailout</p>
                  <!-- <img src="{{ site.baseurl }}img/fi-mail.svg" alt=""> -->
                </div>
              </div>
            </div>

            <div class="feature-row">
              <div class="feature-card">
                <div class="icon-col">
                  <img src="{{ site.baseurl }}img/fi-book.svg" alt="">
                </div>
                <div class="feature-desc">
                  <h3 class="book-list">Visual Books Lists</h3>
                  <p>Scrolling book jackets linked to catalog listings, place holds and populate lists with ILS integration</p>
                  <!-- <img src="{{ site.baseurl }}img/fi-book.svg" alt=""> -->
                </div>
              </div>
              <div class="feature-card">
                <div class="icon-col">
                  <img src="{{ site.baseurl }}img/fi-clipboard-pencil.svg" alt="">
                </div>
                <div class="feature-desc">
                  <h3 class="forms">Webforms</h3>
                  <p>Create surveys and polls easily, manage the results</p>
                  <!-- <img src="{{ site.baseurl }}img/fi-clipboard-pencil.svg" alt=""> -->
                </div>
              </div>
            </div>

            <div class="feature-row">
              <div class="feature-card">
                <div class="icon-col">
                  <img src="{{ site.baseurl }}img/fi-page.svg" alt="">
                </div>
                <div class="feature-desc">
                  <h3 class="static">Static Content</h3>
                  <p>Create brilliant responsive content with easy multi-media support and full WYSIWYGs</p>
                  <!-- <img src="{{ site.baseurl }}img/fi-page.svg" alt=""> -->
                </div>
              </div>
              <div class="feature-card">
                <div class="icon-col">
                  <img src="{{ site.baseurl }}img/fi-page-search.svg" alt="">
                </div>
                <div class="feature-desc">
                  <h3 class="dynamic">Dynamic Views</h3>
                  <p>Configurable aggregate views of multiple content types with drag and drop layouts</p>
                  <!-- <img src="{{ site.baseurl }}img/fi-page-search.svg" alt=""> -->
                </div>
              </div>
            </div>
          </div>
        </li>

      </ul> <!-- cd-tabs-content -->
    </div> <!-- cd-tabs -->


  </div> <!-- .page-half -->
</div> <!-- .page-full -->