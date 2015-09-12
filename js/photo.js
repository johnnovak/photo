// Disable text selection within element jQuery plugin
(function($){
  $.fn.disableSelection = function() {
    return this.attr('unselectable', 'on')
               .css('user-select', 'none')
               .on('selectstart', false);
  };
})(jQuery);


// Improved version of 'jQuery find' that finds root elements as well
$.fn.find2 = function(selector) {
  return this.filter(selector).add(this.find(selector));
};

// Prevent Fotorama from making dubious requests to mc.yandex.ru
window.blockFotoramaData = true;


/// GLOBAL MODULE START //////////////////////////////////////////////////////
var site = function() {

// Set to 1 if the site is located in a subdirectory under the server root
// (e.g. /photo/)
var IS_IN_SUBDIR = 0


// Load HTML fragment and fire a callback function when all images contained
// in it are fully loaded.
//
// url: URL of HTML fragment to load
// onLoad: Function to call after all images in the fragment have been loaded.
//         A single argument is passed to the function that holds the filtered
//         HTML fragment.
// selector (optional): filter the HTML fragment by running it through a CSS
//                      selector
// minDelay (default=0): minimum delay before onLoad() is called
// pollInterval (default=20): polling interval for checking whether all images
//                            have been loaded
//
function loadFragment(opts) {
  var fragment = null;
  var minDelay = opts.minDelay || 0;
  var pollInterval = opts.pollInterval || 20;

  var showSpinnerTimeout = setTimeout(function() {
      $('#spinner').show();
  }, minDelay + 550);

  setTimeout(function() {
    var interval = setInterval(function() {
      if (fragment) {
        clearInterval(interval);
        clearTimeout(showSpinnerTimeout);
        $('#spinner').hide();
        opts.onLoad(fragment);
      }
    }, pollInterval);
  }, minDelay);

  $.get(opts.url, function(frag) {
    if (opts.selector) {
      var frag = $(frag).find2(opts.selector);
    }
    frag.imagesLoaded(function() {
      fragment = frag;
    });
  });
}

function pushState(url) {
  history.pushState(null, null, url);
}

function replaceState(url) {
  history.replaceState(null, null, url);
}

function switchPage(newPage, pathname) {
  var currPage = site.currentPage;
  currPage.destroy();
  newPage.ajaxInit(pathname, currPage.destroyDuration());
  site.currentPage = newPage;
}

function switchPageByPathName(pathname) {
  var newPage = pageFromPathName(pathname);
  var currPage = site.currentPage;

  if (currPage.name == newPage.name) {
    if (currPage.updatePageHandler) {
      currPage.updatePageHandler(pathname);
    }
  } else {
    switchPage(newPage, pathname);
  }
}

function pageFromPathName(pathname) {
  return pageMappings[pageNameFromPathName(pathname)];
}

function pageNameFromPathName(pathname) {
  var i = IS_IN_SUBDIR
  pathnameNoHash = pathname.replace(/#.*$/, '');
  var path = splitPathName(pathnameNoHash);

  if (path.length == i+1 && path[i+0] == 'about') {
    return 'about';
  } else if (path.length == i+0 || path.length == i+1) {
    return 'albums';
  } else if (path.length == i+2) {
    return 'photo';
  }
}

function splitPathName(pathname) {
  var p = pathname.split('/');
  // Remove initial and trailing forward slashes, if present.
  if (!p[0]) {
    p.shift();
  }
  if (!p[p.length - 1]) {
    p.pop();
  }
  return p;
}

function initNavigation() {
  if (!isNavigationInitialized) {
    installResponsiveMenu();
    installMenuClickHandler();
    installLogoClickHandler();
    isNavigationInitialized = true;
  }
}

function installMenuClickHandler() {
  $('#header .menu a').each(function(i, link) {
    $(link).on('click', function(event) {
      event.preventDefault();
      switchPageByPathName(link.pathname);
      pushState(link.pathname)
    });
  });
};

function installLogoClickHandler() {
  var link = $('#header h1 a.photo');
  link.on('click', function(event) {
      event.preventDefault();
      var pathname = link[0].pathname
      switchPageByPathName(pathname);
      pushState(pathname);
  });
};

function installPopStateHandler() {
  window.addEventListener('popstate', function(e) {
      var pathname = location.pathname + location.hash
      hideResponsiveMenu();
      switchPageByPathName(pathname);
  });
}

var currentPage;
var isNavigationInitialized = false;
var hasHistoryApi = !!(window.history && history.pushState);

if (hasHistoryApi) {
  installPopStateHandler();
}

// Create spinner
$(function() {
  $('body').append('<div id="spinner"></div>');
  $('#spinner').hide();
});

// {{{ RESPONSIVE MENU ///////////////////////////////////////////////////////

function showResponsiveMenu() {
  $('#overlay, .menu').show();
}

function hideResponsiveMenu() {
  $('#overlay, .menu').hide();
}

function installResponsiveMenu() {
  $('#header').append('<div class="toggle-nav">&#9776;</div>');

  $('.toggle-nav').on('click', function(e) {
    showResponsiveMenu();
  });

  $('.menu a').each(function(i, link) {
    $(link).on('click', function(e) {
      hideResponsiveMenu();
      e.stopPropagation();
    });
  });

  $('body').append('<div id="overlay"></div>');

  $('#overlay').on('click', function(e) {
    hideResponsiveMenu();
  });
}

// }}}
// {{{ PHOTO /////////////////////////////////////////////////////////////////

var photo = function() {
  var fotorama;
  var fotoramaApi;

  function createNavigation() {
    var navHtml =   '<div id="caption"></div>'
                  + '<ul class="counter">'
                  +   '<li id="prev"><span>prev</span></li>'
                  +   '<li id="imgcounter"></li>'
                  +   '<li id="next"><span>next</span></li>'
                  +   '<li id="fullscreen"></li>'
                  + '</ul>';

    $('#nav').fadeTo(0, 0);
    $('#nav').append(navHtml);
    $('#imgcounter').disableSelection();
  }

  var fadeInDuration = 400;

  function createFotorama() {
    var smallScreen = $(window).height() < 350;

    fotorama = $('#fotorama');
    var opts = {
      width: '100%',
      height: '100%',
      nav: 'none',
      captions: false,
      transition: 'crossfade',
      transitionduration: fadeInDuration,
      allowfullscreen: 'native',
      arrows: false,
      // TODO works in fullscreen mode anyway WITHOUT specifying this
//      keyboard: true,
      hash: true,

      // NOTE: This option works only with my custom hacked fotorama.js
      bottomoffset: smallScreen ? 35 : 140
    };
    if (hasHistoryApi) {
      opts.startIndex = location.hash.replace(/^#/, '');
    }
    fotorama.fotorama(opts);
    fotoramaApi = fotorama.data('fotorama');
  }

  function installPhotoNavButtonHandlers() {
    $('#prev').click(function() {
      fotoramaApi.show('<');
    });
    $('#next').click(function() {
      fotoramaApi.show('>');
    });
    $('#fullscreen').click(function() {
      fotoramaApi.requestFullScreen();
    });
  }

  function installPhotoCounterAndCaptionHandlers() {

    function updateNav(e, fotorama) {
      var curr = fotoramaApi.activeIndex + 1;
      if (curr == 1) {
        $('#prev').addClass('disabled');
      } else {
        $('#prev').removeClass('disabled');
      }
      if (curr == fotoramaApi.data.length) {
        $('#next').addClass('disabled');
      } else {
        $('#next').removeClass('disabled');
      }
      if (curr < 10) {
        curr = '0' + curr;
      }
      max = fotoramaApi.size
      if (max < 10) {
        max = '0' + max;
      }
      $('#imgcounter').text(curr + ' / ' + max);
      $('#caption').text(fotoramaApi.activeFrame.caption);
      $('#nav').fadeTo(fadeInDuration, 1);
    };

    function pushCurrentPhoto(e, fotorama, replace) {
      var hash = fotorama.activeFrame.id || fotorama.activeIndex;
      if (location.hash.replace(/^#/, '') != hash) {
        if (replace) {
            replaceState('#' + hash);
        } else {
            pushState('#' + hash);
        }
      }
    }

    fotorama.on('fotorama:show', function(e, fotorama) {
      if (hasHistoryApi) {
        pushCurrentPhoto(e, fotorama, false);
      }
      updateNav(e, fotorama);
    });

    fotorama.on('fotorama:load', function(e, fotorama) {
      if (hasHistoryApi) {
        pushCurrentPhoto(e, fotorama, true);
      }
      updateNav(e, fotorama);
    });
  }

  function init() {
    if (hasHistoryApi) {
      initNavigation()
    }
    createNavigation();
    createFotorama();
    installPhotoNavButtonHandlers();
    installPhotoCounterAndCaptionHandlers();
  }

  function ajaxInit(url, delay) {
    loadFragment({
      url: url,
      selector: '#content',
      minDelay: delay,
      onLoad: function(fragment) {
        $('#content').html(fragment);
        init();
      }
    });
  }

  var fadeOutDuration = 300;

  function destroy() {
    $('#fotorama').fadeTo(fadeOutDuration, 0);
    $('#nav').fadeTo(fadeOutDuration, 0);
  }

  function destroyDuration() {
    return fadeOutDuration;
  }

  function updatePageHandler(pathname) {
    var hash = pathname.replace(/.*#/, '');
    if (hash) {
      fotoramaApi.show(hash);
    }
  }

  return {
    name: 'photo',
    init: init,
    ajaxInit: ajaxInit,
    destroy: destroy,
    destroyDuration: destroyDuration,
    updatePageHandler: updatePageHandler
  };
}();

// }}}
// {{{ ALBUMS ////////////////////////////////////////////////////////////////

var albums = function() {
  var loading = false;

  function installAlbumClickHandler() {
    $('.thumbs .album').each(function(i, album) {
      $('a', album).each(function(i, link) {
        $(link).on('click', function(event) {
          event.preventDefault();
          switchPageByPathName(link.pathname);
          pushState(link.pathname);
        });
      });
    });
  }

  function changeCategory(url) {
    // Update selected
    categories.removeClass('sel');
    categoryByHref(url).addClass('sel');
    fadeOutAlbums();
    loadCategory(url);
  }

  function categoryByHref(url) {
    var c = categories.find("[href='" + url + "']");
    if (c.length) {
      return c.parent();
    } else {
      return $(categories[0]);
    }
  }

  var fadeOutAlbumsDelay = 40;
  var fadeOutAlbumDuration = 20;

  function fadeOutAlbums() {
    $('.album').each(function(i, album) {
      $(album).delay(i * fadeOutAlbumsDelay).fadeTo(fadeOutAlbumDuration, 0);
    });
  }

  function fadeOutAlbumsDuration() {
    return ($('.album').length - 1)
           * fadeOutAlbumsDelay + fadeOutAlbumDuration;
  }

  function loadCategory(url) {
    loadFragment({
      url: url,
      selector: '.thumbs',
      minDelay: fadeOutAlbumsDuration(),
      onLoad: function(fragment) {
        $('.thumbs').html(fragment.children());
        fadeInAlbums();
        installAlbumClickHandler();
      }
    });
  }

  function fadeInAlbums(initialDelay) {
    var fadeInDelay = 120;
    var fadeInDuration = 400;
    initialDelay |= 0;

    $('.album').each(function(i, album) {
      $(album).delay(initialDelay + i * fadeInDelay)
              .fadeTo(fadeInDuration, 1);
    });
  }

  function init() {
    categories = $('.menu li.category');
    if (hasHistoryApi) {
      initNavigation()
      installAlbumClickHandler();
    }
    fadeInAlbums(250);
  }

  function ajaxInit(url, delay) {
    loadFragment({
      url: url,
      selector: '#content',
      minDelay: delay,
      onLoad: function(fragment) {
        $('#content').html(fragment.children());
        init();
      }
    });
  }

  function destroy() {
    fadeOutAlbums();
  }

  function destroyDuration() {
    return fadeOutAlbumsDuration();
  }

  function updatePageHandler(pathname) {
    changeCategory(pathname);
  }

  return {
    name: 'albums',
    init: init,
    ajaxInit: ajaxInit,
    destroy: destroy,
    destroyDuration: destroyDuration,
    updatePageHandler: updatePageHandler
  }
}();

// }}}
// {{{ ABOUT /////////////////////////////////////////////////////////////////

var about = function() {
  function fadeIn() {
    $('#about img').delay(200).fadeTo(400, 1);
    $('#about .text').delay(400).fadeTo(600, 1);
  }

  var imgFadeOutDelay = 0;
  var imgFadeOutDuration = 150;
  var textFadeOutDelay = 60;
  var textFadeOutDuration = 250;

  function fadeOut() {
    $('#about img').delay(imgFadeOutDelay).fadeTo(imgFadeOutDuration, 0);
    $('#about .text').delay(textFadeOutDelay).fadeTo(textFadeOutDuration, 0);
  }

  function fadeOutDuration() {
    return Math.max(imgFadeOutDelay + imgFadeOutDuration,
                    textFadeOutDelay + textFadeOutDuration);
  }

  function init() {
    if (hasHistoryApi) {
      initNavigation()
    }
    fadeIn();
  }

  function ajaxInit(url, delay) {
    loadFragment({
      url: url,
      selector: '#content',
      minDelay: delay,
      onLoad: function(fragment) {
        $('#content').html(fragment.children());
        init();
      }
    });
  }

  function destroy() {
    fadeOut();
  }

  function destroyDuration() {
    return fadeOutDuration();
  }

  return {
    name: 'about',
    init: init,
    ajaxInit: ajaxInit,
    destroy: destroy,
    destroyDuration: destroyDuration
  }
}();

var pageMappings = {
  'about': about,
  'albums': albums,
  'photo': photo
}

// }}}
/// GLOBAL MODULE EXPORTS ////////////////////////////////////////////////////

return {
  currentPage: currentPage,
  about: about,
  albums: albums,
  photo: photo
}

}();

/// GLOBAL MODULE END ////////////////////////////////////////////////////////

// vim:et ts=4 sts=4 foldmethod=marker
