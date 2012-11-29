//Pedro J. Rodriguez
//Project 2
//SDI 1212


var coastieCrew = "Crew",
    coastie = "Pedro"
;
var smallBoat = "25 RBS",
    bigBoat = "41 UTB"
;
var hoursToLocation = 2; //Needed for procedure if fuel tanks are needed
var windSpeed = 25; // local wind speed can change to affect outcome of story
var crewGarScore = 24; // Gar Model Score can chage to affect status of situation 
var searchPattern = "Expanding Square Search";
var garModel = ["Green", "Amber", "Red"];



//Main Code
console.log(coastie + " and the " + coastieCrew + " gathered all the necessary information needed"
	 + " in order to get the boat underway");
console.log(coastie + " ordered a crew member to ready the boat for operation.");

//Procedure
if (hoursToLocation >= 2) {
		console.log("Since the trip will take " + hoursToLocation + " Hours." + " We will take extra fuel tanks.");
	} else {
		console.log("We dont need extra fuel tanks");
	};
// Main Code
console.log("The extra fuel tanks are for the return trip.");
console.log(coastie + " had to check to make sure wich boat the " + coastieCrew + " needed to take so he checked the weather.");

//Boolean function
var seaState = function(seaState1, seaState2){
	var newSeas = seaState1 + seaState2;
	if (newSeas >= 4) {
		newSeas = true;
		return "It is " + newSeas + ", we will need to take the " + bigBoat + "."; 
		
	} else { 
		newSeas = false;
		return "It is " + newSeas + " that we need to take the " + bigBoat + ".  We should take the " + smallBoat + "."; 
			
	};
	}

// Main Code
var newSeasState = seaState(0, 2);
console.log(newSeasState);


//if (wakeUpTime <= 6) {
//			wakeUpTime = wakeUpTime + 0;
//			console.log("Since " + coastieOne + " and the " + coastieSection + " woke up at " + wakeUpTime + "AM, the " + coastieSection + " and him were ready for action.");
//		} else {
//			console.log("Since " + coastieOne + " and the " + coastieSection + " woke up at " + wakeUpTime + "AM, they were not ready for the call.");
//		};

//var division = function(firstNumber, secondNumber){
//	var outcome = firstNumber/secondNumber;
	
//	return outcome;
	
//};

//var divOutcome = division(10,5);

//console.log("The answer is " + divOutcome);

//var getArea = function () {
//	console.log ("getArea Fired!");
//};
//getArea();