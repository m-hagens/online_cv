jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    // Show or hide the sticky footer button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});

	// Animate the scroll to top
	$('.go-top').click(function(event) {
		event.preventDefault();

		$('html, body').animate({scrollTop: 0}, 300);
	});

    typer('#summary-typer')
    .cursor({block: true, blink: 'soft', color: '#087e8b'})
    .pause(2000)
    .line('Hi, my name is Mats.')
    .pause(500)
    .back(16)
    .continue('I\'m a developer.')
    .pause(500)
    .back(11)
    .continue('n economist.')
    .pause(500)
    .back(16)
    .continue(' might be your next employee.')
    .pause(500)
    .back('all')
    .continue({container:'#hidden-summary'})
    .end()
    ;

});
