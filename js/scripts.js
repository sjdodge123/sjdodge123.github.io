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

    var cardContainer = $("#card-container"),
        pageBody = $("#page-top"),
        id = '',
        cardTitle = '',
        cardImage = '',
        cardAlt = '',
        cardShort = '',
        cardSkills = '',
        modalImage = '',
        modalTitle = '',
        modalUrl = '',
        modalGithub = '',
        modalContent = '';
    
    $.getJSON("/assets/files/projects.json", function(json) {
      $.each( json, function( key, value ) {
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
          if(keyi == "card-skills"){
            cardSkills = valuei;
          }
          if(keyi == "modal-image"){
            modalImage = valuei;
          }
          if(keyi == "modal-title"){
            modalTitle = valuei;
          }
          if(keyi == "modal-url"){
            modalUrl = valuei;
          }
          if(keyi == "modal-github"){
            modalGithub = valuei;
          }
          if(keyi == "modal-content"){
            modalContent = valuei;
          }
        });
        //Insert card
        cardContainer.append('<div class="col-md-6 col-lg-4 mb-5"><div id="'+ id +'" class="card portfolio-item mx-auto" data-toggle="modal" data-target="#pm-'+id+'"></div></div>');
        //Insert card values
        var card = $("#"+ id +"");
        card.append('<img class="img-fluid w-100" src="'+cardImage+'" alt="'+cardAlt+'" />');
        card.append('<div class="card-body text-secondary"><h5 class="card-title">'+cardTitle+'</h5><p class="card-text">'+cardShort+'</p><div class="card-foot text-secondary text-center"><p class="text-center">'+ cardSkills +'</p></div>');
        card.append('<div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"><div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div></div>');
        //Insert Modal
        pageBody.append('<div class="portfolio-modal modal fade" id="pm-'+ id + '" tabindex="-1" role="dialog" aria-labelledby="portfolioModalLabel" aria-hidden="true"><div class="modal-dialog modal-xl" role="document"><div class="modal-content"><button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fas fa-times"></i></span></button><div class="modal-body"><div id ="md-'+id+'" class="container"></div></div></div></div></div>');
        var modalData = $("#md-"+ id +"");
        //Insert Modal header
        modalData.append('<div class="row justify-content-center"><div id="mh-'+id+'" class="col-lg-8 text-center mb-5"><h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">'+modalTitle+'</h2><br/><img class="img-fluid rounded w-100" src="'+modalImage+'" alt="'+cardAlt+'" /></div></div>');
        var modalHeader = $("#mh-"+ id+"");
        //Modal icons
        if(modalGithub != ''){
          modalHeader.append('<a class="mt-3 btn btn-outline-dark btn-social mx-1" href="'+modalGithub+'"><i class="fab fa-fw fa-github"></i></a>');
        }
        if(modalUrl != ''){
          modalHeader.append('<a class="mt-3 btn btn-outline-dark btn-social mx-1" href="'+modalUrl+'"><i class="fas fa-link"></i></a>');
        }
        //Insert Modal content
        modalData.append('<div class="justify-content-start mb-5">'+modalContent+'</div>');
        //Insert Modal footer
        modalData.append('<div class="row justify-content-center"><button class="btn btn-primary" href="#" data-dismiss="modal"><i class="fas fa-times fa-fw"></i>Close Window</button></div>');
      });
    });


  })(jQuery); // End of use strict