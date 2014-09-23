ImageSearchApp.directive('resizable', function(){
	return {
		scope: {
			'neighbor': '@',
			'parent': '@'
		},
		link: function(scope, elem, attrs){
			$(elem).resizable({
			    handles: 'e',
			    resize: function(event, ui){
			    	var rest = $(scope.parent).width() - $(elem).width();
			    	$(scope.neighbor).css('width', rest + 'px');
			    }
			});
		}
	}
});