
var choiceFemale;
var choiceMale;
// look for user's radio button selection. default selection is female. 

//
function getGenderChoice(){
	if (document.getElementById('r0').checked) {
  		choiceFemale = document.getElementById('r2').value;
	} else {
		choiceMale = document.getElementById('r1').value;
	}

	return choiceFemale;
	return choiceMale;
}

// choice to post at google/ads OR adjust radio booleans at google/ads
function choiceToPost(){
	// if (getGenderChoice == "Female"){
	// 	//do some js that chooses advertising gender pref as Female at "https://www.google.com/settings/u/0/ads"
	// } else {
	// 	//do some js that chooses gender pref as Male at "https://www.google.com/settings/u/0/ads*"	
	// }
}

$(document).ready(function() {
	getGenderChoice();
});

