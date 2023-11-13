$(document).ready(function() {
	$('.scroll-to').on('click', function() {

		let href = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			duration: 700,
			easing: "linear"
		});

		return false;
	});
	$(document).on('scroll', function() {
		if ($(window).scrollTop() > 40) {
			$('.hero__arrow-wrapper').addClass('hidden')
		} else if($(window).scrollTop() < 40) {
			$('.hero__arrow-wrapper').removeClass('hidden')

		}
		console.log($(window).scrollTop());
	});
	var test__swiper = new Swiper(".test__swiper", {
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".test__btn-next",
			prevEl: ".test__btn-prev",
		},
		spaceBetween: 50,
		autoHeight: true,
		effect: 'fade',
		allowTouchMove: false,
	});

	$( ".test__radiobuttons input").on( "click", function() {
		$(this).addClass('active')
		$(this).closest('.test__radiobuttons').addClass('disable')
		setTimeout(function () {
			test__swiper.slideNext()
		}, 1000);
	});
	
	
	$(document).on('click', '.show-result', function(event) {
		var test_input_value_sum = 0;
		$('.test__radiobuttons input.active').each(function() {
			var test_input_value = parseInt($(this).val());
			if (!isNaN(test_input_value)) {
				test_input_value_sum += test_input_value;
			}
		});
		console.log(test_input_value_sum);

		if (test_input_value_sum >= 0 && test_input_value_sum <= 6) {
			$('.result2').removeClass('active');
			$('.result3').removeClass('active');
			$('.result1').addClass('active');
		} else if (test_input_value_sum >= 7 && test_input_value_sum <= 10){
			$('.result1').removeClass('active');
			$('.result3').removeClass('active');
			$('.result2').addClass('active');
		} else if (test_input_value_sum >= 11 && test_input_value_sum <= 14){
			$('.result1').removeClass('active');
			$('.result2').removeClass('active');
			$('.result3').addClass('active');
		}

		setTimeout(function () {
			$('.test__container').slideUp();
			$('.result').slideDown(700);
		}, 1000);
	});


	if ($(window).innerWidth() <= 768) {
		$('body').addClass('no-scroll')
		setTimeout(function() {
			$('.hero__preload-mobile').fadeOut(700);
			$('body').removeClass('no-scroll')
			$('.hero__body').removeClass('hidden')
		}, 4000)
	}
	
	



	$('.open-video').fancybox({});
	AOS.init();
})