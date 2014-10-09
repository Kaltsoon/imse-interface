ImageSearchApp.controller('SearchController', ['$scope', '$timeout', 'API', function($scope, $timeout, API){
	/*API.search().done(function(images){
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

	$scope.next = function(){
		$scope.iteration++;
		$scope.loading = true;

		/*API.next($scope.results).done(function(results){
				$scope.results = results;
				$scope.loading = false;
		});*/


		generate_results();
	}
}]);
