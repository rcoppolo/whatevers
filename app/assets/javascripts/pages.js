$(function() {
	
	var something_new = $('#something_new');
	something_new.toggle();

	var new_something_input = something_new.find('input#something_content');

	$('.something').hover(function() {
		$(this).find('a.delete').fadeIn(100);
	}, function() {
		$(this).find('a.delete').fadeOut(100)
	});

	$('#button').hover(function() {
		$(this).addClass('add_something');
	}, function() {
		$(this).removeClass('add_something');
	});

	$('#button').click(function() {
		something_new.fadeIn(100);
		new_something_input.focus();
	});

	new_something_input.blur(function() {
		if( !$(this).val() ) {
			something_new.fadeOut(100);
		}
	});
});
