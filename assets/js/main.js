jQuery(document).ready(function($) {
    var theme=0

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    // Change stylesheet
    $(document).keydown(function(event) {
        if (event.key == 'c') {
            var urlStyle = $('#theme-style')['0'].href.split('/');
            var baseUrlStyle = urlStyle.slice(0,-1).join('/');
            var themeId = '#theme-style';
            if (theme == 0) {
                changeStyle(themeId, baseUrlStyle, 'bn-custom1.css');
            } else if (theme == 1) {
                changeStyle(themeId, baseUrlStyle, 'bn-custom2.css');
            } else {
                changeStyle(themeId, baseUrlStyle, 'bn-custom.css');
                theme = 0;
            }
        }
    });

    function changeStyle(id, sheetBaseUrl, sheetUrl) {
        $.when($('body').fadeOut('2000')).then(function(){
            $(id)['0'].setAttribute('href', sheetBaseUrl + '/'+sheetUrl);
            $('body').show();
        });
        theme += 1;
    }

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


    // Typer animation
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
