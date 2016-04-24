jQuery(document).ready(function($) {

	setTimeout(function() {
		
		$('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
		$('.lead').fitText(2, { minFontSize: '10px', maxFontSize: '22px' });

	}, 100);

	$('header').css({
		'height': $(window).height()
	});

	$(window).on('resize', function() {

		$('header').css({ 'height': $(window).height() });
		$('body').css({ 'width': $(window).width() });

	});
	
});