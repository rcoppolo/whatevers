$(function() {

	var email = $('#user_email');
	var password = $('#user_password');
	var fake_password = $('#user_fake_password');
	var password_confirmation = $('#user_password_confirmation');
	var fake_password_confirmation = $('#user_fake_password_confirmation');
	var submit = $('#submit').parent();

	if(password.val()!=='') {
		fake_password.hide();
	} else {
		password.hide();
	};

	if(password_confirmation.val()!=='') {
		fake_password_confirmation.hide();
	} else {
		password_confirmation.hide();
	};

	//submit.hide();

	email.focus(function() {
		if( email.val() === 'Click here and type your email.') {
			$(this).val('');
		}
	});

	email.blur(function() {
		if(email.val()===''){
			email.val('Click here and type your email.');
		} else {
			// mad validations bro
		}
	});

	fake_password.focus(function() {
		fake_password.hide();
		password.show().focus();
	});

	password.blur(function() {
		if(password.val()===''){
			password.hide();
			fake_password.show();
		} else {
			// mad validations bro
		}
	});

	fake_password_confirmation.focus(function() {
		fake_password_confirmation.hide();
		password_confirmation.show().focus();
	});

	password_confirmation.blur(function() {
		if(password_confirmation.val()===''){
			password_confirmation.hide();
			fake_password_confirmation.show();
		} else {
			// mad validations bro
		}
	});
});
