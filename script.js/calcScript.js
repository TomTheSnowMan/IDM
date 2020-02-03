"use strict";

//javascript file to process forms from contact us page and services page materials calculator

/*
=================================================
Function List and description
=================================================
cubicYards() will calculate the cubic yards of mulch and topsoil

squareFeet() will calculate the square footage of pavers 
*/

//stores the value of the button that was pushed
var x;
var length = document.getElementById("num1");
var width = document.getElementById("num2");

var depth = document.getElementById("num3");

//used to store computed value of (length * width * (depth / 12)) / 27
var cY;

//used to store computed value of length * width
var sqft;

/*
==================================================
Buttons linked to cubic yards calculator
==================================================
*/
document.getElementById("mulch").addEventListener("click",
	function(e){
		x = e.target.value;
		cubicYards();
	});
document.getElementById("topSoil").addEventListener("click",
	function(e) {
		x = e.target.value;
		cubicYards();
	});

/*
=====================================================
Buttons linked to square footage calculator
=====================================================
*/
document.getElementById("pavers").addEventListener("click",
	function(e) {
		x = e.target.value;
		squareFeet();
	});


function cubicYards(){
	//reveal form for values to be typed in 
	//remove hidden attribute if wrong button was clicked
	document.getElementById("cY").removeAttribute("hidden");
	document.getElementById("valueInputs").removeAttribute("hidden");
	document.getElementById("depthLabel").removeAttribute("hidden");
	document.getElementById("num3").removeAttribute("hidden");
	//hide the square feet calculator button
	document.getElementById("sqft").setAttribute("hidden", true);
	
	//use anonmyous function to compute cubic yards
	document.getElementById("cY").addEventListener("click",
		function() {
			//cubic yards calculator, depth is divided by 12 so it can be input as inches
			cY = (length.value * width.value * (depth.value / 12)) / 27;
			document.getElementsByTagName("h2")[0].innerHTML = "Approximately " + cY.toFixed(2) + " yards of " + x + " will be needed";
		});
}

function squareFeet() {
	//remove hidden attributes if wrong button was clicked
	document.getElementById("sqft").removeAttribute("hidden");
	document.getElementById("valueInputs").removeAttribute("hidden");

	//hide depth label and value fields as well as button for cubic yards calculator
	document.getElementById("depthLabel").setAttribute("hidden", true);
	document.getElementById("num3").setAttribute("hidden", true);
	document.getElementById("cY").setAttribute("hidden", true);

	//use anonymous function to compute square footage
	document.getElementById("sqft").addEventListener("click",
		function() {
			sqft = length.value * width.value;
			document.getElementsByTagName("h2")[0].innerHTML = "Approximately " + Math.ceil(sqft) + " sqft of " + x + " materials will be needed";
		});
}