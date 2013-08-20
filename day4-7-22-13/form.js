//making the global variables
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var zip = document.getElementById("zip");
var submitButton = document.getElementById("submit");

// var Form = {
// 	validateEmpty: function() {

// 		if(firstName.value =="" || lastName.value =="" || zip.value ==""){
// 		return false;
// 		}
// 	},
// 	 validateLength: function() {

// 	 }
// };

function validateForm() {
	submitButton.onsubmit = function() {
	//document.getElementById("sign-up").onsubmit = function() {
		//prevent form submission if empty fields
		if(firstName.value ==""){
			alert("bleh");
			//document.getElementById("errors").innerHTML = "Sorry, you forgot to enter your first name";
			return false; //this prevents form submission
		} else {
			document.getElementById("errors").innerHTML = "";
			return true; //this allows form submission
		}
	}
}

//call the validateForm event handler
window.onload = function(){
	validateForm();
}

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