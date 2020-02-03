"use strict";

//FUNCTION TO WRITE TO THE Review TABLE
document.getElementById("send").addEventListener("click", verify);
var username = document.getElementById("userName");
var message = document.getElementById("message");
function verify() {
	if(username.value.length < 3) {
			window.alert("name must be more then 3 characters");
			username.value = "";
		if(message.value.length < 1){
			window.alert("please write a review");
			message.value = "";
		}
		} else {
			window.alert("Thank you");
		}

	document.getElementById("formX").innerHTML = "<td>" + username.value + "</td>\
												  <td>" + message.value + "</td>";

}
//===================================================================




//EVENT LISTENER THAT FIRES A FUNCTION THAT GENERATES 3 DIFFERENT RANDOM NUMBERS AND DISPLAYS THE CORRESPONDING ARRAY-
//INFORMATION ON THE PAGE
window.addEventListener("load", randNum);

//function will generate 3 different random numbers and display info to page
function randNum() {
	var x1 = Math.floor(Math.random() * custReview.length);
	var x2 = Math.floor(Math.random() * custReview.length);
	var x3 = Math.floor(Math.random() * custReview.length);
	var x4 = Math.floor(Math.random() * custReview.length);

	var reviewX1;
	var reviewX2;
	var reviewX3;
	var reviewX4;

	//will generate 4 different random numbers
	for(var i = 0; i < 4; i++) {
		if(x1 == x2 || x1 == x3 || x1 == x4) {
			x1 = Math.floor(Math.random() * custReview.length);
		}

		if(x2 == x1 || x2 == x3 || x2 == x4) {
			x2 = Math.floor(Math.random() * custReview.length);
		}

		if(x3 == x1 || x3 == x2 || x3 == x4) {
			x3 = Math.floor(Math.random() * custReview.length);
		}

		if(x4 == x1 || x4 == x2 || x4 == x3) {
			x4 = Math.floor(Math.random() * custReview.length);
		}

		reviewX1 = custReview[x1];
		reviewX2 = custReview[x2];
		reviewX3 = custReview[x3];
		reviewX4 = custReview[x4];

		document.getElementById("formX2").innerHTML = "<td>" + reviewX1[0] + "</td>\
														<td>" + reviewX1[2] + "</td>";
		
		document.getElementById("formX3").innerHTML = "<td>" + reviewX2[0] + "</td>\
														<td>" + reviewX2[2] + "</td>";
		
		document.getElementById("formX4").innerHTML = "<td>" + reviewX3[0] + "</td>\
														<td>" + reviewX3[2] + "</td>";

		document.getElementById("formX5").innerHTML = "<td>" + reviewX4[0] + "</td>\
														<td>" + reviewX4[2] + "</td>";
			
	}

	
}

/*
====================================================================
ARRAYS LIST FOR CUSTOMER REVIEWS SECTION
ARRAY WILL BE MULTIDIMENSIONAL AND CONTAIN CUSTOMER NAME, LOCATION, REVIEW
CLASSES IN HTML WILL BE custName, custLocation, custReview
BELOW ARRAY SCRIPT WILL DISPLAY 3 RANDOM REVIEWS ON REVIEW PAGE
====================================================================
*/

var custReview = [["Michael S", "West Islip", "Review 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
consequat. "],

				["Jim H", "Babylon", "Review 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
consequat. "],

				["Pam B", "North Babylon", "Review 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"],

				["Dwight S", "Bay Shore", "Review 4: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
consequat."],

				["Ryan H", "Amityville", "Review 5: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"],

				["Stanley H", "Lindenhurst", "Review 6: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
"],

				["Toby F", "West Islip", "Review 7: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
"],

				["Phyllis V", "West Babylon", "Review 8: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
"],

				["Andy B", "Copiague", "Review 9: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex "],

				["Meredith P", "Babylon", "Review 10: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
consequat. Duis aute irure dolor in reprehenderit in "],

				["Kevin M", "Deer Park", "Review 11: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
consequat. Duis aute irure dolor in reprehenderit in "],

				["Oscar N", "Lindenhurst", "Review 12: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
"],

				["Creed B", "Lindenhurst", "Review 13: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
"],

				["Kelly K", "Lindenhurst", "Review 14: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
"],

				["Charles M", "Lindenhurst", "Review 15: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
consequat. Duis aute irure dolor in reprehenderit in "]];