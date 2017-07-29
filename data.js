function jc(){
	var dull = document.getElementById("player1");
	var cool = document.getElementById("player2");
	var dost = document.getElementById("info");
	dull.innerHTML = '<img src="player_logo/cm_punk.png" onclick="cm()">&nbsp;<img src="player_logo/The_rock.png"onclick="tr()">&nbsp;<img src="player_logo/The_Undertaker.png"onclick="tu()">';
	cool.innerHTML = '<img src="player_logo/john_cena.png">';
	dost.innerHTML = "John Cena";
	document.fight.yourp.value="John Cena";
}
function tr(){
	var dull = document.getElementById("player1");
	var cool = document.getElementById("player2");
	var dost = document.getElementById("info");
	dull.innerHTML = '<img src="player_logo/john_cena.png" onclick="jc()">&nbsp;<img src="player_logo/cm_punk.png" onclick="cm()">&nbsp;<img src="player_logo/The_Undertaker.png"onclick="tu()">';
	cool.innerHTML = '<img src="player_logo/The_rock.png">'
	dost.innerHTML = "The Rock";
	document.fight.yourp.value="The Rock";
}
function tu(){
	var dull = document.getElementById("player1");
	var cool = document.getElementById("player2");
	var dost = document.getElementById("info");
	dull.innerHTML = '<img src="player_logo/john_cena.png" onclick="jc()">&nbsp;<img src="player_logo/cm_punk.png" onclick="cm()">&nbsp;<img src="player_logo/The_rock.png"onclick="tr()">';
	cool.innerHTML = '<img src="player_logo/The_Undertaker.png">';
	dost.innerHTML = "The Undertaker";
	document.fight.yourp.value="The Undertaker";
}
function cm(){
	var dull = document.getElementById("player1");
	console.log(dull);
	var cool = document.getElementById("player2");
	var dost = document.getElementById("info");
	dull.innerHTML = '<img src="player_logo/john_cena.png" onclick="jc()">&nbsp;<img src="player_logo/The_rock.png"onclick="tr()">&nbsp;<img src="player_logo/The_Undertaker.png"onclick="tu()">'
	cool.innerHTML = '<img src="player_logo/cm_punk.png">'
	dost.innerHTML = "CM Punk";
	document.fight.yourp.value="CM Punk";

}
