"use strict";

//add EVENT LISTENER to Submit button that runs a function to check if username and password are correct
document.getElementsByTagName("input")[3].addEventListener("click", validate);

//fucntion to validate username and password
function validate() {

	//stores value of username input in username variable
	var username = document.getElementsByTagName("input")[0];
	var wrongUserName = document.getElementsByTagName("input")[0];

	//stores value of email input in email variable
	var email = document.getElementsByTagName("input")[1].value;

	//stores value of password input into password variable
	var password = document.getElementsByTagName("input")[2].value;

	//checks if username is at least 4 characters long otherwise alerts user
	if(username.value.length < 4) {
		window.alert("Your username must be at least 4 characters long");
		//document.getElementsByTagName("input")[0].value = "";
		username.value = "";

	//checks if email address has an @ character/symbol otherwise alerts user
	} else if(email.includes("@") == false) {
		window.alert("Please enter a valid email address");
		document.getElementsByTagName("input")[1].value = "";

	//makes sure password is valid otherwise alerts user
	} else if(password != 12345678) {
		window.alert("You entered the wrong password. Please try again");
		document.getElementsByTagName("input")[2].value = "";

	//alerts user that all info was properly entered
	} else {
		document.getElementById("thanks").innerHTML = "Form data correct. <br/> Thank You";
	}
}