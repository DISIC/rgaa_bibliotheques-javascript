var $ = require('jquery');



$( "#dialog" ).dialog({
	dialogClass: "id-dialog",
	autoOpen: false
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});

// Hover states on the static widgets
$( "#dialog-link, #dialog-link-2, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);
