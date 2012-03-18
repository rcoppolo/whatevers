$(function() {
	$('header').click(function(){
		$('#button').animate({
			background: 'white',
			height: '2.5em',
			width: '2.5em'
		}, 250);
		$('#button').css('background','white');
	});
});
