var CORRECT_USER='cuong';
var CORRECT_PASS='cuong';
var inputUsename=document.getElementById('username');

var inputPassword=document.getElementById('password');

var formlogin=document.getElementById('form-login');
	if (formlogin.attachEvent) {
		formlogin.attachEvent('submit', onFormSubmit);

	}
	else{
		formlogin.addEventListener('submit',onFormSubmit)
	}

function onFormSubmit(e) {
	var username=inputUsename.value;
	var password=inputPassword.value;
	if (username==CORRECT_USER&&password==CORRECT_PASS) {
		alert('Dang nhap thanh cong');
	}
	else{
		alert('Dang nhap that bai');
	}
}