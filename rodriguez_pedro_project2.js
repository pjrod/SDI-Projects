//Pedro J. Rodriguez
//Project 2
//SDI 1212

// function
var coastieCrew = "Crew",
    coastie = "Pedro"
;
var smallBoat = "25 RBS",
    bigBoat = "41 UTB"
;
var hoursToLocation = 2;


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