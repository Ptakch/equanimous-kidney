$(document).ready(function(){


var player = 1;

var isEqual = function(num1, num2, num3){ // find if all conditions are true for winner.
	var num1 = $( "#tile" + num1).attr('src');
	var num2 = $( "#tile" + num2).attr('src');
	var num3 = $( "#tile" + num3).attr('src');

	if (num1 !== "imgs/tile1.jpg" && num2 !== "imgs/tile1.jpg" && num2 !== "imgs/tile1.jpg" ) {
			if (num1 === num2 && num1 === num3){
				if (player % 2 !== 0){
					$('#subzerogif').attr('src', 'imgs/subzerowins.gif');
					$('#scorpiongif').attr('src', 'imgs/scorpionloses.gif');
					$('#szwins').css('display', 'block');
				} else {
					$('#scorpiongif').attr('src', 'imgs/scorpionwins2.gif');
					$('#subzerogif').attr('src', 'imgs/subzeroloses.gif');
					$('#scwins').css('display', 'block');
				}
			return true;
			} else {
			return false;
	}
}
}


var isWon = function(){
	if (isEqual(1,2,3)){
		console.log("winner");
		return true;
	} else if (isEqual(1,5,9)){
		console.log("winner");
		return true;
	} else if (isEqual(1,4,6)){
		console.log("winner");
		return true;
	} else if (isEqual(4,5,6)){
		console.log("winner");
		return true;
	} else if (isEqual(7,8,9)){
		console.log("winner");
		return true;
	} else if (isEqual(7,5,3)){
		console.log("winner");
		return true;
	} else if (isEqual(2,5,8)){
		console.log("winner");
		return true;
	} else if (isEqual(3,6,9)){
		console.log("winner");
		return true;
	} else if (isEqual(1,4,7)){
		console.log("winner");
		return true;
	}
}


var onButtonClick = function() {
  console.log('clicked!');
  // if class != occupied do this. *** FIX THIS SO NO OVERWRITE SQRS

  if (player % 2 !== 0){
  $(this).attr('src', 'imgs/MKlogo1.png');

} else {
  $(this).attr('src', 'imgs/MKlogo2.png');
}
isWon();
player += 1;
};



// player A and player B. IF player = A, then logo1, else logo2
var $click1 = $('#tile1');
$click1.click(onButtonClick);
// $('#tile1').attr('src', 'imgs/MKlogo1.png');  <--- gets and changes img.
var $click2 = $('#tile2');
$click2.click(onButtonClick);

var $click3 = $('#tile3');
$click3.click(onButtonClick);

var $click4 = $('#tile4');
$click4.click(onButtonClick);

var $click5 = $('#tile5');
$click5.click(onButtonClick);

var $click6 = $('#tile6');
$click6.click(onButtonClick);

var $click7 = $('#tile7');
$click7.click(onButtonClick);

var $click8 = $('#tile8');
$click8.click(onButtonClick);

var $click9 = $('#tile9');
$click9.click(onButtonClick);


});