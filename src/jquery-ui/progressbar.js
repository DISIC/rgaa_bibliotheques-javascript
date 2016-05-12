var $ = require('jquery');



var progressbar = $( '#progressbar');
var progressLabel = $( '.progress-label' );
var progressbutton = $( '#progressbutton' );
progressbar.progressbar({
	value: false,
	ariaValuetextSuffix : '% suffix',
	ariaValuetextPrefix : 'prefix',
	region : $('#region'),
	labelledby : $('#description-composant'),
	change: function() {
		progressLabel.text( progressbar.progressbar( 'value' ) + '%' );
	},
	complete: function() {
		progressLabel.text( 'Terminé !' );
	}
});
function progress() {
	var val = progressbar.progressbar( 'value' ) || 0;

	progressbar.progressbar( 'value', val + 2 );

	if ( val < 99 ) {
		setTimeout( progress, 500 );
	}else{
		progressbutton.button('enable');
		progressbar.progressbar('value', 0);
	}
}
progressbutton.button({ label: 'Commencer' });
progressbutton.click(function() {
	progressbutton.button('disable');
	progress();
});
