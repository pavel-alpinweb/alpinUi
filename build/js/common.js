$(document).ready(function() {

			// Добавляем тригеры для аккоридона

			$('.trigger-container .trigger').each(function(index, el) {
				var accordionTrigger = $(this).clone();
				var myTarget = $(this).attr('data-target');
				$('#' + myTarget).before(accordionTrigger);
			});

			
			$('.alpin-lightbox .my-content').removeClass('active-content');
			
		
		/*главная функция смены элемента*/
		
		$('.trigger').click(function(event) {
			/*Получаем нужный объект*/
			var myTarget = $(this).attr('data-target');
			
			/*Показываем нужынй объект другие прячем*/
			$('.my-content').removeClass('active-content');
			$('#' + myTarget).addClass('active-content');

			// меняем активность у вкладок
			var activeContent = $('#' + myTarget).attr('id');
			$('.trigger').removeClass('active-trigger');
			$('[data-target=' + activeContent + ']').addClass('active-trigger');	

			/*Скрипты для окон*/

			/*Оборачиваем активный элемент в оверлей*/
			$('.alpin-lightbox .active-content').wrap('<div class="overlay"></div>');
		});

		$('body').on('click', '.overlay', function(event) {
			$('.active-content').removeClass('active-content').unwrap('.overlay');
		});

	/*Скрипты для слайдера*/
	$('.content-container').append('<div class="alpin-next"></div>').append('<div class="alpin-prev"></div>');

	$('.content-container').on('click', '.alpin-next', function(event) {
		
		if(!$(this).siblings('.my-content').last().hasClass('active-content')){
			$('.active-content').next().next()
			.addClass('active-content')
			.css('animation', 'slideNext .4s');
			$('.active-content').first().removeClass('active-content');
		}
		else{
			$(this).siblings('.my-content').removeClass('active-content');
			$(this).siblings('.my-content').first().addClass('active-content').css('animation', 'slideNext .4s');
		}

		// меняем активность у вкладок
		var activeSlide = $(this).siblings('.active-content').attr('id');
		$('.trigger').removeClass('active-trigger');
		$('[data-target=' + activeSlide + ']').addClass('active-trigger');
	});
	$('.content-container').on('click', '.alpin-prev', function(event) {
		
		if(!$(this).siblings('.my-content').first().hasClass('active-content')){
			$('.active-content').prev().prev()
			.addClass('active-content')
			.css('animation', 'slidePrev .4s');
			$('.active-content').last().removeClass('active-content');
		}
		else{
			$(this).siblings('.my-content').removeClass('active-content');
			$(this).siblings('.my-content').last().addClass('active-content').css('animation', 'slidePrev .4s');
		}

		// меняем активность у вкладок
		var activeSlide = $(this).siblings('.active-content').attr('id');
		$('.trigger').removeClass('active-trigger');
		$('[data-target=' + activeSlide + ']').addClass('active-trigger');
	});



	/*функция перерисовки виджетов*/

	function changeVidget(selector,vidget){
		if($(selector).hasClass('alpin-lightbox')){
			var openSlide = $(selector).children('.trigger-container').children('.active-trigger').attr('data-target');
			$('#' + openSlide).addClass('active-content');
		}
		$(selector)
		.removeClass('alpin-accordion')
		.removeClass('alpin-lightbox')
		.removeClass('alpin-tabs')
		.removeClass('alpin-slider')
		.addClass(vidget);

	}

	/*Кнопки смены виджетов*/

	$('.change-style-tabs').click(function(event) {
		changeVidget('.alpin-ui','alpin-tabs');
	});

	$('.change-style-accordion').click(function(event) {
		changeVidget('.alpin-ui','alpin-accordion');
	});

	$('.change-style-lightbox').click(function(event) {
		changeVidget('.alpin-ui','alpin-lightbox');
		$('.alpin-lightbox .my-content').removeClass('active-content');
	});

	$('.change-style-slider').click(function(event) {
		changeVidget('.alpin-ui','alpin-slider');
	});
});