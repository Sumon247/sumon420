(function ($) {
	"use strict";

    jQuery(document).ready(function($){
	$('#web-design-progressbar').circleProgress({
	    value: 0.9,
	    size: 200,
	    fill: "#0ABBC1",
	    thickness: 2,
	    emptyFill:'#fff'

	  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-parsentenes').html(Math.round(90 * progress) + '<i>%</i>');
  });

	$('#graphic-design-progressbar').circleProgress({
	    value: 0.95,
	    size: 200,
	    fill: "#207044",
	    thickness: 2,
	    emptyFill:'#fff'

	  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-parsentenes').html(Math.round(95 * progress) + '<i>%</i>');
  });
	
	$('#digital-matketing-progressbar').circleProgress({
	    value: 0.84,
	    size: 200,
	    fill: "#BB0000",
	    thickness: 2,
	    emptyFill:'#fff'

	  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-parsentenes').html(Math.round(84 * progress) + '<i>%</i>');
  });


	
               


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	