$(function() {

	var email = $('#email');
	var password = $('#password');
	var fake_password = $('#fake_password');
	var submit = $('#submit').parent();

	if ( !email.val() ) {
		email.val('Click here and type your email');
	}

	if( password.val() ) {
		fake_password.hide();
	} else {
		password.hide();
	};

	//submit.hide();

	email.focus(function() {
		if( email.val() === 'Click here and type your email') {
			$(this).val('');
		}
	});

	email.blur(function() {
		if( !email.val() ){
			email.val('Click here and type your email');
		} else {
			// mad validations bro
		}
	});

	fake_password.focus(function() {
		fake_password.hide();
		password.show().focus();
	});

	password.blur(function() {
		if( !password.val() ){
			password.hide();
			fake_password.show();
		} else {
			// mad validations bro
		}
	});
});
