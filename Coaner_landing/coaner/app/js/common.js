$(document).ready(function() {

	$('.toggle-mnu').click(function() {
		$('.toggle-mnu').fadeOut();
	})
	$('.habitacio').click(function() {
		$('.toggle-mnu-habitacio').fadeIn();
	})
	$('.piscina').click(function() {
		$('.toggle-mnu-piscina').fadeIn();
	})
	$('.barbacoa').click(function() {
		$('.toggle-mnu-barbacoa').fadeIn();
	})
	$('.exteriors').click(function() {
		$('.toggle-mnu-exteriors').fadeIn();
	})		
	$('.sala-jocs').click(function() {
		$('.toggle-mnu-sala-jocs').fadeIn();
	})
	$('.entrada').click(function() {
		$('.toggle-mnu-entrada').fadeIn();
	})
	$('.sala-destar').click(function() {
		$('.toggle-mnu-sala-destar').fadeIn();
	})
	$('.cuino').click(function() {
		$('.toggle-mnu-cuino').fadeIn();
	})
	$('.llar').click(function() {
		$('.toggle-mnu-llar').fadeIn();
	})
	$('.mrenjador').click(function() {
		$('.toggle-mnu-mrenjador').fadeIn();
	})
	$('.cuina').click(function() {
		$('.toggle-mnu-cuina').fadeIn();
	})
	$('.habitacio-forn').click(function() {
		$('.toggle-mnu-habitacio-forn').fadeIn();
	})
	$('.habitacio-alcoves').click(function() {
		$('.toggle-mnu-habitacio-alcoves').fadeIn();
	})
	$('.habitacio-cuino').click(function() {
		$('.toggle-mnu-habitacio-cuino').fadeIn();
	})
	// Gallery

	$('.image12').click(function() {
		$('.toggle-mnu-image12').fadeIn();
	})
	$('.image01').click(function() {
		$('.toggle-mnu-image01').fadeIn();
	})
	$('.image02').click(function() {
		$('.toggle-mnu-image02').fadeIn();
	})
	$('.image03').click(function() {
		$('.toggle-mnu-image03').fadeIn();
	})
	$('.image04').click(function() {
		$('.toggle-mnu-image04').fadeIn();
	})
	$('.image05').click(function() {
		$('.toggle-mnu-image05').fadeIn();
	})
	$('.image06').click(function() {
		$('.toggle-mnu-image06').fadeIn();
	})
	$('.image07').click(function() {
		$('.toggle-mnu-image07').fadeIn();
	})
	$('.image08').click(function() {
		$('.toggle-mnu-image08').fadeIn();
	})
	$('.image09').click(function() {
		$('.toggle-mnu-image09').fadeIn();
	})
	$('.image10').click(function() {
		$('.toggle-mnu-image10').fadeIn();
	})
	$('.image11').click(function() {
		$('.toggle-mnu-image11').fadeIn();
	})

	$("a.ancLinks").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 2000 );
      return false;
    });

  //Back to top
  if ($('#back-to-top').length) {
    var scrollTrigger = 500, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}	

});