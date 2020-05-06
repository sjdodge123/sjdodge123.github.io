/*!
    * Start Bootstrap - Freelancer v6.0.1 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
    var projectList = {
        "Stagehand" : {
          "id" : "stagehand-card",
          "card-title" : "Stagehand",
          "card-image" : "assets/img/stagehand.png",
          "card-alt" : "Stagehand portal image",
          "card-short" : "Custom ServiceNow portal for CBS Corporation",
          "modal-image": "assets/img/stagehand.png",
          "modal-title": "Stagehand",
          "modal-github": "",
          "modal-content":"Content"
        },
        "Group Manager" : {
          "id" : "gm-card",
          "card-title" : "Group Manager",
          "card-image" : "assets/img/groupmanager.png",
          "card-alt" : "Stagehand group manager image with group tiles",
          "card-short" : "Custom interface to managet Active Directory groups and memberships",
          "modal-image": "assets/img/groupmanager.png",
          "modal-title": "Group Manager",
          "modal-github": "",
          "modal-content":"Group Manager Content"
        },
        "SpaceRoyale.io" : {
          "id" : "sr-card",
          "card-title" : "SpaceRoyale.io",
          "card-image" : "assets/img/blaster_minimized.gif",
          "card-alt" : "Ship shooting laser turret at another ship",
          "card-short" : "Node js based battle royale game with realtime multiplayer",
          "modal-image": "assets/img/blaster_minimized.gif",
          "modal-title": "SpaceRoyale.io",
          "modal-github": "",
          "modal-content":"SpaceRoyale.io Content"
        }
        
    };
    var cardContainer = $("#card-container"),
        id = '',
        cardTitle = '',
        cardImage = '',
        cardAlt = '',
        cardShort = '',
        modalImage = '',
        modalTitle = '',
        modalGithub = '',
        modalContent = '';

    $.each( projectList, function( key, value ) {
      $.each(value, function( keyi, valuei ) {
        if(keyi == "id"){
          id = valuei;
        }
        if(keyi == "card-title"){
          cardTitle = valuei;
        }
        if(keyi == "card-image"){
          cardImage = valuei;
        }
        if(keyi == "card-alt"){
          cardAlt = valuei;
        }
        if(keyi == "card-short"){
          cardShort = valuei;
        }
        if(keyi == "modal-image"){
          modalImage = valuei;
        }
        if(keyi == "modal-title"){
          modalTitle = valuei;
        }
        if(keyi == "modal-github"){
          modalGithub = valuei;
        }
        if(keyi == "modal-content"){
          modalContent = valuei;
        }
      });
      cardContainer.append('<div class="col-md-6 col-lg-4 mb-5"><div id="'+ id +'" class="card portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal"></div></div>');
      var card = $("#"+ id +"");
      card.append('<img class="img-fluid w-100" src="'+cardImage+'" alt="'+cardAlt+'" />');
      card.append('<div class="card-body"><h5 class="card-title">'+cardTitle+'</h5><p class="card-text">'+cardShort+'</p></div>');
      card.append('<div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"><div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div></div>');
    });

  })(jQuery); // End of use strict
  