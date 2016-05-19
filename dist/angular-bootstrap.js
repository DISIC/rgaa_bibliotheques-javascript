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

	var rgaaAngularBootstrap = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rgaa_angular-bootstrap\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	console.log(rgaaAngularBootstrap);

	/**
	 *
	 */
	var app = angular.module('ui.bootstrap.demo', ['rgaaAngularBootstrap']);

	app.controller('RatingDemoCtrl', __webpack_require__(1));
	app.controller('ProgressDemoCtrl', [
		'$scope',
		'$timeout',
		__webpack_require__(2)
	]);

	app.controller('ModalDemoCtrl', __webpack_require__(3));
	app.controller('ModalInstanceCtrl', __webpack_require__(4));
	app.controller('TabsDemoCtrl', __webpack_require__(5));
	app.controller('TooltipDemoCtrl', function(){});
	app.controller('AccordionDemoCtrl', __webpack_require__(6));
	app.controller('RadioButtonsCtrl', __webpack_require__(7));
	app.controller('CheckboxButtonsCtrl', __webpack_require__(8));
	app.controller('DatepickerDemoCtrl', __webpack_require__(9));


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 *
	 */
	module.exports = function ($scope) {
		$scope.rate = 7;
		$scope.max = 10;
		$scope.isReadonly = false;

		$scope.hoveringOver = function(value) {
			$scope.overStar = value;
			$scope.percent = 100 * (value / $scope.max);
		};

	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 *
	 */
	module.exports = function ($scope, $timeout) {
		$scope.busy = false;
		$scope.dynamic = 0;

		$scope.start = function() {
			progress();
		};

		function progress() {

			$scope.busy = true;

			if ( $scope.dynamic < 100 ) {
				$scope.dynamic++;
				$timeout( progress, 50 );
			}else{
				$scope.busy = false;
				console.log('done');
			}
		}
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 *
	 */
	module.exports = function ($scope, $modal, $log) {

		$scope.items = ['item1', 'item2', 'item3'];

		$scope.open = function (size) {

			var modalInstance = $modal.open({
				templateUrl: 'myModalContent.html',
				controller: 'ModalInstanceCtrl',
				size: size,
				resolve: {
					items: function () {
						return $scope.items;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 *
	 */
	module.exports = function ($scope, $modalInstance, items) {

		$scope.items = items;
		$scope.selected = {
			item: $scope.items[0]
		};

		$scope.ok = function () {
			$modalInstance.close($scope.selected.item);
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 *
	 */
	module.exports = function ($scope, $window) {
		$scope.tabs = [
			{ title:'Titre dynamique 1', content:'Contenu dynamique 1' },
			{ title:'Titre dynamique 2', content:'Contenu dynamique 2' }
		];
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 *
	 */
	module.exports = function ($scope) {
		$scope.oneAtATime = true;

		$scope.items = ['Item 1', 'Item 2', 'Item 3'];

		$scope.addItem = function() {
			var newItemNo = $scope.items.length + 1;
			$scope.items.push('Item ' + newItemNo);
		};

		$scope.status = {
			isFirstOpen: true,
			isFirstDisabled: false
		};
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 *
	 */
	module.exports = function ($scope) {
		$scope.radioModel = 'Centre';
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 *
	 */
	module.exports = function ($scope) {

		$scope.singleModel = 123;

		$scope.checkModel = {
			left: false,
			middle: true,
			right: false
		};

	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 *
	 */
	module.exports = function ($scope) {
		$scope.today = function() {
			$scope.dt = new Date();
		};
		$scope.today();

		$scope.clear = function () {
			$scope.dt = null;
		};

		$scope.open = function($event) {
			$event.preventDefault();
			$event.stopPropagation();

			$scope.opened = true;
		};

		$scope.dateOptions = {
			formatYear: 'yy',
			startingDay: 1
		};
		$scope.format = 'dd/MM/yyyy';
	};


/***/ }
/******/ ]);