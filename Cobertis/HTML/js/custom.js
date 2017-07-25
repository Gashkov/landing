// function videoStop() {
// 					$("video")[0].pause();
// 					// $('#video').attr('controls', 'controls');
// 					$('.play-icon').fadeIn();
// 				}

// 				setTimeout(videoStop, 7400);
			$("video").bind("ended", function() {
			   $('.play-icon').fadeIn();
			});


				$('.play-icon').click(function() {
					$('video')[0].play();
					$(this).fadeOut();
				})