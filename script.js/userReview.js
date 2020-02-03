"use strict";

//need to get values from 3 form inputs and print review like ones already on page

var userReviewName = document.getElementById("name");
var userReviewCity = document.getElementById("city");
var userReviewText = document.getElementById("reviewText");

document.getElementById("submitReview").addEventListener("click",
	function() {
		document.getElementById("userReview").innerHTML = "<h2>" + userReviewName.value + "</h2>\
														   <h3>" + userReviewCity.value + "</h3>\
														   <p>" + userReviewText.value + "</p>";
		document.getElementById("userReviewInput").setAttribute("hidden", true);
	});