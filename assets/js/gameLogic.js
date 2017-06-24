var currentQuestion = 0;
var userChoice = -1;
var score = 0;

function updateDisplay(){
	
	if(currentQuestion >= questions.length) return;

	//Load the question
	var tempQuestion = getQuestion();

	//Display the Question
	displayCurrentQuestion(tempQuestion);

	//Display the Choices
	displayCurrentAnswers(tempQuestion);

	//display the score
	displayScore();	
}

function getQuestion(){
	return questions[currentQuestion];
}

function displayCurrentQuestion(q){
	$("#questionBox img").attr("src", questions[currentQuestion].image);
	$("#questionBox h2").html("<h2 class='questionText small'>"+q.question+"</h2>");
}

function displayCurrentAnswers(q){
	$('#answerBox h1').empty();
	for (var i = 0; i < q.choices.length; i++) {
		$('#answerBox h1').append("<button class='btn btn-primary btn-lg round btn-choice' data-choice="+i+">"+q.choices[i]+"</button>");
	}
}
function checkAnswer(){
	if(userChoice == questions[currentQuestion].answer){
		//Run Correct animation
		swal({
			title: 'Correct!',
			text: questions[currentQuestion].text,
			type: 'success'
		});
		score++;
	}else{
		//Run Wrong Animation
		swal({
			title: 'Nope!',
			text: questions[currentQuestion].text,
			type: 'error'
		});
	}

	currentQuestion++;
}

function displayScore(){
	$("#progressBox").html("<h3>Score: " + score + "</h3>");
}

function endGame(){
	return currentQuestion == questions.length;
}

function displayResults(){
	
	var result = score / (questions.length);
	console.log(result);
	var str = "You scored " + score + " out of " + (questions.length) + ". ";

	if(score >= 1) str += "\nPERFECT!!";
	else if(score >= 0.5) str += "\nNice Job!";
	else if(score >= 0.2) str += "\nHmmm...";
	else str += "\nTry again!"

	swal({
			title: 'Results',
			text: ""+str,
			type: 'info'
	});
}

$(document).ready(function(){

	$(document).on("click", ".btn-choice", function(){
		
		fillBeer(true);
		fillBeer(false);
		setTimeout(displayBeer, 4000);
		
		userChoice = $(this).attr("data-choice");
		console.log(userChoice);
		checkAnswer();
		updateDisplay();
		if(endGame()) displayResults();
	});

});

updateDisplay();