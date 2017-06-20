//global variable
var number = 0;

var max_value = 6, min_value = 1;


//use as init and generate new random number
function randomize_number() {
	//https://www.w3schools.com/jsref/jsref_random.asp
	//Return a random number between 1 and 10:
	//Math.floor((Math.random() * 10) + 1);

	number = Math.floor(Math.random() * max_value + min_value); //floor "round number, float -> int"

	//temp solution --> late only for init and if player guess right number
	//document.getElementById('r_value').innerHTML = ' New number is ' + number;

}

//check user inputs
function check_number() {

	var user_estimate = document.getElementById('your_number').value;


	if (user_estimate == number) {
		document.getElementById('r_value').innerHTML = 'Your input :' + number +',  Right number !';
		//generate new number
		randomize_number();
	}

	else {
		var bigger_smaller; // =  '';

		bigger_smaller = 'Wrong number ! <br /> Your input is : ' + user_estimate;
		if (user_estimate < number) { bigger_smaller += ', number is biger'; }
		else if (user_estimate > number) { bigger_smaller += ', number is smaller'; }

		document.getElementById('r_value').innerHTML = bigger_smaller;

	}
}
