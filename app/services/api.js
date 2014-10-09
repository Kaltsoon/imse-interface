ImageSearchApp.service('API', ['$http', function($http){
	var _public = {};

	_public.send_palatte = function(colors){
		var callback = function(){};

		$http({
			method: 'POST',
			url: '/palette',
			data: angular.toJson(colors)
		})
		.success(function(){
			callback();
		});

		return {
			done: function(suc){
				callback = suc;
			}
		}
	}

	_public.search = function(){
		var callback = function(images){};

		$http({
			method: 'GET',
			url: '/search'
		})
		.success(function(images){
			callback(images);
		});

		return{
			done: function(suc){
				callback = suc;
			}
		}
	}

	_public.next = function(feedback){
		var callback = function(images){};

		$http({
			method: 'POST',
			url: '/next',
			data: angular.toJson(feedback)
		})
		.success(function(images){
			callback(images);
		});

		return {
			done: function(suc){
				callback = suc;
			}
		}
	}

	_public.future = function(feedback){
		var callback = function(images){};

		$http({
			method: 'POST',
			url: '/future',
			data: angular.toJson(feedback)
		})
		.success(function(images){
			callback(images);
		});

		return {
			done: function(suc){
				callback = suc;
			}
		}
	}

	return _public;

}]);
