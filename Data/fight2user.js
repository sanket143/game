
function getParameterByName(name, url) {

    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var hero = getParameterByName('userp');
var villain = getParameterByName('pcp');
var heroPic = getParameterByName('userLink');
var villainPic = getParameterByName('pcLink');

function importingImage() {
	if(document.getElementById('hero')!=null&&document.getElementById('villain')!=null){
	document.getElementById('hero').innerHTML = "<img src='"+heroPic+"'>";
	document.getElementById('villain').innerHTML = "<img src='"+villainPic+"'>";
}
	else{
		console.log();
	}
}
importingImage();
var scorep;
var scorec;
function luck_score_p(val){
	scorep = Math.floor(Math.random(val)*5);
}
function luck_score_c(val){
	scorec = Math.floor(Math.random(val)*5);
}
function magicMove(){
	if(parseInt(st2.value)>=115){
		$(document).ready(function(){
			$(".sign1").removeAttr("disabled");
		});
	}
}
function zeroMaker1(){
	count = 0;
}
function zeroMaker2(){
	count_down = 0;
}
var count = 0;
function punch(){
	magicMove();
	if(st2.value > 2){
	st2.value = st2.value - 2;
	}
	else{
		st2.value = 0;
	}
	luck_score_p(1);luck_score_c(1);
	if(((scorec-scorep)&&(scorep-scorec))<2){
		ost1.value = ost1.value - 3;
		st2.value = parseInt(st2.value) + 7;
	}
	else{
		ost2.value = parseInt(ost2.value) + 2;
		st2.value = st2.value -3;
	}
	count = count + 1;
	console.log(count);
	if(count >= 5){
			$(".punch").attr("disabled","");
		zeroMaker1();
	}
	else if(count > 1){
			$(".kick").removeAttr("disabled");
	}
}
var count_down = 0;
function kick(){
	magicMove();
	if(st2.value > 5){
		st2.value = parseInt(st2.value) - 5;
	}
	else{
		st2.value = 0;
	}
	luck_score_c(2);luck_score_p(1);
	if(((scorec-scorep)&&(scorep-scorec))<3){
		st2.value = parseInt(st2.value) + 3;
		ost1.value = parseInt(ost1.value) - 4;
	}
	else{
		st2.value = parseInt(st2.value) - 4;
		ost2.value = parseInt(ost2.value) + 3;
	}
	count_down = count_down + 1;
	if(count_down > 2){
		$(".kick").attr("disabled","");
		zeroMaker2();
	}
	else if(count_down > 1){
		$(".punch").removeAttr("disabled");
		
	}
	console.log(count_down);
}


