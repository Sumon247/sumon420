(function ($) {
	"use strict";

    jQuery(document).ready(function($){
	$(".homepage-slides").owlCarousel({
		items:1,
		nav:false,
		dots:true,
		loop:true,
		autoplay:true,
				
	});
$(".projtcts-item li").on('click', function (){
		var selector = $(this).attr('data-filter');
		$(".projects-list").isotope({
			filter:selector
		});	
		
	});
        
        


    });


    jQuery(window).load(function(){
	jQuery(".projects-list").isotope();
        
    });


}(jQuery));	