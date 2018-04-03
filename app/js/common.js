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

			/*Оборачиваем активный элемент в оверлей*/
			$('.alpin-lightbox .active-content').wrap('<div class="overlay"></div>');

			// меняем активность у вкладок
			var activeContent = $('#' + myTarget).attr('id');
			$('.trigger').removeClass('active-trigger');
			$('[data-target=' + activeContent + ']').addClass('active-trigger');	

			/*Скрипты для окон*/

			
		});

		$('body').on('click', '.overlay', function(event) {
			$('.active-content').removeClass('active-content').unwrap('.overlay');
		});

	/*функция перерисовки виджетов*/

	function changeVidget(selector,vidget){
		$(selector)
		.removeClass('alpin-accordion')
		.removeClass('alpin-lightbox')
		.removeClass('alpin-tabs')
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
});