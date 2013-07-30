var Form = {
	validateEmpty: function() {
		var allLabels = document.getElementsByTagName("label");
		console.log(allLabels);

		if(allLabels.value ==""){
		alert("Please be sure to fill out all fields");
		}
	},
	// validateLength: function() {

	// }
};