//Pedro J. Rodriguez
//Project 2
//SDI 1212


var coastieCrew = "Crew",
    coastie = "Pedro"
;
var smallBoat = "25 RBS",
    bigBoat = "41 UTB"
;
var hoursToLocation = 2; 
var windSpeed = 25; // local wind speed can change to affect outcome of story
var crewGarScore = 24; // Gar Model Score can chage to affect status of situation 
var searchPattern = "Expanding Square Search";

var garModel = ["Green", "Amber", "Red"];

//function
//Main Code

var division = function(firstNumber,secondNumber){
	var outcome = firstNumber/secondNumber;
	
	return outcome;
	
};

//main code

var divOutcome = division(10,5);

console.log("The answer is " + divOutcome);

var getArea = function () {
	console.log ("getArea Fired!");
};
getArea();