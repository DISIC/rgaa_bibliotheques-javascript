var $ = require('jquery');



$( "#slider" ).slider({
	ariaValuetext: '€',
	label: ['curseur simple']
});

$( "#slidervertical" ).slider({
	ariaValuetext: '$',
	orientation: "vertical",
	label: [$('#slider_label')]
});
