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
