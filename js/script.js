/* Author: Mozeg, d.o.o.

*/

$(function() {
	// Navigation
	$('nav a').click(function() {
		$('nav a').removeClass('active');
		$(this).addClass('active');
	});
	
	// Scroll Top
	$('.top').click(function() {
		$('nav a').removeClass('active');
		$('h1 a').addClass('active');
	});
	
	// Smooth Scroll
	$('a:not(".email, .source, .show")').smoothScroll({
		afterScroll: function(data) {
			window.location.hash = data.link.hash;
		}
	});
	
	// Show details on click
	$('.show').click(function(e) {
		e.preventDefault();
		$(this).parents('section').find('ol').addClass('hidden');
		$('.' + $(this).attr("href").substring(1)).toggleClass('hidden');
	});

	// Show details on hover
	$('.hover li').hover(function() {
		var section = $(this).parents('section');
		section.find('img').removeClass("active");
		var img = $(this).find('img').addClass("active");

		section.find('aside').css("margin-left", $(this).position().left)
			   .find('.primary').html(img.attr('alt')).end()
			   .find('.secondary').html(img.data('secondary'));
	}, function() {});

});



