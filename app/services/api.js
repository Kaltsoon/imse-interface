ImageSearchApp.service('API', ['$http', function($http){
	var _public = {};

	var location = '';

	_public.send_palatte = function(colors){
		var formatted_colors = $.map(colors, function(color){
			return color.hex;
		});

		var callback = function(){};

		$http.get(location + '/firstround', {
			params: {
				colors: angular.toJson(formatted_colors),
				no_of_images: 12
			}
		})
		.success(function(images){
			images = angular.fromJson(images);

			var formatted_images = [];

			images.forEach(function(image){
				formatted_images.push({
					src: location + '/media/im' + ( parseInt(image) + 1 ) + '.jpg',
					sequence: parseInt(image),
					importance: 0
				});
			});

			callback(formatted_images);
		});

		return {
			done: function(suc){
				callback = suc;
			}
		}
	}

	_public.next = function(feedback, finished){
		var callback = function(){};

		var feedback_sequences = $.map(feedback, function(item){
			return item.sequence;
		});

		var feedback_values = $.map(feedback, function(item){
			return item.importance / 10;
		});

		$http.get(location + '/search', {
			params: {
				algorithm: 'GP-SOM',
				imagesnumiteration: feedback.length,
				category: 'none',
				feedback: angular.toJson(feedback_values),
				feedback_indicies: angular.toJson(feedback_sequences),
				finished: finished
			}
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
