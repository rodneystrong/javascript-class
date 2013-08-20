//making the global variables
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var zip = document.getElementById("zip");
var submitButton = document.getElementById("submit");

var Form = {
	validateEmpty: function() {

		if(firstName.value =="" || lastName.value =="" || zip.value ==""){
		return false;
		}
	},
	// validateLength: function() {

	// }
};

// var zip = document.getElementById("zip");
// if (tyepof(zip.value) == "") {
// 	//tell the user to only input #'s in the zip code field
// }

// if(isNaN(zip.value)) {
// 	//tell the user to only input #'s in the zip code.
// }

//so, i'm not supposed to do any actions in the Form object? Like I can't do the .innerHTML method here?