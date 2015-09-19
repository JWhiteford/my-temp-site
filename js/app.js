jQuery(document).ready(function(event){
  var isAnimating = false,
    firstLoad = false;

  //trigger smooth transition from the actual page to the new one
  $('main').on('click', '[data-type="page-transition"]', function(event){
    event.preventDefault();
    //detect which page has been selected
    var newPage = $(this).attr('href');
    //if the page is not already being animated - trigger animation
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });
  //detect the 'popstate' event - e.g. user clicking the back button
  $(window).on('popstate', function() {
    if( firstLoad ) {
      /*
      Safari emits a popstate event on page load - check if firstLoad is true before animating
      if it's false - the page has just been loaded
      */
      var newPageArray = location.pathname.split('/'),
        //this is the url of the page to be loaded
        newPage = newPageArray[newPageArray.length - 1];
      if( !isAnimating ) changePage(newPage, false);
    }
    firstLoad = true;
  });

  function changePage(url, bool) {
    isAnimating = true;
    // trigger page animation
    $('body').addClass('page-is-changing');
    $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      loadNewContent(url, bool);
      $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    //if browser doesn't support CSS transitions
    if( !transitionsSupported() ) loadNewContent(url, bool);
  }

  function loadNewContent(url, bool) {
    url = ('' == url) ? 'index.html' : url;
    var newSection = 'cd-'+url.replace('.html', '');
    var section = $('<div class="cd-main-content '+newSection+'"></div>');

    section.load(url+' .cd-main-content > *', function(event){
      // load new content and replace <main> content with the new one
      $('main').html(section);
      //if browser doesn't support CSS transitions - don't wait for the end of transitions
      var delay = ( transitionsSupported() ) ? 1200 : 0;
      setTimeout(function(){
        //wait for the end of the transition on the loading bar before revealing the new content
        ( section.hasClass('cd-about') ) ? $('body').addClass('cd-about') : $('body').removeClass('cd-about');
        $('body').removeClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if( !transitionsSupported() ) isAnimating = false;
      }, delay);

      if(url!=window.location && bool){
        //add the new page to the window.history
        //if the new page was triggered by a 'popstate' event, don't add it
        window.history.pushState({path: url},'',url);
      }
    });
  }

  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }



  // form fancy labels
  $('.form').find('input, textarea').on('keyup blur focus', function (e) {

    var $this = $(this),
        label = $this.prev('label');

      if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
          label.removeClass('active highlight');
        } else {
          label.removeClass('highlight');
        }
      } else if (e.type === 'focus') {

        if( $this.val() === '' ) {
          label.removeClass('highlight');
        }
        else if( $this.val() !== '' ) {
          label.addClass('highlight');
        }
      }
  });

  $('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

  });




  //store DOM elements
  var imageWrapper = $('.cd-images-list'),
    imagesList = imageWrapper.children('li'),
    contentWrapper = $('.cd-content-block'),
    contentList = contentWrapper.children('ul').eq(0).children('li'),
    blockNavigation = $('.block-navigation'),
    blockNavigationNext = blockNavigation.find('.cd-next'),
    blockNavigationPrev = blockNavigation.find('.cd-prev'),
    //used to check if the animation is running
    animating = false;

  //on mobile - open a single project content when selecting a project image
  imageWrapper.on('click', 'a', function(event){
    event.preventDefault();
    var device = MQ();

    (device == 'mobile') && updateBlock(imagesList.index($(this).parent('li')), 'mobile');
  });

  //on mobile - close visible project when clicking the .cd-close btn
  contentWrapper.on('click', '.cd-close', function(){
    var closeBtn = $(this);
    if( !animating ) {
      animating = true;

      closeBtn.removeClass('is-scaled-up').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        contentWrapper.removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          animating = false;
        });

        $('.cd-image-block').removeClass('content-block-is-visible');
        closeBtn.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
      });
    }
  });

  //on desktop - update visible project when clicking the .block-navigation
  blockNavigation.on('click', 'button', function(){
    var direction = $(this),
      indexVisibleblock = imagesList.index(imageWrapper.children('li.is-selected'));

    if( !direction.hasClass('inactive') ) {
      var index = ( direction.hasClass('cd-next') ) ? (indexVisibleblock + 1) : (indexVisibleblock - 1);
      updateBlock(index);
    }
  });

  //on desktop - update visible project on keydown
  $(document).on('keydown', function(event){
    var device = MQ();
    if( event.which=='39' && !blockNavigationNext.hasClass('inactive') && device == 'desktop') {
      //go to next project
      updateBlock(imagesList.index(imageWrapper.children('li.is-selected')) + 1);
    } else if( event.which=='37' && !blockNavigationPrev.hasClass('inactive') && device == 'desktop' ) {
      //go to previous project
      updateBlock(imagesList.index(imageWrapper.children('li.is-selected')) - 1);
    }
  });

  function updateBlock(n, device) {
    if( !animating) {
      animating = true;
      var imageItem = imagesList.eq(n),
        contentItem = contentList.eq(n);

      classUpdate($([imageItem, contentItem]));

      if( device == 'mobile') {
        contentItem.scrollTop(0);
        $('.cd-image-block').addClass('content-block-is-visible');
        contentWrapper.addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          contentWrapper.find('.cd-close').addClass('is-scaled-up');
          animating = false;
        });
      } else {
        contentList.addClass('overflow-hidden');
        contentItem.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          contentItem.siblings().scrollTop(0);
          contentList.removeClass('overflow-hidden');
          animating = false;
        });
      }

      //if browser doesn't support transition
      if( $('.no-csstransitions').length > 0 ) animating = false;

      updateBlockNavigation(n);
    }
  }

  function classUpdate(items) {
    items.each(function(){
      var item = $(this);
      item.addClass('is-selected').removeClass('move-left').siblings().removeClass('is-selected').end().prevAll().addClass('move-left').end().nextAll().removeClass('move-left');
    });
  }

  function updateBlockNavigation(n) {
    ( n == 0 ) ? blockNavigationPrev.addClass('inactive') : blockNavigationPrev.removeClass('inactive');
    ( n + 1 >= imagesList.length ) ? blockNavigationNext.addClass('inactive') : blockNavigationNext.removeClass('inactive');
  }

  function MQ() {
    return window.getComputedStyle(imageWrapper.get(0), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "").split(', ');
  }

});