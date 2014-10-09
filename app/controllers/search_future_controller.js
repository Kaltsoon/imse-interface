ImageSearchApp.controller('SearchFutureController', ['$scope', 'API', function($scope, API){
	/*API.search().done(function(results){
		$scope.results = results;
	});*/

	$scope.iteration = 1;
	$scope.palette = $scope.$parent.palette;
	$scope.show_future = true;

	function generate_results(){
		var results = [];

		for(var i=0; i<10; i++){
			results.push({
				src: 'img/' + Math.round(Math.ceil(Math.random() * 5)) + '.jpg',
				importance: Math.round(Math.random() * 10)
			});
		}

		return results;
	}

	$scope.update_future = function(){
		/*API.future($scope.results).done(function(future){
			$scope.future = future;
		});*/

		$scope.future = generate_results();
	}

	$scope.results = generate_results();
	$scope.future = generate_results();

	$scope.next = function(){
		$scope.iteration++;

		/*API.next($scope.results).done(function(results){
				$scope.results = results;
		});*/

		$scope.results = generate_results();
	}
}]);
