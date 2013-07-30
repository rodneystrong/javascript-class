//STRINGS
//var cow = "a string having to do with cows";

//cow = cow.toUpperCase();  //the .toUpperCase is a method. 

/* if you're comparing something or checking for something, usually you want to set it to lower case so you can look 
for just one unicode, that way you have less to search for. Also, you can't trust users to use the correct input, sometimes
they'll do a mixed bag of uppercase and lowercase. Just setting everything to lowercase when you debug/search for things
is a good idea */

//cow = cow.charAt(4);
//console.log(cow);

//cow = cow.slice(4,12); //the .slice method slices the string at the given indices (in this case, 4 and 12) and returns them. 
//console.log(cow);
//
//
//cow = cow.indexOf("ing");
//console.log(cow);

/* 
indexOf() returns the index of a pattern. so if I want to find out "where's the first occurence of ing", 
then it'll return the index position of where "ing" starts. In this case, the "i" in the first "ing" starts
at index position 5, so the console.log will output 5.
*/

//cow = cow.indexOf("g", 9);
//console.log(cow);

/* 
this returns the index of the pattern starting at "g", but the second parameter "9" tells the method to 
start at index 9 and THEN search for the "g" pattern.
*/

//EXERCISE
/* 
Write a function called get_string_between() that takes 3 parameters
Return the part of the string between the patterns given
*/

/*
 - ok so first, declare the string variable we're going to manipulate
 - then define the function with parameters (string, the start of the string, the end of the string)
 - inside that function, create two variables; one that will hold the start of the string, and one 
that will hold the end of the string.
 - Since we want to output a SECTION of the string, 
 - 
 - add .length to the start pattern in order to exclude the characters that the .slice method includes, 
 that way you can ensure you get the string BETWEEN patterns, and not INCLUDING the string starting at the 
 pattern.
*/
// var theString = "I eat my poop.";

// function get_string_between(string, startString, endString) {
// 	var theStart = string.indexOf(startString) + startString.length;
// 	var theEnd = string.indexOf(endString);
// 	//console.log(theStart);
// 	//console.log(theEnd);
// 	return theString.slice(theStart, theEnd);
// }



// var answer = get_string_between(theString, "e", "p.");

// console.log(answer);


//OBJECTS AGAIN!
//Object literal notation
// var kitten = {
// 	eyeColor: "blue",
// 	furColor: "leopard",
// 	weight: 13,
// 	purr: function() {
// 		console.log("meeoooowww");
// 	}
// };

//Object constructor notation
// function Kitten() {				//Normally with constructor notation, you use capitals when creating the object
// 	this.eyeColor = "blue";
// 	this.furColor = "leopard";
// 	this.weight = 13;
// 	var purr = function() {

// 	};
// }

//Object literal notation is usually used for very specific OBJECTS, storing data for a specific case
//Object constructor is more for templating objects to be used for different possibly specific objects

/*
1) Ensure no fields are empty
2) Names between 3 and 50 characters
3) Zip code ->  only numbers 
4) Give useful feedback to user in #errors div
5) Do not allow page to refresh

*/

function getFormValidator() {
	Form.validateEmpty();
	//Form.validateLength();
	return false;
}

getFormValidator();