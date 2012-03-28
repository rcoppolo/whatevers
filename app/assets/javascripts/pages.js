$(function() {
	
	var something_new = $('#something_new');

	something_new.hide();

	var new_something_input = something_new.find('input#something_content');

	$('#button').hover(function() {
		$(this).addClass('add_something');
	}, function() {
		$(this).removeClass('add_something');
	});

	$('#button').live({
    click: function() {
      something_new.fadeIn(150).find('input#something_content').focus();
    }
	});

  new_something_input.live({
		blur: function() {
      if( !$(this).val() ) {
        something_new.fadeOut(100);
			}
		}
	});
});
