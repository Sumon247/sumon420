jQuery(document).ready(function($) {
  	$(".play-btn").magnificPopup({
  		type: 'video'
  	});

  	$('#map').gmap3({
  	address: "Haltern am See, Weseler Str. 151",
  	zoom: 10,
  	mapTypeId : google.maps.MapTypeId.ROADMAP
	});


});