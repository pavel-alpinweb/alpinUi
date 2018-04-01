$(document).ready(function() {

			// Добавляем тригеры для аккоридона

			$('.trigger-container .trigger').each(function(index, el) {
				var accordionTrigger = $(this).clone();
				var myTarget = $(this).attr('data-target');
				$('#' + myTarget).before(accordionTrigger);
			});

			
			
			
		
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
		});


	$('.change-style').click(function(event) {
		$('.alpin-ui').toggleClass('alpin-accordion');
		$('.alpin-ui').toggleClass('alpin-tabs');
	});
});