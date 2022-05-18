var slideIndex =1;
var ex = 7;
var panel1On = false;
var panel2On = false;
mayakCVK(ex);

showSlides(slideIndex);
function plusSlides(n){
	showSlides(slideIndex+=n);
}

function currentSlide(n){
	showSlides(slideIndex=n);
}

function showSlides(n){
	var i;
	var slides=document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	var v = (ex-dots.length)*(-1);
	
	for(var j = 0;j<dots.length;j++) {
		dots[j].style.display = "none";
	}

	for(var j = 0;j<dots.length-v;j++) {
		dots[j].style.display = "inline-block"
	}

	if(n>dots.length-v){
		slideIndex = 1;
	}
	if(n<1){
		slideIndex =slides.length-v;
	}
	for(i =0;i<slides.length;i++){
		slides[i].style.display = "none";
	}
	for(i=0;i<dots.length-v;i++){
		dots[i].className = dots[i].className.replace("activ","");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " activ";

}


function showGalleryCVK(n,e){ //n-локация, e-количество выходов
	var panel = document.getElementsByClassName("panel");
	var panel2 = document.getElementsByClassName("panel2");
	if(panel1On) {
		for (var j = 0; j < panel.length; j++) {//убирает кнопки аккордеона при выборе локации
			panel[j].classList.toggle("show"); 	

		}
		panel1On = false;
	}

	if(panel2On){
		for (var j = 0; j < panel2.length; j++) {
			panel2[j].classList.toggle("show"); 
			panel2On = false;
		}
		panel2On = false;
	}

	ex = e;
	switch(n){
		case 0: mayakCVK(ex); break;
		case 1: beregCVK(ex); break;
		case 2: zavodCVK(ex); break;
		case 3: customsCVK(ex); break;
	}

	//if(n==1) beregCVK(ex);
}

function showGalleryScav(n,e){
	var panel = document.getElementsByClassName("panel");
	var panel2 = document.getElementsByClassName("panel2");
	if(panel1On) {
		for (var j = 0; j < panel.length; j++) {//убирает кнопки аккордеона при выборе локации
			panel[j].classList.toggle("show"); 	

		}
		panel1On = false;
	}

	if(panel2On){
		for (var j = 0; j < panel2.length; j++) {
			panel2[j].classList.toggle("show"); 
			panel2On = false;
		}
		panel2On = false;
	}

	ex = e;
	switch(n){
		case 0: mayakScav(ex); break;
		case 1: beregScav(ex); break;
		case 2: zavodScav(ex); break;
		case 3: customsScav(ex); break;
	}
}

function accor(n){
	var panel = document.getElementsByClassName("panel");
	var panel2 = document.getElementsByClassName("panel2");
	if(n==0) {
		for (var j = 0; j < panel.length; j++) {
				panel[j].classList.toggle("show"); 
		}
		panel1On = true;
	}
	if(n==1){
		for (var j = 0; j < panel2.length; j++) {
				panel2[j].classList.toggle("show"); 
		}
		panel2On = true;
	}
}




//все локации

function mayakCVK(ex){
	var imgE = document.getElementsByClassName("imgEx");
	var textE = document.getElementsByClassName("text");
	var location = document.getElementsByClassName("locationtext");
	location[0].textContent = "Маяк/ЧВК";
	for(var i=0;i<ex;i++){
		switch(i) {
			case 0:
			 imgE[i].src = "img/exits/mayak/aexit.png";
			 textE[i].textContent = "Дорога к военной базе А-выход";
			 break;
			case 1:
			 imgE[i].src = "img/exits/mayak/blockpost.png";
			 textE[i].textContent = "Блок пост";
			 break;
			case 2:
			 imgE[i].src = "img/exits/mayak/bronepoezd.png";
			 textE[i].textContent = "Бронепоезд";
			 break;
			case 3:
			 imgE[i].src = "img/exits/mayak/nabereg.png";
			 textE[i].textContent = "Переход на берег";
			 break;
			case 4:
			 imgE[i].src = "img/exits/mayak/pereval.png";
			 textE[i].textContent = "Тропа через перевал";
			 break;
			case 5:
			 imgE[i].src = "img/exits/mayak/sroad.png";
			 textE[i].textContent = "Южная дорога";
			 break;
			case 6:
			 imgE[i].src = "img/exits/mayak/tonnel.jpg";
			 textE[i].textContent = "Боковой тоннель";
			 break;
			default: alert("error");
		}
	}
	slideIndex = 1;
	showSlides(ex);
}

function beregCVK(ex){
	var imgE = document.getElementsByClassName("imgEx");
	var textE = document.getElementsByClassName("text");
	var location = document.getElementsByClassName("locationtext");
	location[0].textContent = "Берег/ЧВК";
	for(var i=0;i<ex;i++){
		switch(i){
			case 0:
				imgE[i].src = "img/exits/bereg/cpptemp.png";
				textE[i].textContent = "Временный КПП";
				break;
			case 1:
				imgE[i].src = "img/exits/bereg/pkmayak.png";
				textE[i].textContent = "Путь к маяку";
				break;
			case 2:
				imgE[i].src = "img/exits/bereg/lodka.png";
				textE[i].textContent = "Лодка на причале";
				break;
			case 3:
				imgE[i].src = "img/exits/bereg/most.png";
				textE[i].textContent = "Железнодорожный мост";
				break;
			case 4:
				imgE[i].src = "img/exits/bereg/roadcustoms.png";
				textE[i].textContent = "Дорога на таможню";
				break;
			case 5:
				imgE[i].src = "img/exits/bereg/tunnel.png";
				textE[i].textContent = "Тоннель";
				break;
			default: alert("error");
		}
	}
	slideIndex = 1;
	showSlides(ex);
	//nameExit[1].textContent = "Берег";
}

function zavodCVK(ex){
	var imgE = document.getElementsByClassName("imgEx");
	var textE = document.getElementsByClassName("text");
	var location = document.getElementsByClassName("locationtext");
	location[0].textContent = "Завод/ЧВК";
	for(var i =0;i<ex;i++){
		switch(i) {
			case 0:
				imgE[i].src = "img/exits/zavod/podval.png";
				textE[i].textContent = "Подвал";
				break;
			case 1:
				imgE[i].src = "img/exits/zavod/vihod0.png";
				textE[i].textContent = "Ворота 0";
				break;
			case 2:
				imgE[i].src = "img/exits/zavod/vihod3.png";
				textE[i].textContent = "Ворота 3";
				break;
			case 3:
				imgE[i].src = "img/exits/zavod/medtent.jpg";
				textE[i].textContent = "Ворота за мед. палаткой";
				break;
			default: alert("error");
		}
	}
	slideIndex = 1;
	showSlides(ex);
}

function customsCVK(ex){
	var imgE = document.getElementsByClassName("imgEx");
	var textE = document.getElementsByClassName("text");
	var location = document.getElementsByClassName("locationtext");
	location[0].textContent = "Таможня/ЧВК";
	for(var i=0;i<ex;i++){
		switch(i){
			case 0:
				imgE[i].src = "img/exits/customs/perekrestok.png";
				textE[i].textContent = "Перекрёсток";
				break;
			case 1:
				imgE[i].src = "img/exits/customs/avihod.png";
				textE[i].textContent = "А-Выход";
				break;
			case 2:
				imgE[i].src = "img/exits/customs/oldgas.png";
				textE[i].textContent = "Старая заправка";
				break;
			case 3:
				imgE[i].src = "img/exits/customs/vsrf.png";
				textE[i].textContent = "Блокпост ВС РФ";
				break;
			case 4:
				imgE[i].src = "img/exits/customs/lodka.png";
				textE[i].textContent = "Лодка контрабандиста";
				break;
			case 5:
				imgE[i].src = "img/exits/customs/trailer.png";
				textE[i].textContent = "Трейлерный парк";
				break;
			case 6:
				imgE[i].src = "img/exits/customs/zb1011.png";
				textE[i].textContent = "ЗБ-1011";
				break;
			case 7:
				imgE[i].src = "img/exits/customs/zb1012.png";
				textE[i].textContent = "ЗБ-1012";
				break;
			case 8:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/0c/ZB013_Grate.png/revision/latest/scale-to-width-down/1000?cb=20200727190316";
				textE[i].textContent = "ЗБ-013";
				break;
			default: alert("error");
		}
	}
	slideIndex = 1;
	showSlides(ex);
}

function mayakScav(ex){
	var imgE = document.getElementsByClassName("imgEx");
	var textE = document.getElementsByClassName("text");
	var location = document.getElementsByClassName("locationtext");
	location[0].textContent = "Маяк/Дикие";
	for(var i=0;i<ex;i++){
		switch(i) {
			case 0:
			 imgE[i].src = "img/exits/mayak/debarcader.png";
			 textE[i].textContent = "Схрон под дебаркадером";
			 break;
			case 1:
			 imgE[i].src = "img/exits/mayak/grot.png";
			 textE[i].textContent = "Укрытие в гроте";
			 break;
			case 2:
			 imgE[i].src = "img/exits/mayak/sroaddiki.png";
			 textE[i].textContent = "Обвал на шоссе";
			 break;
			case 3:
			 imgE[i].src = "img/exits/mayak/promzona.png";
			 textE[i].textContent = "Ворота промзоны";
			 break;
			case 4:
			 imgE[i].src = "img/exits/mayak/nabereg.png";
			 textE[i].textContent = "Переход на берег";
			 break;
			case 5:
			 imgE[i].src = "img/exits/mayak/bronepoezd.png";
			 textE[i].textContent = "Бронепоезд";
			 break;
			case 6:
			 imgE[i].src = "img/exits/mayak/tonnel.jpg";
			 textE[i].textContent = "Боковой тоннель";
			 break;
			default: alert("error");
		}
	}
	slideIndex = 1;
	showSlides(ex);
}

function beregScav(ex){
	var imgE = document.getElementsByClassName("imgEx");
	var textE = document.getElementsByClassName("text");
	var location = document.getElementsByClassName("locationtext");
	location[0].textContent = "Берег/Дикие";
	for(var i=0;i<ex;i++){
		switch(i){
			case 0:
				imgE[i].src = "img/exits/bereg/adm.png";
				textE[i].textContent = "Подвал в адм. корпусе";
				break;
			case 1:
				imgE[i].src = "img/exits/bereg/mayak.png";
				textE[i].textContent = "Маяк";
				break;
			case 2:
				imgE[i].src = "img/exits/bereg/zaboru.png";
				textE[i].textContent = "Забор у разрушенного дома";
				break;
			case 3:
				imgE[i].src = "img/exits/bereg/ruinedroad.png";
				textE[i].textContent = "Разрушенная дорога";
				break;
			case 4:
				imgE[i].src = "img/exits/bereg/gym.png";
				textE[i].textContent = "Вход в спортзал";
				break;
			case 5:
				imgE[i].src = "img/exits/bereg/szabor.png";
				textE[i].textContent = "Проход в забор";
				break;
			case 6:
				imgE[i].src = "img/exits/bereg/sverliy.png";
				textE[i].textContent = "Тупик Светлый";
				break;
			case 7:
				imgE[i].src = "img/exits/bereg/roadcustoms.png";
				textE[i].textContent = "Дорога на таможню";
				break;
			default: alert("error");
		}
	}
	slideIndex = 1;
	showSlides(ex);
	//nameExit[1].textContent = "Берег";
}

function zavodScav(ex){
	var imgE = document.getElementsByClassName("imgEx");
	var textE = document.getElementsByClassName("text");
	var location = document.getElementsByClassName("locationtext");
	location[0].textContent = "Завод/Дикие";
	for(var i=0;i<ex;i++){
		switch(i){
			case 0:
				imgE[i].src = "img/exits/zavod/bunkerdoor.png";
				textE[i].textContent = "Бункерная дверь с камерой";
				break;
			case 1:
				imgE[i].src = "img/exits/zavod/office.png";
				textE[i].textContent = "Офисное окно";
				break;
			case 2:
				imgE[i].src = "img/exits/zavod/vihod0.png";
				textE[i].textContent = "Ворота 0";
				break;
			case 3:
				imgE[i].src = "img/exits/zavod/vihod3.png";
				textE[i].textContent = "Ворота 3";
				break;
			default: alert("error");
		}
	}
	slideIndex = 1;
	showSlides(ex);
}

function customsScav(ex){
	var imgE = document.getElementsByClassName("imgEx");
	var textE = document.getElementsByClassName("text");
	var location = document.getElementsByClassName("locationtext");
	location[0].textContent = "Таможня/Дикие";
	for(var i=0;i<ex;i++){
		switch(i){
			case 0:
				imgE[i].src = "img/exits/customs/avorota.png";
				textE[i].textContent = "Административные ворота";
				break;
			case 1:
				imgE[i].src = "img/exits/customs/dalnyugol.png";
				textE[i].textContent = "Дальний угол завода";
				break;
			case 2:
				imgE[i].src = "img/exits/customs/vremyanki.png";
				textE[i].textContent = "Заводские времянки";
				break;
			case 3:
				imgE[i].src = "img/exits/customs/cpp.png";
				textE[i].textContent = "Военный КПП";
				break;
			case 4:
				imgE[i].src = "img/exits/customs/oldgasevorota.png";
				textE[i].textContent = "Ворота на старой дороге";
				break;
			case 5:
				imgE[i].src = "img/exits/customs/cherezskali.png";
				textE[i].textContent = "Проход через скалы";
				break;
			case 6:
				imgE[i].src = "img/exits/customs/jdkvoenke.png";
				textE[i].textContent = "ЖД к военной базе";
				break;
			case 7:
				imgE[i].src = "img/exits/customs/jdktarkov.png";
				textE[i].textContent = "ЖД в Тарков";
				break;
			case 8:
				imgE[i].src = "img/exits/customs/jdkport.png";
				textE[i].textContent = "ЖД в порт";
				break;
			case 9:
				imgE[i].src = "img/exits/customs/cppdik.png";
				textE[i].textContent = "КПП диких";
				break;
			case 10:
				imgE[i].src = "img/exits/customs/sniper.png";
				textE[i].textContent = "Блокпост снайперов";
				break;
			case 11:
				imgE[i].src = "img/exits/customs/vremyankat.png";
				textE[i].textContent = "Времянка на трейлерном парке";
				break;
			case 12:
				imgE[i].src = "img/exits/customs/sklad17.png";
				textE[i].textContent = "Склад 17";
				break;
			case 13:
				imgE[i].src = "img/exits/customs/sklad4.png";
				textE[i].textContent = "Склад 4";
				break;
			case 14:
				imgE[i].src = "img/exits/customs/vsrf.png";
				textE[i].textContent = "Блокпост ВС РФ";
				break;
			case 15:
				imgE[i].src = "img/exits/customs/perekrestok.png";
				textE[i].textContent = "Перекрёсток";
				break;
			case 16:
				imgE[i].src = "img/exits/customs/avihod.png";
				textE[i].textContent = "А-Выход";
				break;
			case 17:
				imgE[i].src = "img/exits/customs/oldgas.png";
				textE[i].textContent = "Старая заправка";
				break;
			default: alert("error");
		}
	}
	slideIndex = 1;
	showSlides(ex);
}