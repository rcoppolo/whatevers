$(function() {
	
	var something_new = $('#something_new');
	something_new.toggle();

	var new_something_input = something_new.find('input#something_content');

	$('.something').live({
		mouseenter: function() {
			$(this).find('a.delete').fadeIn(150);
		},
		mouseleave: function() {
			$(this).find('a.delete').fadeOut(150)
		}
	});

	$('#button').hover(function() {
		$(this).addClass('add_something');
	}, function() {
		$(this).removeClass('add_something');
	});


	new_something_input.live({
		blur: function() {
			if( !$(this).val() ) {
				something_new.fadeOut(100);
			}
		}
	});
});


$('#button').live({
	click: function() {
		$('#something_new').fadeIn(150);
		$('#something_new').find('input#something_content').focus();
	}
});
