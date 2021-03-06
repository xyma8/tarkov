const form = document.getElementById("form");
const name = document.getElementById("name");
const familia = document.getElementById("familia");
const phone = document.getElementById("phone");
const email = document.getElementById("mail");
const password = document.getElementById("password");
const login = document.getElementById("login");
const calendar = document.getElementById("calendar");
var nameRigth = false; var familiaRigth = false; var phoneRigth = false; var emailRigth = false; passRigth = false; loginRigth = false; dateRigth = false;
//addyears()
form.addEventListener('submit', (e)=> {
	checkPhone();
	checkEmail();
	checkPassword();
	checkFamilia();
	checkName();
	checkLogin();
	checkDate();
	if(nameRigth&&familiaRigth&&emailRigth&&passRigth&&loginRigth&&phoneRigth) {
		this.submit();
	}else{
		event.preventDefault();
	}
});



function emailValidation(email) {
	let reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(email[0]=='_'||email[0]=='@') return false;
	return reEmail.test(String(email).toLowerCase());
}

function nameValidation(name) {
	let reNameL = /^\p{sc=Latin}*$/u;
	let reNameC = /^\p{sc=Cyrillic}*$/u;
	var l = reNameL.test(String(name));
	var c = reNameC.test(String(name));
	if(!l&&!c) {
		return false;
	}
	return true;
}

function familiaValidation(familia) {
	let reNameL = /^\p{sc=Latin}*$/u;
	let reNameC = /^\p{sc=Cyrillic}*$/u;
	var l = reNameL.test(String(familia));
	var c = reNameC.test(String(familia));
	if(!l&&!c) {
		return false;
	}
	return true;
}

function passwordValidation(pass){
	let rePassword = /^(?=.*\d)(?=.*[_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	return rePassword.test(String(pass));
}



// function addyears(){
// 	var god = 1900;
// 	var v = 1;
// 	var yearsspisok = document.getElementsByClassName("years");
// 	var yearspisok = document.getElementsByClassName("year");
// 	for(var i=0;i<yearspisok.length;i++) {
// 		yearspisok[i].textContent = god++;
// 		yearspisok[i].value="s"+v++;
// 	}
// }



function checkName() {
	var namevalue = name.value.trim();
	 if(namevalue == ''||namevalue.length<3||!nameValidation(namevalue)) {
	 	name.style.borderColor = "red";
	 	nameRigth = false;
	 }else{
	 	name.style.removeProperty('border');
	 	nameRigth=true;
	 }
}

function checkFamilia() {
	var familiavalue = familia.value.trim();

	if(familiavalue==''||familiavalue.length<3||!familiaValidation(familiavalue)) {
		familia.style.borderColor = "red";
		familiaRigth = false;
	}else{
		familia.style.removeProperty('border');
		familiaRigth = true;
	}
}

function checkPhone() {
	var phonevalue = phone.value;

	if(phonevalue=='') {
		phone.style.borderColor = "red";
		phoneRigth = false;
	}else{
		phone.style.removeProperty('border');
		phoneRigth = true;
	}
}

function checkEmail() {
	var emailvalue = email.value.trim();

	if(!emailValidation(emailvalue)) {
		email.style.borderColor = "red";
		emailRigth = false;
	}else{
		email.style.removeProperty('border');
		emailRigth = true;
	}
}

function checkPassword() {
	var passwordvalue = password.value.trim();

	if(passwordvalue==''||passwordvalue.length<8||!passwordValidation(passwordvalue)){
		password.style.borderColor = "red";
		passRigth = false;
	}else{
		password.style.removeProperty('border');
		passRigth = true;
	}
}

function checkLogin() {
	var loginvalue = login.value.trim();

	if(loginvalue==''||loginvalue.length<5||loginvalue.length>8) {
		login.style.borderColor = "red";
		loginRigth = false;
	}else{
		login.style.removeProperty('border');
		loginRigth = true;
	}
}

function checkDate() {
	var datevalue = calendar.value;
	// var todayDate = new Date();
	// var year = todayDate.getFullYear();
	// var month = todayDate.getMonth()+1;
	// if(month<10) month = "0"+month;
	// var day = todayDate.getDate();
	// var s = ""+year+"-"+month+"-"+day;
	// calendar.max = s;

	if(datevalue==''||datevalue>calendar.max||datevalue<calendar.min) {
		calendar.style.borderColor = "red";
		dateRigth = false;
	}else{
		calendar.style.removeProperty('border');
		dateRigth = true;
	}
}