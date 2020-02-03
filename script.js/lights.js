"use strict";
//function to transition lights to on and off based on mouse hover
document.getElementById("lightsOff").addEventListener("mouseover",
	function() {
		document.getElementById("lightsOff").setAttribute("hidden", true);
		document.getElementById("lightsOn").removeAttribute("hidden");
	});
document.getElementById("lightsOn").addEventListener("mouseout",
			function() {
				document.getElementById("lightsOn").setAttribute("hidden", true);
				document.getElementById("lightsOff").removeAttribute("hidden");
			});