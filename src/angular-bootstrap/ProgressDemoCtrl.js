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
