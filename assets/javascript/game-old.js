//starter variables
var correct = 0;
var incorrect = 0;



//questions, links, and answers.

var questions = {
	painting1: {
		title: "Dogs Playing Poker",
		painting: "src='assets/images/dogs.jpg'",
		choices: ["Wassily Kandinsky", "C.M. Coolidge", "Peter Paul Rubens", "Sandro Botticelli"],
		artist: "C.M. Coolidge"
	},
	painting2: {
		title: "No. 5, 1948",
		painting: "src='assets/images/number-5.jpg'",
		choices: ["Jackson Polluck","Pablo Picasso","Peter Paul Rubens","Grant Wood"],
		artist: "Jackson Polluck"
	},
	painting3:{
		title: "The Son of Man",
		painting: "src='assets/images/sonofman.jpg'",
		choices: ["Francisco Goya", "Diego Velazquez", "Rene Magrittees","Jan van Eyck"],
		artist: "Rene Magrittees"
	},
	// painting4: {
	// 	title: "A Sunday Afternoon on the Island of La Grande Jatte",
	// 	painting: "src='assets/images/lagrande.jpg'",
	// 	choices: ["Edouard Manet","Georges Suerat", "Edgar Degas", "Claude Monet"],
	// 	artist: "Georges Suerat"
	// },
	// painting5: {
	// 	title: "American Gothic",
	// 	painting: "src='assets/images/gothic.jpg'",
	// 	choices: ["Grant Wood",  "Henry Matisse", "Diego Rivera", "Diego Velazquez"],
	// 	artist: "Grant Wood"
	// },
	// painting6: {
	// 	title: "The Persistence of Memory",
	// 	painting: "src='assets/images/memory.jpg'",
	// 	choices: ["Salvador Dali", "Vincent Van Gogh", "Pablo Picasso", "Claude Monet"], 
	// 	artist: "Salvador Dali"
	// },
	// painting7: {
	// 	title: "Starry Night",
	// 	painting: "src='assets/images/starrynight.jpg'",
	// 	choices: ["Mark Rothko", "Raphael","Claude Monet", "Vincent Van Gogh"],
	// 	artist: "Vincent Van Gogh"
	// },
	// painting8: {
	// 	title: "Girl with a Pearl Earring",
	// 	painting: "src='assets/images/pearl.jpg'",
	// 	choices: ["Gustav Klimt", "Renoir","Johannes Vermeer", "Francisco Goya"],
	// 	artist: "Johannes Vermeer"
	// },
	// painting9: {
	// 	title: "Night Watch",
	// 	painting:"src='assets/images/nightwatch.jpg'",
	// 	choices: ["Renoir", "Rembrandt", "Caravaggio", "Michelangelo"],
	// 	artist: "Rembrandt"
	// },
	// painting10: {
	// 	title:"School of Athens",
	// 	painting: "src='assets/images/athens.jpg'",
	// 	choices: ["Raphael", "Michelangelo","Leonardo da Vinci", "Rembrandt"],
	// 	artist: "Raphael",
	// }
};
//var artists is for if I wanted to dynamically created the choices.
//var artists ={"C.M. Coolidge", "Jackson Polluck", "Rene Magrittees", "Georges Suerat", "Grant Wood", "Salvador Dali", "Vincent Van Gogh", "Johannes Vermeer", "Rembrandt", "Raphael", "Sandro Botticelli", "Mark Rothko", "Peter Paul Rubens", "Henry Matisse", "Diego Rivera", "James McNeill Whistler", "Pablo Picasso", "Wassily Kandinsky", "Gustav Klimt", "Renoir", "Edouard Manet", "Francisco Goya", "Diego Velazquez", "Jan van Eyck", "Edvard Munch", "Claude Monet", "Michelangelo", "Caravaggio", "Leonardo da Vinci", "Edgar Degas"};

$("#start").on("click", startQuiz );

function startQuiz(){
	$("#timerBox").html("<div class='row'><div class='col-xs-12' id='display'>10</div></div>");
	$("#quizActive").toggle();
	$("#scoreboard").toggle();


	displayQuestion();
	
	
};

function displayQuestion(){
	var questionTime = 0;
	var questionsOn = true;
	var timerOn = true;
	$.each(questions, function(key, value) {
		arrayLength = Object.keys(questions).length;

		setTimeout(function() {
		var paintingContainer=$("#paintingContainer");
//set specific variables
		var questionNumber = key;
		var paintingTitle = value.title;
		var paintingLocation = "<img class='img-responsive' alt='"+paintingTitle+"'" +value.painting+" />";
		var paintingChoices = value.choices;
		var paintingArtist = value.artist;
		console.log(questionNumber, paintingTitle, paintingLocation, paintingChoices, paintingArtist);

	
//update html - painting, choices, add/change value to choices
		$("#paintingTitle").html(paintingTitle);
		$("#paintingContainer").html(paintingLocation);
			for(var i=0; i<paintingChoices.length; i++){
				$("#option"+i).html(paintingChoices[i]);
				$("#option"+i).attr("value", paintingChoices[i]);
			};

		if (timerOn){timer();}; 
		}, questionTime);
		
		questionTime += 13000;

	});//end each questions loop

	timerOn = false;
}; //end displayQuestion loop




		// }, questionTime);
		// 
		// 	questionTime += 13000;
		//
		//  	
		//  	
		// };





function timer(){
	var time= 10;
	counter = setInterval(countdown, 1000);
	
	function countdown() {
		if (time>11){
			time--;
		} else if(time>0 && time<=11){
    	time--;
    	$("#display").html(time);
    	} else {
			$("#paintingContainer").html("<img class='img-responsive' alt='Time is up' src='assets/images/timesup.jpg' />");

    			$("#display").html("");
    			time=12;
    		
    	};
	}; //end count

};//end timer