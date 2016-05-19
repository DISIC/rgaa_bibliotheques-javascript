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

	var rgaaAngularBootstrap = __webpack_require__(1);

	console.log(rgaaAngularBootstrap);

	/**
	 *
	 */
	var app = angular.module('ui.bootstrap.demo', ['rgaaAngularBootstrap']);

	app.controller('RatingDemoCtrl', __webpack_require__(2));
	app.controller('ProgressDemoCtrl', [
		'$scope',
		'$timeout',
		__webpack_require__(3)
	]);

	app.controller('ModalDemoCtrl', __webpack_require__(4));
	app.controller('ModalInstanceCtrl', __webpack_require__(5));
	app.controller('TabsDemoCtrl', __webpack_require__(6));
	app.controller('TooltipDemoCtrl', function(){});
	app.controller('AccordionDemoCtrl', __webpack_require__(7));
	app.controller('RadioButtonsCtrl', __webpack_require__(8));
	app.controller('CheckboxButtonsCtrl', __webpack_require__(9));
	app.controller('DatepickerDemoCtrl', __webpack_require__(10));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["rgaa_angular-bootstrap"] = factory();
		else
			root["rgaa_angular-bootstrap"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
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
		var rgaaAngularBootstrap = angular
			.module('rgaaAngularBootstrap', ['ui.bootstrap'])
			.factory('getUID', __webpack_require__(1))
			.directive('uniqueId',  [
				'getUID',
				__webpack_require__(2)
			])
			.directive('enforceFocus', [
				'$document',
				'$timeout',
				__webpack_require__(3)
			])
			.directive('tabpanel', [
				'getUID',
				'$timeout',
				__webpack_require__(4)
			])
			.directive('tooltipPopup', [
				'getUID',
				__webpack_require__(5)]
			)
			.controller('GroupController', [
				'$scope',
				'$attrs',
				'accordionConfig',
				__webpack_require__(6)
			])
			.directive('group', __webpack_require__(7))
			.directive('groupItem', [
				'$timeout',
				__webpack_require__(8)
			])
			.directive('keySpace', __webpack_require__(9))
			.directive('keyboardRotate', [
				'$document',
				'$timeout',
				__webpack_require__(10)
			])
			.directive('btnRadio', __webpack_require__(11))
			.directive('btnCheckbox', __webpack_require__(12))
			.directive('datepickerPopupWrap', [
				'$document',
				'$timeout',
				__webpack_require__(13)
			]);



		var dayModule = angular
			.module('template/datepicker/day.html')
			.run([
				'$templateCache',
				__webpack_require__(14)
			]);



		var accordionModule = angular
			.module('template/accordion/accordion.html')
			.run([
				'$templateCache',
				__webpack_require__(15)
			]);



		var groupModule = angular
			.module('template/accordion/accordion.html')
			.run([
				'$templateCache',
				__webpack_require__(16)
			]);



		var windowModule = angular
			.module('template/modal/window.html')
			.run([
				'$templateCache',
				__webpack_require__(17)
			]);



		/**
		 *
		 */
		module.exports = rgaaAngularBootstrap;


	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function(){
		  return function(prefix){
		    do {
		      prefix += Math.floor(Math.random() * 1000000);
		    } while (document.getElementById(prefix));
		    return prefix;
		  };
		};


	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function(getUID){
		  return {
		    restrict:'A',
		    link: function(scope, element, attrs) {
		      var uniqueId = getUID(attrs.uniqueId+'-');
		      scope.uniqueId = uniqueId;
		    }
		  };
		};


	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function($document, $timeout){
		  return {
		    link: function($scope, iElm) {
		      //Save current focus
		      var modalOpener = $document[0].activeElement;
		      var modal = iElm[0].querySelectorAll('.modal-dialog');

		      //enforceFocus inside modal
		      function enforceFocus(evt) {
		        var firstElm = firstFocusable(iElm[0]);
		        if ( firstElm !== evt.target && !iElm[0].contains(evt.target)) {
		          firstElm.focus();
		        }
		      }
		      $document[0].addEventListener('focus', enforceFocus, true);


		      $scope.$on('$destroy',function() {
		        //back to first focus
		        modalOpener.focus();
		        //Remove event listener
		        $document[0].removeEventListener('focus', enforceFocus, true);
		      });

		      var tababbleSelector = 'a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
		      //focus last element inside modal
		      function focusLastElm(domEl) {
		        var list = domEl.querySelectorAll(tababbleSelector);
		        list[list.length - 1].focus();
		      }
		      //focus first element inside modal or modal himself
		      function firstFocusable(domEl) {
		        var firstElm;
		        var list = domEl.querySelectorAll(tababbleSelector);
		        if (list[0]) {
		          firstElm = list[0];
		        } else {
		          modal[0].setAttribute('tabindex', 0);
		          firstElm = modal[0];
		        }
		        return firstElm;
		      }
		      //focus lastElement when shitKey Tab on first element
		      function shiftKeyTabTrap (evt) {
		        if(firstFocusable(iElm[0]) === evt.target && evt.shiftKey && evt.keyCode === 9){
		          focusLastElm(iElm[0]);
		          evt.preventDefault();
		        }
		      }
		      iElm.bind('keydown', shiftKeyTabTrap);

		      $timeout(function(){
		        var firstElm = firstFocusable(iElm[0]);
		        firstElm.focus();
		      });

		    }
		  };
		};


	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function(getUID, $timeout){
		  return {
		    link: function($scope, iElm) {


		      function render() {

		        var tablist = iElm[0].firstElementChild;
		        var tabs = angular.element(tablist).children();

		        var tabContent = iElm[0].lastElementChild;
		        var tabpanels = angular.element(tabContent).children();

		        angular.forEach(angular.element(tabs), function(value, key){

		          var tab = angular.element(value);
		          var panel = angular.element(tabpanels[key]);

		          var idtab = getUID('tab-');
		          tab.attr('id', idtab);
		          panel.attr('aria-labelledby', idtab);

		          var idpanel = getUID('panel-');
		          panel.attr('id', idpanel);
		          tab.attr('aria-controls', idpanel);

		        });
		      }

		      $timeout(render,0);

		    }
		  };
		};


	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function(getUID){
		  return {
		    link: function($scope, iElm) {
		      //Add role tooltip
		      iElm.attr('role', 'tooltip');
		      //Add a Unique ID
		      var idtooltip = getUID('tooltip-');
		      iElm.attr('id', idtooltip);
		      var originElement = angular.element(iElm[0].previousElementSibling);
		      originElement.attr('aria-describedby', idtooltip);

		      //Remove tooltip on keyup ESC
		      function dismissTooltip (e) {
		        if(e.keyCode === 27){
		          iElm.remove();
		        }
		      }
		      originElement.bind('keyup', dismissTooltip);

		      $scope.$on('$destroy',function() {
		        originElement.removeAttr('aria-describedby');
		        originElement.unbind('keyup', dismissTooltip);
		      });

		    }
		  };
		};


	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function ($scope, $attrs, accordionConfig) {

		  // This array keeps track of the accordion groups
		  this.groups = [];
		  this.groupsElem = [];

		  // This is called from the accordion-group directive to add itself to the accordion
		  this.addGroup = function(groupScope, element) {
		    var that = this;
		    this.groups.push(groupScope);
		    this.groupsElem.push(element);

		    groupScope.$on('$destroy', function (event) {
		      that.removeGroup(groupScope);
		    });
		  };

		  // This is called from the accordion-group directive when to remove itself
		  this.removeGroup = function(group) {
		    var index = this.groups.indexOf(group);
		    if ( index !== -1 ) {
		      this.groups.splice(index, 1);
		      this.groupsElem.splice(index, 1);
		    }
		  };

		  this.initFocusable = function() {
		    var that = this;
		    angular.forEach(this.groups, function (group, index) {
		      if ( index === 0 ) {
		        group.isFocused = true;
		        that.groups.indexSelected = 0;
		      }
		    });
		  };

		  this.nextFocusable = function(change) {
		    this.groups.indexSelected = this.modulo(this.groups.indexSelected + change,this.groups.length);
		    this.changeSelected();
		    var focusElement = this.groupsElem[this.groups.indexSelected];
		    focusElement[0].focus();
		  };

		  this.elemFocus = function(group) {
		    var index = this.groups.indexOf(group);
		    this.groups.indexSelected = index;
		    this.changeSelected();
		  };

		  this.changeSelected = function() {
		    var that = this;
		    angular.forEach(this.groups, function (group, index) {
		      group.isFocused = false;
		      if ( index === that.groups.indexSelected ) {
		        group.isFocused = true;
		      }
		    });
		  };

		  this.modulo = function(i, iMax) {
		    return ((i % iMax) + iMax) % iMax;
		  };

		};


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		/**
		 * The group directive simply sets up the directive controller
		 */
		module.exports = function () {
		  return {
		    restrict:'EA',
		    controller:'GroupController',
		    priority: 10000,
		    link: function(scope, element, attrs, groupCtrl) {
		      groupCtrl.initFocusable();
		    }
		  };
		};


	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		/**
		 * The group-item directive indicates a block of html that
		 * will expand and collapse in an accordion
		 */
		module.exports = function($timeout) {
		  return {
		    require:'^group',
		    restrict:'EA',
		    priority: 10000,
		    scope: true,
		    link: function(scope, element, attrs, groupCtrl) {
		      scope.isFocused = false;
		      groupCtrl.addGroup(scope, element);

		      function KeyTrap (evt) {
		        var keyCode = evt.keyCode;
		        //Right key and up key
		        if (keyCode === 39 || keyCode === 40) {
		          groupCtrl.nextFocusable(1);
		          scope.$apply();
		        }
		        //Left key and down key
		        if (keyCode === 37 || keyCode === 38) {
		          groupCtrl.nextFocusable(-1);
		          scope.$apply();
		        }
		      }

		      element.on('keydown',KeyTrap);
		      element.on('click', function() {
		        groupCtrl.elemFocus(scope);
		        scope.$apply();
		      });

		    }
		  };
		};


	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function() {
		  return function(scope, element, attrs) {
		    element.bind('keydown keypress', function(event) {
		      if(event.which === 32) {
		        scope.$apply(function(){
		          scope.$eval(attrs.keySpace);
		        });
		        event.preventDefault();
		      }
		    });
		  };
		};


	/***/ },
	/* 10 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function($document,$timeout){
		  return {
		    restrict: 'A',
		    scope: {
		      param : '@keyboardRotate',
		    },
		    link: function($scope, iElm, iAttrs, controller) {
		      var recursion = $scope.param;
		      $timeout(function(){
		        function KeyTrap (evt) {
		          var next;
		          var keyCode = evt.keyCode;
		          //Right key and up key
		          if (keyCode === 39 || keyCode === 40) {
		            next = evt.target.nextElementSibling;
		            if (recursion === '1') {
		              next = evt.target.parentElement.nextElementSibling;
		            }
		            //if last go to first
		            if (!next) {
		              next = iElm.children()[0];
		            }
		          }
		          //Left key and down key
		          if (keyCode === 37 || keyCode === 38) {
		            next = evt.target.previousElementSibling;
		            if (recursion === '1') {
		              next = evt.target.parentElement.previousElementSibling;
		            }
		            //if first go to last
		            if (!next) {
		              var child = iElm.children();
		              next = child[child.length-1];
		            }
		          }
		          //go to next element if defined (previous or next)
		          if (next) {
		            if (recursion === '1') {
		              next = next.children[0];
		            }
		            next.click();
		            next.focus();
		          }
		        }
		        angular.element(iElm[0]).on('keydown',KeyTrap);
		      },0);
		    }
		  };
		};


	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function(){
		  return {
		    require: ['btnRadio', 'ngModel'],
		    priority: 200, //Make sure watches are fired after any other directives that affect the ngModel value
		    link: function($scope, iElm, iAttrs, controller) {
		      var buttonsCtrl = controller[0], ngModelCtrl = controller[1];

		      //model -> UI
		      ngModelCtrl.$render = function () {
		        var check = angular.equals(ngModelCtrl.$modelValue, $scope.$eval(iAttrs.btnRadio));
		        iElm.attr('aria-checked', check);
		        iElm.attr('tabindex', '-1');
		        if (check) {
		          iElm.attr('tabindex', '0');
		        }
		        iElm.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, $scope.$eval(iAttrs.btnRadio)));
		      };

		    }
		  };
		};


	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function(){
		  return {
		    require: ['btnCheckbox', 'ngModel'],
		    priority: 200, //Make sure watches are fired after any other directives that affect the ngModel value
		    link: function($scope, iElm, iAttrs, controller) {
		      var buttonsCtrl = controller[0], ngModelCtrl = controller[1];

		      function getTrueValue() {
		        return getCheckboxValue(iAttrs.btnCheckboxTrue, true);
		      }

		      function getCheckboxValue(attributeValue, defaultValue) {
		        var val = $scope.$eval(attributeValue);
		        return angular.isDefined(val) ? val : defaultValue;
		      }

		      //model -> UI
		      ngModelCtrl.$render = function () {
		        var check = angular.equals(ngModelCtrl.$modelValue, getTrueValue());
		        iElm.attr('aria-checked', check);
		        iElm.toggleClass(buttonsCtrl.activeClass, check);
		      };

		    }
		  };
		};


	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function($document, $timeout){
		  return {
		    link: function($scope, iElm, iAttrs, controller) {

		      var elemOpener;
		      $scope.$watch('isOpen', function(value) {
		        if (value) {
		          elemOpener = $document[0].activeElement;
		        }
		      });

		      function backToElemOpener (evt) {
		        if (evt.which === 27) {
		          $timeout(function() {
		            elemOpener.focus();
		          });
		        }
		      }
		      //Add event listener
		      iElm.bind('keydown', backToElemOpener);


		      $scope.$on('$destroy',function() {
		        //Remove event listener
		        iElm.unbind('keydown', backToElemOpener);
		      });
		    }
		  };
		};


	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function($templateCache) {
		  $templateCache.put(
		    'template/datepicker/day.html',
		    '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n' +
		    '  <thead>\n' +
		    '    <tr>\n' +
		    '      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n' +
		    '      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n' +
		    '      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n' +
		    '    </tr>\n' +
		    '    <tr>\n' +
		    '      <th ng-show="showWeeks" class="text-center"></th>\n' +
		    '      <th role="columnheader" ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n' +
		    '    </tr>\n' +
		    '  </thead>\n' +
		    '  <tbody>\n' +
		    '    <tr role="row" ng-repeat="row in rows track by $index">\n' +
		    '      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n' +
		    '      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n' +
		    '        <button type="button" style="width:100%;" class="btn btn-default btn-sm" aria-selected="{{dt.selected ? \'true\' : \'false\'}}" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n' +
		    '      </td>\n' +
		    '    </tr>\n' +
		    '  </tbody>\n' +
		    '</table>\n' +
		    '');
		};


	/***/ },
	/* 15 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function($templateCache) {
		  $templateCache.put(
		    'template/accordion/accordion.html',
		    '<div group role="tablist" class="panel-group" ng-transclude></div>'
		  );
		};


	/***/ },
	/* 16 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function($templateCache) {
		  $templateCache.put(
		    'template/accordion/accordion-group.html',
		    '<div unique-id="accordion" class="panel panel-default">\n' +
		    '  <div role="tab" class="panel-heading">\n' +
		    '    <h4 id="{{uniqueId}}" class="panel-title">\n' +
		    '      <a group-item aria-selected="{{isOpen}}" tabindex="{{isFocused ? \'0\' : \'-1\'}}" aria-expanded="{{isOpen}}" href class="accordion-toggle" key-space="toggleOpen()" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n' +
		    '    </h4>\n' +
		    '  </div>\n' +
		    '  <div role="tabpanel" aria-labelledby="{{uniqueId}}" aria-hidden="{{!isOpen}}" class="panel-collapse" collapse="!isOpen">\n' +
		    '   <div class="panel-body" ng-transclude></div>\n' +
		    '  </div>\n' +
		    '</div>\n' +
		    '');
		};


	/***/ },
	/* 17 */
	/***/ function(module, exports) {

		/**
		 *
		 */
		module.exports = function($templateCache) {
		  $templateCache.put(
		    "template/modal/window.html",
		    "<div><div enforce-focus class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" >\n" +
		    "    <div class=\"modal-dialog\" aria-labelledby=\"titre-modal\" role=\"dialog\" ng-class=\"{'modal-sm': size == 'sm', 'modal-lg': size == 'lg'}\"><div class=\"modal-content\" modal-transclude></div></div>\n" +
		    "</div><div tabindex=\"0\"></div></div>"
		  );
		};


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ function(module, exports) {

	/**
	 *
	 */
	module.exports = function ($scope) {
		$scope.radioModel = 'Centre';
	};


/***/ },
/* 9 */
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
/* 10 */
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