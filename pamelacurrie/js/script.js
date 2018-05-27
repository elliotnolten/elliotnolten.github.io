(function($) {

	$(document).ready(function(){
		
		var header = $('header');
		var heroBottom = $('#hero').height();

		$(window).scroll(function(){
			if ($(this).scrollTop() >= heroBottom) {
				header.addClass('show');
			} else {
				header.removeClass('show');
			}
		});

	});

}) (jQuery);