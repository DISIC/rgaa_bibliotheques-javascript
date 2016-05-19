/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< HEAD
	__webpack_require__(10);
=======
	__webpack_require__(11);
>>>>>>> master



	/**
	 *
	 */
<<<<<<< HEAD
	__webpack_require__(11);
	__webpack_require__(13);
=======
	__webpack_require__(12);
>>>>>>> master
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
<<<<<<< HEAD
=======
	__webpack_require__(18);
>>>>>>> master


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
<<<<<<< HEAD
/* 10 */
=======
/* 10 */,
/* 11 */
>>>>>>> master
/***/ function(module, exports) {

	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 *
		 */
		__webpack_require__(1);
		__webpack_require__(3);
		__webpack_require__(4);
		__webpack_require__(5);


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(2);



		/**
		 *
		 */
		$.widget( 'ui.accordion', $.ui.accordion, {
			_toggleComplete: function(data) {
				this._super( data );
				if(
					typeof(data.newHeader[0]) === typeof undefined &&
					typeof(data.oldHeader[0]) !== typeof undefined &&
					typeof($('#'+data.oldHeader[0].id)) !== typeof undefined
					) {
					$('#' + data.oldHeader[0].id).attr('aria-expanded', false);
				}
			}
		});


	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		module.exports = jQuery;

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(2);



		/**
		 *
		 */
		$.widget( 'ui.dialog', $.ui.dialog, {
			open: function() {
				this._super();
				if (this.options.dialogClass !== null && this.options.dialogClass !== '') {
					var elementsFocusable = $('.' + this.options.dialogClass + ' :focusable');
					if (elementsFocusable[0]) {
						elementsFocusable[0].focus();
					}
				}
			}
		});


	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(2);



		/**
		 *
		 */
		$.widget( 'ui.progressbar', $.ui.progressbar, {
			_create: function( event, index ) {
				// Si une région est défini
				if (typeof(this.options.region !== typeof undefined)) {
					// si la région est défini en string, on recherche le node avec l'id associé
					if(jQuery.type(this.options.region) === 'string') {
						this.options.region = $('#' + this.options.region);
					}
					this.options.region.attr('aria-describedby', this.element[0].id);
				}
				// Si un labelledby est défini
				if (typeof(this.options.labelledby !== typeof undefined)) {
					if(jQuery.type(this.options.labelledby) === 'string') {
						// si la région est défini en string, on ajoute un attr 'title'
						this.element.attr('title', this.options.labelledby);
					}else if(jQuery.type(this.options.labelledby) === 'object'){
						// sinon, on ajout l'id du node associé dans le aria-labelledby
						this.element.attr('aria-labelledby', this.options.labelledby[0].id);
					}
				}
				this._super( event, index );
				if(typeof(this.element.attr('aria-valuemax')) === typeof undefined) {
					this.element.attr('aria-valuemax', this.options.max);
				}
			},
			_destroy: function( event, index ) {
				var attr = this.element.attr('aria-valuetext');
				if (typeof attr !== typeof undefined && attr !== false) {
					this.element.removeAttr( 'aria-valuetext' );
				}
				this._super( event, index );
			},
			_refreshValue: function(event, index ) {
				this._super( event, index );
				// MAj de l'attribut aria-valuetext
				if ( !this.indeterminate ) {
					var valuetext = this.options.value;
					if(typeof(this.options.ariaValuetextPrefix !== typeof undefined)) {
						valuetext = this.options.ariaValuetextPrefix + ' ' + valuetext;
					}
					if(typeof(this.options.ariaValuetextSuffix !== typeof undefined)) {
						valuetext += ' ' + this.options.ariaValuetextSuffix;
					}
					this.element.attr({
						'aria-valuetext': valuetext
					});
				}
				if(typeof(this.options.region !== typeof undefined)) {
					if (this.options.value === this.options.max) {
						// Suppression de l'attribut aria-busy si on est arrivés au bout de la progressbar
						this.options.region.attr('aria-busy', false);
					}else if(!this.indeterminate && this.options.value !== 0){
						this.options.region.attr('aria-busy', true);
					}
				}
			}
		});


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(2);



		/**
		 *
		 */
		$.widget( 'ui.slider', $.ui.slider, {
			_createHandles: function () {
				this._super();
				var newVal, attrHandle,
				self = this,
				options = this.options;
				this.handles.each(function(index) {
					//Set constant attribut
					attrHandle = {
						'role':'slider',
						'aria-valuemin':options.min,
						'aria-valuemax':options.max,
					};

					if (typeof(options.label[index] !== typeof undefined)) {
						if(jQuery.type(options.label[index]) === 'string') {
							attrHandle.title =  options.label[index];
						}else if(jQuery.type(options.label[index]) === 'object' && options.label[index].length > 0){
							attrHandle['aria-labelledby'] =  options.label[index][0].id;
						}
					}
					$(this).attr(attrHandle);
					//Set live attribut
					if ( options.values && options.values.length ) {
						newVal = self.values( index );
					} else {
						newVal = self.value();
					}
					self._updateHandles(index, newVal);
				});
			},
			_slide: function(event, index, newVal) {
				this._super(event, index, newVal);
				//Set live attribut
				this._updateHandles(index, newVal);
			},
			_updateHandles: function(index, newVal) {
				var options = this.options,
						attrHandle = {};

				if (options.ariaValuetext) {
							attrHandle['aria-valuetext'] =  newVal + ' ' + options.ariaValuetext;
				}

				attrHandle['aria-valuenow'] =  newVal;
				$(this.handles[index]).attr(attrHandle);
			}
		});


	/***/ }
	/******/ ]);

/***/ },
<<<<<<< HEAD
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
=======
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(13);
>>>>>>> master



	$( '#accordion' ).accordion({
		collapsible: true
	});


/***/ },
<<<<<<< HEAD
/* 12 */
=======
/* 13 */
>>>>>>> master
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
<<<<<<< HEAD
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
=======
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(13);
>>>>>>> master



	var availableTags = [
		'ActionScript',
		'AppleScript',
		'Asp',
		'BASIC',
		'C',
		'C++',
		'Clojure',
		'COBOL',
		'ColdFusion',
		'Erlang',
		'Fortran',
		'Groovy',
		'Haskell',
		'Java',
		'JavaScript',
		'Lisp',
		'Perl',
		'PHP',
		'Python',
		'Ruby',
		'Scala',
		'Scheme'
	];
	$( '#autocomplete' ).autocomplete({
		source: availableTags
	});


/***/ },
<<<<<<< HEAD
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
=======
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(13);
>>>>>>> master



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


/***/ },
<<<<<<< HEAD
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
=======
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(13);
>>>>>>> master



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


/***/ },
<<<<<<< HEAD
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
=======
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(13);
>>>>>>> master



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


/***/ },
<<<<<<< HEAD
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
=======
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(13);
>>>>>>> master



	$( "#slider" ).slider({
		ariaValuetext: '€',
		label: ['curseur simple']
	});

	$( "#slider2" ).slider({
		ariaValuetext: '$',
		label: [$('#slider_label')]
	});


/***/ }
/******/ ]);