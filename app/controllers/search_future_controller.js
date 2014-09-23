ImageSearchApp.controller('SearchFutureController', ['$scope', '$http', function($scope, $http){
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
		$scope.future = generate_results();
	}

	$scope.results = generate_results();
	$scope.future = generate_results();

	$scope.next = function(){
		$scope.iteration++;
		$scope.results = generate_results();
	}
}]);