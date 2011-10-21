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
	$('a:not(".email, .source")').smoothScroll();
	
	// Team
	$('#team li').hover(function() {
		$('#team img').removeClass("active");
		var img = $(this).find('img').addClass("active");
		$('#sodelavke .name').html(img.attr('alt'));
		$('#sodelavke .role').html(img.data('role'));
	}, function() {});
});
