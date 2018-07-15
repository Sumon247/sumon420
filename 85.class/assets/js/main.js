(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		$(".testimonial-carosel").owlCarousel({
    		items: 1,
    		dots: false,
    		nav: true,
            navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    		loop: true,
    	   autoplay:false,
        });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	