$(function() {

	$('.something').live({
		mouseenter: function() {
			$(this).find('a.notquite').fadeIn(150);
    },
    mouseleave: function() {
      $(this).find('a.notquite').fadeOut(150);
			$(this).find('a.delete').fadeOut(150);
    }
  });
	
	$('a.notquite').live({
		click: function(e) {
			e.preventDefault();
			$(this).toggle();
			$(this).siblings('a.delete').toggle();
		}
	});
});
