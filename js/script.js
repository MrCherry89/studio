$(document).ready(function () {



	$(".main-menu li a").on("click", function (e) {
		e.preventDefault();
		$(".menu-wrap").removeClass("open");
		$("body, html").removeClass("overflow");
	});

	$('.main-menu li a, .anchore').smoothScroll({
		speed: 1000,
	});

	var parallax = document.getElementsByClassName('parallax');

	$.each(parallax, function (key, value) {

		var parallaxInstance = new Parallax(value, {
			relativeInput: true
		});
	});

	new WOW().init();

	$(".phone-number-input").inputmask({
		"mask": "+7 999-999-99-99",
	});

	$("img").addClass("lazy");


	$(function () {
		$('.lazy').Lazy();
	});

	$('.clients-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: $('.clients-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.clients-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
    },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
    },
  ]
	});

	$('.transport-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		draggable: false,
		swipe: false,
		fade: true,
		prevArrow: $('.transport-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.transport-slider-wrap .slider-navigation .slick-next'),
	});

	$('.transport-slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
	});

	$('.transport-slider3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
	});

	$('.popup-galley').magnificPopup({
		delegate: 'a',
		type: 'image'
	});

	$('.select-wrap select').select2({
		minimumResultsForSearch: 6,
	});

	$(".tab-menu li a").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".tab-menu").find("li").removeClass("active");
		$(this).closest("li").addClass("active");
		var index = $(this).closest("li").index();
		$(".tab-content-item").removeClass("active");
		$(".tab-content-item").eq(index).addClass("active");
	});

	jQuery('ul.tabs').each(function () {
		var $active, $content, $links = jQuery(this).find('a');
		$active = jQuery($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
		$active.addClass('active');
		$content = $($active[0].hash);
		$links.not($active).each(function () {
			jQuery(this.hash).hide();
		});

		jQuery(this).on('click', 'a', function (e) {
			$active.removeClass('active');
			$content.hide();
			$active = jQuery(this);
			$content = jQuery(this.hash);
			$active.addClass('active');
			$content.show();
			e.preventDefault();
		});
	});

	$(".drop-menu").on("click", function (e) {
		e.preventDefault();
		$(".menu-wrap").addClass("open");
		$("body, html").addClass("overflow");
	})

	$(".close-menu").on("click", function (e) {
		e.preventDefault();
		$(".menu-wrap").removeClass("open");
		$("body, html").removeClass("overflow");
	})

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
		},
	});

	$('.popup').magnificPopup({
		type: 'inline',
	});


	var priceBlock = $("#price");
	var priceTop = priceBlock.offset().top;

	$(window).bind("scroll", function () {
		var windiwTop = $(this).scrollTop();
		if (windiwTop > priceTop) {
			$("#map").addClass("show");
			$(window).unbind("scroll");
		}
	})




});
