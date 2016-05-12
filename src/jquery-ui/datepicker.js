var $ = require('jquery');



$( '#datepicker' ).datepicker({
	showOn: 'button',
	buttonText: 'Choisir une date',
	onClose : function(){
		$( '#datepicker' ).focus();
	}
});

// Interdiction de la navigation au clavier dans le composant
$('#datepicker').next().attr('tabindex', '-1');
// Masquage du composant pour les technologies d'assitance
$('#ui-datepicker-div').attr('aria-hidden', 'true');
$('#ui-datepicker-div :focusable').attr('tabindex', '-1');
