var $ = require('jquery');



$( "#slider" ).slider({
	ariaValuetext: '€',
	label: ['curseur simple']
});

$( "#slider2" ).slider({
	ariaValuetext: '$',
	label: [$('#slider_label')]
});
