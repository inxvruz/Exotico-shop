jQuery(function(){
	"use strict";

	// Responsive menu

	if($(".fa-bars").length){
		$(".fa-bars").on("click", function(){
			$(".header_top .inner_header nav > ul").show();
			$(this).hide();
			$(".fa-times").show();
		});
		$(".fa-times").on("click", function () {
			$(".header_top .inner_header nav > ul").hide();
			$(this).hide();
			$(".fa-bars").show();
		});
	}

	// Responsive menu for Mobile
	if($(".fa-grip-lines").length){
		$(".fa-grip-lines").on("click", function(){
			$("div.mobile-navigation nav.mobile_nav.wrapper").show();
			$(this).hide();
			$(".fa-times-circle").show();
		});
		$(".fa-times-circle").on("click", function () {
			$("div.mobile-navigation nav.mobile_nav.wrapper").hide();
			$(this).hide();
			$(".fa-grip-lines").show();
		});
	}

	// Header slider
	if ($('.home_slider').length){
		$('.home_slider').slick({
			vertical:true,
			arrows:false,
			dots:true
		});
	}

	// Twitter slider
	if ($('.content_slider_tweeter').length){
		$('.content_slider_tweeter').slick({
			vertical:true,
			appendArrows: $(".arrows"),
			prevArrow: "<span class=\"top\"><i class=\"fas fa-arrow-up\"></i></span>",
			nextArrow: "<span class=\"down\"><i class=\"fas fa-arrow-down\"></i></span>"
		});
	}

	// carousel slider for items
	if ($('.shop_carusel').length) {
		$('.shop_carusel').slick({
			infinite: true,			
			slidesToShow: 4,
			slidesToScroll: 1,
			appendArrows: $(".shop_slider_navigation"),
			prevArrow: "<div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div>",
			nextArrow: "<div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div>",
			responsive: [
				{
					breakpoint: 415,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			]
		});
	}
	

	if ($(".open_video").length) {
		$(".open_video").magnificPopup({
			disableOn: 700,
			type: "iframe",
			mainClass: "nfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPas: false
		});
	}


	if ($(".testy_gallery").length) {
		$(".testy_gallery").magnificPopup({
		  type: "image",
		  closeOnContentClick: true,
		  mainClass: "mfp-img-nobile",
		  image: {
		      verticalFit: true
			}
		});
	}

/*	$('.testimonial_gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
      }
    });*/

});