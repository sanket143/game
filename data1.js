var players = ["John Cena","The Rock","The Undertaker","CM Punk"];
function invalidPage(){
	$(document).ready(function(){
		$(".field").hide();
		$(".invalid").show();
	})
}
function getParameterByName(name, url) {

    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var foo = getParameterByName('yourp')

var cool = document.getElementById("UserPlayer");
var use = document.getElementById("user");
function forJohn(){
	cool.innerHTML="Welcome to wrestling Ring "+foo;
}
forJohn();

var opponent = document.getElementById("opponent");
var flow;
function known(fool){
	if(fool=="John Cena"){
		flow = "john_cena.png";
	}
	else if(fool=="The Rock"){
		flow = "The_rock.png";
	}
	else if(fool=="The Undertaker"){
		flow = "The_Undertaker.png";
	}
	else if(fool=="CM Punk"){
		flow = "cm_punk.png";
	}
	else{
		invalidPage();
	}
	
}
known(foo);
us = "<img src='player_logo/"+flow+"'>";
	use.innerHTML = us;
var real = [];
function excluder(){
	for(i=0;i<players.length;i++){
		if(players[i]!=foo){
			real.push(players[i]);
		}
	}
	
}
function forVersus(){
	var versus = document.getElementById("vs");
	versus.innerHTML = foo +" Versus "+oppo;
}

var oppo;
function setter(){
	excluder();
	var I_dont_know = Math.floor(Math.random(1)*3);
	oppo = real[I_dont_know];
	known(oppo);
	us = "<img src='player_logo/"+flow+"'>";
	opponent.innerHTML = us;
	forVersus();
	console.log(flow,oppo);
}
setter();
function toPassThePlayerName(){
	document.kidding.userp.value = foo;
	document.kidding.pcp.value = oppo;
	known(foo);
	document.kidding.userLink.value = flow;
	known(oppo);
	document.kidding.pcLink.value = flow;
}
toPassThePlayerName();