const form = document.getElementById("form");
const name = document.getElementById("name");
const familia = document.getElementById("familia");
const phone = document.getElementById("phone");
const email = document.getElementById("mail");
const password = document.getElementById("password");
const login = document.getElementById("login");
var nameRigth = false; var familiaRigth = false; var phoneRigth = false; var emailRigth = false; passRigth = false; loginRigth = false;
addyears()
form.addEventListener('submit', (e)=> {
	checkPhone();
	checkEmail();
	checkPassword();
	checkFamilia();
	checkName();
	checkLogin();
	if(nameRigth&&familiaRigth&&emailRigth&&passRigth&&loginRigth&&phoneRigth) {
		this.submit();
	}else{
		event.preventDefault();
  	//window.history.back();
	}
});



function checkInputs() {
	//var errori = document.getElementsByClassName("wi");
	//const namevalue = name.value.trim();
	//const familiavalue = familia.value.trim();
	//const phonevalue = phone.value.trim();
	//const emailvalue = email.value.trim();
	//const passwordvalue = password.value.trim();
	//const loginvalue = login.value.trim();
	// for(var i=0;i<errori.length;i++){
	// 	errori[i].style.display = "none";
	// }
	// if(namevalue == ''||namevalue.length<3||!checkName(namevalue)) {
	// 	//alert("sd");
	// 	errori[0].style.display = "inline-flex";
	// 	error++;
	// }


	// if(familiavalue==''||familiavalue.length<3||!checkFamilia(familiavalue)) {
	// 	errori[1].style.display = "inline-flex";
	// 	error++;
	// }

	// if(phonevalue=='') {
	// 	errori[2].style.display = "inline-flex";
	// 	error++;
	// }

	// if(!checkEmail(emailvalue)) {
	// 	errori[3].style.display = "inline-flex";
	// 	error++;
	// }

	// if(passwordvalue==''||passwordvalue.length<8||!checkPassword(passwordvalue)){
	// 	errori[4].style.display = "inline-flex";
	// 	error++;
	// }

	// if(loginvalue==''||loginvalue.length<5||loginvalue.length>8) {
	// 	errori[5].style.display = "inline-flex";
	// 	error++;
	// }
}

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



function addyears(){
	var god = 1900;
	var v = 1;
	var yearsspisok = document.getElementsByClassName("years");
	var yearspisok = document.getElementsByClassName("year");
	for(var i=0;i<yearspisok.length;i++) {
		/*
		var opt = document.createElement('option');
		opt.value = "s"+v++;
		opt.textContent = god++;
		opt.innerHTML = i;
		yearspisok.add(new Option(opt));
		*/
		yearspisok[i].textContent = god++;
		yearspisok[i].value="s"+v++;
	}
	//yearspisok.appendChild('ky')
}



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

	if(phonevalue=="") {
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