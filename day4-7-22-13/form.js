//making the global variables
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var zip = document.getElementById("zip");
var submitButton = document.getElementById("submit-button");

// var Form = {
// 	validateEmpty: function() {

// 		if(firstName.value =="" || lastName.value =="" || zip.value ==""){
// 		return false;
// 		}
// 	},
// 	 validateLength: function() {

// 	 }
// };

function handleFormSubmit(){
	document.getElementById("sign-up").onsubmit = function() {
		if(firstName.value=="" || lastName.value =="" || zip.value ==""){
			document.getElementById("errors").innerHTML = "One of your fields is empty :(";
			return false;
		} else if((firstName.value.length < 3) || (firstName.value.length > 50)) {
			document.getElementById("errors").innerHTML = "Please enter a first and last name of more than 3 characters and less than 50 :(";
		} else if(typeof(zip) == 12) {
			document.getElementById("errors").innerHTML = "Please enter a number for your zip code :(";
		} else {
			document.getElementById("errors").innerHTML = "";
		}
		return false;
	};
}

window.onload = function(){
	handleFormSubmit();
}

console.log(typeof(zip));


// var zip = document.getElementById("zip");
// if (tyepof(zip.value) == "") {
// 	//tell the user to only input #'s in the zip code field
// }

// if(isNaN(zip.value)) {
// 	//tell the user to only input #'s in the zip code.
// }

//so, i'm not supposed to do any actions in the Form object? Like I can't do the .innerHTML method here?


/*
1) Ensure no fields are empty
2) Names between 3 and 50 characters
3) Zip code ->  only numbers 
4) Give useful feedback to user in #errors div
5) Do not allow page to refresh

*/