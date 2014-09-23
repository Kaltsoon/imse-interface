var ImageSearchApp = angular.module('ImageSearchApp', ['ngRoute', 'ngAnimate', 'wu.masonry', 'ui.slider']);

ImageSearchApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/search', {
		templateUrl: 'app/views/search.html',
		controller: 'SearchController'
	})
	.when('/palette', {
		templateUrl: 'app/views/palette.html',
		controller: 'PaletteController'
	})
	.when('/search-future', {
		templateUrl: 'app/views/search_future.html',
		controller: 'SearchFutureController'
	})
	.otherwise({
		redirectTo: '/palette'
	});
}]);

