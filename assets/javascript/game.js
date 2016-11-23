

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
	painting4: {
		title: "A Sunday Afternoon on the Island of La Grande Jatte",
		painting: "src='assets/images/lagrande.jpg'",
		choices: ["Edouard Manet","Georges Suerat", "Edgar Degas", "Claude Monet"],
		artist: "Georges Suerat"
	},
	painting5: {
		title: "American Gothic",
		painting: "src='assets/images/gothic.jpg'",
		choices: ["Grant Wood",  "Henry Matisse", "Diego Rivera", "Diego Velazquez"],
		artist: "Grant Wood"
	},
	painting6: {
		title: "The Persistence of Memory",
		painting: "src='assets/images/memory.jpg'",
		choices: ["Salvador Dali", "Vincent Van Gogh", "Pablo Picasso", "Claude Monet"], 
		artist: "Salvador Dali"
	},
	painting7: {
		title: "Starry Night",
		painting: "src='assets/images/starrynight.jpg'",
		choices: ["Mark Rothko", "Raphael","Claude Monet", "Vincent Van Gogh"],
		artist: "Vincent Van Gogh"
	},
	painting8: {
		title: "Girl with a Pearl Earring",
		painting: "src='assets/images/pearl.jpg'",
		choices: ["Gustav Klimt", "Renoir","Johannes Vermeer", "Francisco Goya"],
		artist: "Johannes Vermeer"
	},
	painting9: {
		title: "Night Watch",
		painting:"src='assets/images/nightwatch.jpg'",
		choices: ["Renoir", "Rembrandt", "Caravaggio", "Michelangelo"],
		artist: "Rembrandt"
	},
	painting10: {
		title:"School of Athens",
		painting: "src='assets/images/athens.jpg'",
		choices: ["Raphael", "Michelangelo","Leonardo da Vinci", "Rembrandt"],
		artist: "Raphael",
	}
};
//var artists is for if I wanted to dynamically created the choices.
//var artists ={"C.M. Coolidge", "Jackson Polluck", "Rene Magrittees", "Georges Suerat", "Grant Wood", "Salvador Dali", "Vincent Van Gogh", "Johannes Vermeer", "Rembrandt", "Raphael", "Sandro Botticelli", "Mark Rothko", "Peter Paul Rubens", "Henry Matisse", "Diego Rivera", "James McNeill Whistler", "Pablo Picasso", "Wassily Kandinsky", "Gustav Klimt", "Renoir", "Edouard Manet", "Francisco Goya", "Diego Velazquez", "Jan van Eyck", "Edvard Munch", "Claude Monet", "Michelangelo", "Caravaggio", "Leonardo da Vinci", "Edgar Degas"};


//starter variables
var correct = 0;
var incorrect = 0;
var showQuestion;
var indexCount = 0;
var arrayLength = Object.keys(questions).length;
var paintingArtist;
//start quiz from start button
$("#start").on("click", startQuiz);

function startQuiz(){
	$("#timerBox").html("<div class='row'><div class='col-xs-12' id='display'>10</div></div>");
	$("#quizActive").toggle();
	$("#scoreboard").toggle();
	displayQuestion();
	
};

function displayQuestion(){

		var paintingContainer=$("#paintingContainer");
//set specific variables
		var paintingNumber = Object.keys(questions)[indexCount];
		var paintingTitle = questions[paintingNumber]["title"];
		var paintingLocation = "<img class='img-responsive' alt='"+paintingTitle+"'" +questions[paintingNumber]["painting"]+" />";
		var paintingChoices = questions[paintingNumber]["choices"];
		paintingArtist = questions[paintingNumber]["artist"];
		console.log(paintingNumber, paintingTitle, paintingLocation, paintingChoices, paintingArtist);

	
//update html - painting, choices, add/change value to choices
		$("#paintingTitle").html(paintingTitle);
		$("#paintingContainer").html(paintingLocation);
			for(var i=0; i<paintingChoices.length; i++){
				$("#option"+i).html(paintingChoices[i]);
				$("#option"+i).attr("value", paintingChoices[i]);
			};

		timer();
		$(".choices").on("click", checkAnswer);

}; //end displayQuestion loop



function nextQuestion(){
	indexCount++;
	
	if (indexCount >= arrayLength) {
  		summaryPage();
  	}else{
  		displayQuestion();
  	};
};


function stopTime() {

    	time=11;
    	clearInterval(counter);
    	setTimeout(nextQuestion, 3000);

};

function checkAnswer(){
	$(".choices").off("click");
	var guess = this.attributes[2].value;
	//var paintingArtist = questions[paintingNumber]["artist"];
	console.log(guess);

	if (guess === paintingArtist){
			$("#paintingContainer").html("<img class='img-responsive' alt='Correct answer' src='assets/images/correct.jpg' />");
    		$("#display").html("");
    		correct++;
    		$("#correctTotal").html(correct);
    		stopTime();
    	} else {
    		$("#paintingContainer").html("<img class='img-responsive' alt='Correct answer' src='assets/images/wrong.jpeg' />");
    		$("#display").html("");
    		incorrect++;
    		$("#incorrectTotal").html(incorrect);
    		stopTime();
    };
};//end checkanswer



function timer(){
	var time= 10;
	counter = setInterval(countdown, 1000);
	//$(".choices").on("click", checkAnswer);
	function countdown() {
		if (time>11){
			time--;
		} else if(time>0 && time<=11){
    	time--;
    	$("#display").html(time);
    	} else {
    		$(".choices").off("click");
			$("#paintingContainer").html("<img class='img-responsive' alt='Time is up' src='assets/images/timesup.jpg' />");
    		$("#display").html("");
    		incorrect++;
    		$("#incorrectTotal").html(incorrect);
    		stopTime();
    	};   
	}; //end countdown

};//end timer


function summaryPage(){
	$("#timerBox").html("<button id='start'>Play Again!</button>");
	$("#start").on("click", restartQuiz);
	$("#quizActive").toggle();
	$("#scoreboard").toggle();
	$("#summaryActive").toggle();

	var percentRight = Math.round((correct/(correct+incorrect))*100);

	if(percentRight=== 100){
		$("#summaryTitle").html("You are awesome!");
	} else if(percentRight >=90 && percentRight < 100){
		$("#summaryTitle").html("Excellent Job!");
	} else if(percentRight >=70 && percentRight < 90){
		$("#summaryTitle").html("Good Job!");
	} else if(percentRight >=40 && percentRight < 70){
		$("#summaryTitle").html("You might want to review a bit...");
	} else {
		$("#summaryTitle").html("Don't quit your day job...");
	}; 

	$("#summaryContainer").html("<div class='fullwidth'>You got a....</div><div class='finalpercent'>"+percentRight+"%</div><div class='fullwidth'><p>Correct answers: "+correct+"</p><p>Incorrect answers: "+incorrect+"</p></div>");


};

function restartQuiz(){
//reset starter variables
correct = 0;
incorrect = 0;
showQuestion;
indexCount = 0;

//show timerbox, toggle quizActive, toggle scoreboard, toggle summaryActive
	$("#timerBox").html("<div class='row'><div class='col-xs-12' id='display'>10</div></div>");
	$("#quizActive").toggle();
	$("#scoreboard").toggle();
	$("#summaryActive").toggle();
	$("#incorrectTotal").html(incorrect);
	$("#correctTotal").html(correct);

//start displayQuestion
	displayQuestion();
	
};