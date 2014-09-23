ImageSearchApp.directive('paletteItem', function(){
	return {
		scope: {
			color: '@'
		},
		link: function(scope, elem, attrs){
			elem.css('background-color', scope.color);
			elem.css({ 'height': elem.width() + 'px', 'padding-top': ( elem.width() / 2 - 15 ) + 'px' });

			$(window).resize(function(){
				elem.css({ 'height': elem.width() + 'px' });
				elem.css({ 'height': elem.width() + 'px', 'padding-top': ( elem.width() / 2 - 15 ) + 'px' });
			});
		}
	}
});