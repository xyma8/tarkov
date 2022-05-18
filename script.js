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

//alert(dots.length-v);
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
	//var mayak = document.getElementsByClassName("mayak")
	//for(var i = 0;i<mayak.length;i++){
	//	mayak[i].classList.toggle("unshow");
	//}

	//if(n==0) mayak[0].classList.toggle("show");
	//if(n==1) mayak[1].classList.toggle("show");
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
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/7b/CCP_Temp.png/revision/latest/scale-to-width-down/1000?cb=20190425034527";
				textE[i].textContent = "Временный КПП";
				break;
			case 1:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d3/Path_to_Lighthouse.png/revision/latest/scale-to-width-down/1000?cb=20220220192911";
				textE[i].textContent = "Путь к маяку";
				break;
			case 2:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6d/Pier_Boat.png/revision/latest/scale-to-width-down/1000?cb=20190425034532";
				textE[i].textContent = "Лодка на причале";
				break;
			case 3:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/83/Road_at_Railbridge.png/revision/latest/scale-to-width-down/1000?cb=20220220201205";
				textE[i].textContent = "Железнодорожный мост";
				break;
			case 4:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/67/Road_To_Customs.png/revision/latest/scale-to-width-down/1000?cb=20190425034536";
				textE[i].textContent = "Дорога на таможню";
				break;
			case 5:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e1/Ruined_Road.png/revision/latest/scale-to-width-down/1000?cb=20190425034549";
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
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f4/Fac_Cellars.png/revision/latest/scale-to-width-down/1000?cb=20180816171827";
				textE[i].textContent = "Подвал";
				break;
			case 1:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/31/Fac_Gate_0.png/revision/latest/scale-to-width-down/1000?cb=20180816171831";
				textE[i].textContent = "Ворота 0";
				break;
			case 2:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/fd/Fac_Gate_3.png/revision/latest/scale-to-width-down/1000?cb=20180816171836";
				textE[i].textContent = "Ворота 3";
				break;
			case 3:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/ab/Med_tent_gates.jpg/revision/latest/scale-to-width-down/1000?cb=20210703095650";
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
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/df/Crossroads.png/revision/latest/scale-to-width-down/1000?cb=20190908220411";
				textE[i].textContent = "Перекрёсток";
				break;
			case 1:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e1/Dorms_V-Ex.png/revision/latest/scale-to-width-down/1000?cb=20190911220214";
				textE[i].textContent = "А-Выход";
				break;
			case 2:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/61/Old_Gas_Station_Extraction.png/revision/latest/scale-to-width-down/1000?cb=20190908220709";
				textE[i].textContent = "Старая заправка";
				break;
			case 3:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c8/RUAF_Roadblock_Customs.png/revision/latest/scale-to-width-down/1000?cb=20190617215507";
				textE[i].textContent = "Блокпост ВС РФ";
				break;
			case 4:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/86/Smuggler%27s_Boat.png/revision/latest/scale-to-width-down/1000?cb=20190617215623";
				textE[i].textContent = "Лодка контрабандиста";
				break;
			case 5:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/31/Trailer_Park.png/revision/latest/scale-to-width-down/1000?cb=20190908220513";
				textE[i].textContent = "Трейлерный парк";
				break;
			case 6:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5e/ZB-1011.png/revision/latest/scale-to-width-down/1000?cb=20190617215932";
				textE[i].textContent = "ЗБ-1011";
				break;
			case 7:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/20/ZB-1012.png/revision/latest/scale-to-width-down/1000?cb=20190617215939";
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
			 imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/9e/Hideout_under_the_landing_stage.png/revision/latest/scale-to-width-down/1000?cb=20211213142717";
			 textE[i].textContent = "Схрон под дебаркадером";
			 break;
			case 1:
			 imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3d/Scav_hideout_at_the_grotto.png/revision/latest/scale-to-width-down/1000?cb=20211213092148";
			 textE[i].textContent = "Укрытие в гроте";
			 break;
			case 2:
			 imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/8f/Scav_Coastal_South.png/revision/latest/scale-to-width-down/1000?cb=20220102202909";
			 textE[i].textContent = "Обвал на шоссе";
			 break;
			case 3:
			 imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/26/Lighthouse_concept_%283%29.jpg/revision/latest/scale-to-width-down/1000?cb=20211102173804";
			 textE[i].textContent = "Боковой тоннель";
			 break;
			case 4:
			 imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d4/Lighthouse_-_Path_to_Shoreline.png/revision/latest/scale-to-width-down/1000?cb=20211212155321";
			 textE[i].textContent = "Переход на берег";
			 break;
			case 5:
			 imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/21/Lighthouse_-_Armored_train.png/revision/latest/scale-to-width-down/1000?cb=20220102205615";
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
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6b/Adm_Basement.png/revision/latest/scale-to-width-down/1000?cb=20190425034524";
				textE[i].textContent = "Подвал в адм. корпусе";
				break;
			case 1:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/be/Lighthouse.png/revision/latest/scale-to-width-down/1000?cb=20190425034530";
				textE[i].textContent = "Маяк";
				break;
			case 2:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/15/Ruined_House_Fence.png/revision/latest/scale-to-width-down/1000?cb=20190425034546";
				textE[i].textContent = "Забор у разрушенного дома";
				break;
			case 3:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d0/Tunnel.png/revision/latest/scale-to-width-down/1000?cb=20190425034605";
				textE[i].textContent = "Разрушенная дорога";
				break;
			case 4:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6b/Rwing_Gym_Entrance.png/revision/latest/scale-to-width-down/1000?cb=20190425034552";
				textE[i].textContent = "Вход в спортзал";
				break;
			case 5:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/99/South_Fence_Passage.png/revision/latest/scale-to-width-down/1000?cb=20190425034557";
				textE[i].textContent = "Проход в забор";
				break;
			case 6:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/10/Svetliy_Dead_End.png/revision/latest/scale-to-width-down/1000?cb=20190425034601";
				textE[i].textContent = "Тупик Светлый";
				break;
			case 7:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/67/Road_To_Customs.png/revision/latest/scale-to-width-down/1000?cb=20190425034536";
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
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/31/Fac_Camera_Bunker_Door.png/revision/latest/scale-to-width-down/1000?cb=20180816171846";
				textE[i].textContent = "Бункерная дверь с камерой";
				break;
			case 1:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/29/Fac_Office_Window.png/revision/latest/scale-to-width-down/1000?cb=20180816171841";
				textE[i].textContent = "Офисное окно";
				break;
			case 2:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/31/Fac_Gate_0.png/revision/latest/scale-to-width-down/1000?cb=20180816171831";
				textE[i].textContent = "Ворота 0";
				break;
			case 3:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/fd/Fac_Gate_3.png/revision/latest/scale-to-width-down/1000?cb=20180816171836";
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
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/82/Administration_Gate.png/revision/latest/scale-to-width-down/1000?cb=20190617214547";
				textE[i].textContent = "Административные ворота";
				break;
			case 1:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/41/Factory_Far_Corner.png/revision/latest/scale-to-width-down/1000?cb=20190617214727";
				textE[i].textContent = "Дальний угол завода";
				break;
			case 2:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c6/Factory_Shacks.png/revision/latest/scale-to-width-down/1000?cb=20220410180024";
				textE[i].textContent = "Заводские времянки";
				break;
			case 3:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/91/Military_Base_CP.png/revision/latest/scale-to-width-down/1000?cb=20190824211339";
				textE[i].textContent = "Военный КПП";
				break;
			case 4:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/50/Old_Road_Gate.png/revision/latest/scale-to-width-down/1000?cb=20190617215145";
				textE[i].textContent = "Ворота на старой дороге";
				break;
			case 5:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d1/Passage_between_Rocks.png/revision/latest/scale-to-width-down/1000?cb=20220425234314";
				textE[i].textContent = "Проход через скалы";
				break;
			case 6:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/07/Railroad_To_Military_Base.png/revision/latest/scale-to-width-down/1000?cb=20190617215246";
				textE[i].textContent = "ЖД к военной базе";
				break;
			case 7:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d7/Railroad_To_Tarkov.png/revision/latest/scale-to-width-down/1000?cb=20200225175616";
				textE[i].textContent = "ЖД в Тарков";
				break;
			case 8:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f5/Railroad_to_Port.png/revision/latest/scale-to-width-down/1000?cb=20190617215321";
				textE[i].textContent = "ЖД в порт";
				break;
			case 9:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d1/Scavs_checkpoint.png/revision/latest/scale-to-width-down/1000?cb=20190617215538";
				textE[i].textContent = "КПП диких";
				break;
			case 10:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/9d/Sniper_Roadblock.png/revision/latest/scale-to-width-down/1000?cb=20190617215710";
				textE[i].textContent = "Блокпост снайперов";
				break;
			case 11:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/9c/Trailer_Park_Workers%27_Shack.png/revision/latest/scale-to-width-down/1000?cb=20220319233220";
				textE[i].textContent = "Времянка на трейлерном парке";
				break;
			case 12:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/34/Warehouse_17.png/revision/latest/scale-to-width-down/1000?cb=20190617215925";
				textE[i].textContent = "Склад 17";
				break;
			case 13:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/08/Warehouse_4.png/revision/latest/scale-to-width-down/1000?cb=20190617215904";
				textE[i].textContent = "Склад 4";
				break;
			case 14:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c8/RUAF_Roadblock_Customs.png/revision/latest/scale-to-width-down/1000?cb=20190617215507";
				textE[i].textContent = "Блокпост ВС РФ";
				break;
			case 15:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/df/Crossroads.png/revision/latest/scale-to-width-down/1000?cb=20190908220411";
				textE[i].textContent = "Перекрёсток";
				break;
			case 16:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e1/Dorms_V-Ex.png/revision/latest/scale-to-width-down/1000?cb=20190911220214";
				textE[i].textContent = "А-Выход";
				break;
			case 17:
				imgE[i].src = "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/61/Old_Gas_Station_Extraction.png/revision/latest/scale-to-width-down/1000?cb=20190908220709";
				textE[i].textContent = "Старая заправка";
				break;
			default: alert("error");
		}
	}
	slideIndex = 1;
	showSlides(ex);
}