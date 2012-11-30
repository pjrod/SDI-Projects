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
var crewGarScore = 2; // Gar Model Score can chage to affect status of situation 
var searchPattern = "Expanding Square Search";




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
console.log("Next we needed to check the wind status to see if we should go offshore or inland");

// Number function
do {var knots = 5;
	if (knots >= 10) {
		console.log("The wind speed is " + knots + " Knots, we will go inland it is a safer route.");
	} else {
		console.log("The wind is not that high today");
	};
} while (knots >=10) {
	console.log("The wind speed is " + knots + " Knots, we will go offshore, it is a faster route.");
	knots = knots -5;
};

// Main Code
console.log("Once we figured out wich boat was getting under way everyone proceeded to the boat.");
console.log(coastie + " and the " + coastieCrew + " did a quick boat check and proceeded to do the GAR Model.");

// Array Function
// garModel = ["green", "amber", "red"];
var garModel = ["Green", "Amber", "Red" ];
var numberRange = [1,2,3]; 
var	garModel2 = function(){
	for (var i=0; i < i.length; i++)
	var gar = garModel[i],
		numberThisRange = numberRange[i];
	console.log("Conducted GAR score of " + numberThisRange + " which puts us in the " + gar + ".");
	for (var num = 2; num < numberThisRange; num--){
		var numberRemaining = numberThisRange -num;
		return "GAR score of " + num + " in the " + numberRemaining;
	}
	console.log("we are in the " + gar + ".");
	
};
console.log(garModel2(2));

	
