ImageSearchApp.controller('SearchController', ['$scope', '$timeout', '$location', 'API', function($scope, $timeout, $location, API){
	/*API.send_palette($scope.$parent.palette)
	.done(function(images){
		$scope.results = images;
	});*/

	$scope.iteration = 1;
	$scope.palette = $scope.$parent.palette;

	function generate_results(){
		$timeout(function(){
			var results = [];

			for(var i=0; i<10; i++){
				results.push({
					src: 'img/' + Math.round(Math.ceil(Math.random() * 5)) + '.jpg',
					importance: Math.round(Math.random() * 10)
				});
			}

			$scope.loading = false;
			$scope.results = results;

		}, 500);
	}

	generate_results();
	$scope.loading = true;

	$scope.done = function(){
		/*API.next($scope.results, true).done(function(){
			$location.path('/palette');
		});*/

		$location.path('/palette');
	}

	$scope.next = function(){
		$scope.iteration++;
		$scope.loading = true;

		/*API.next($scope.results, false).done(function(images){
				$scope.results = images;
				$scope.loading = false;
		});*/


		generate_results();
	}
}]);
