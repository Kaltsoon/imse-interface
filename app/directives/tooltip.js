ImageSearchApp.directive('tooltip', function(){
	return {
		link: function(scope, elem, attrs){
			$(elem).tooltip();
		}
	}
});