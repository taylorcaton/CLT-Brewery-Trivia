var currentQuestion = 0;
var userChoice = -1;
var score = 0;

function updateDisplay(){
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
	$("#questionBox h1").html("<h1 class='questionText'>"+q.question+"</h1>");
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
			text: '',
			type: 'success'
		});
		score++;
	}else{
		//Run Wrong Animation
		swal({
			title: 'Nope!',
			text: '',
			type: 'error'
		});
	}
}

function displayScore(){
	$("#progressBox").html("<h3>Score: " + score + "</h3>");
}

$(document).ready(function(){

	$(document).on("click", ".btn-choice", function(){
		userChoice = $(this).attr("data-choice");
		console.log(userChoice);
		checkAnswer();
		updateDisplay();
	});

});

updateDisplay();