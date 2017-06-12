var rgaaAngularBootstrap = require('rgaa_angular-bootstrap');



/**
 *
 */
var app = angular.module('ui.bootstrap.demo', ['rgaaAngularBootstrap']);

app.controller('RatingDemoCtrl', require('./RatingDemoCtrl'));
app.controller('ProgressDemoCtrl', [
	'$scope',
	'$timeout',
	require('./ProgressDemoCtrl')
]);

app.controller('TabsDemoCtrl', require('./TabsDemoCtrl'));
app.controller('TooltipDemoCtrl', function(){});
app.controller('AccordionDemoCtrl', require('./AccordionDemoCtrl'));
app.controller('RadioButtonsCtrl', require('./RadioButtonsCtrl'));
app.controller('CheckboxButtonsCtrl', require('./CheckboxButtonsCtrl'));
app.controller('DatepickerDemoCtrl', require('./DatepickerDemoCtrl'));
