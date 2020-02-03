"use strict"
document.getElementById("subbutton").addEventListener("click", function(){
	var username = document.getElementById("userName");
	var messAge = document.getElementById("messAge");
		if(username.value.length < 3) {
			window.alert("name must be more then 3 characters");
			username.value = "";
		if(messAge.value.length < 1){
			window.alert("please write a message");
			messAge.value = "";
		}
		} else {
			window.alert("Thank you");
		}
})

