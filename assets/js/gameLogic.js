var currentQuestion = 0;

function start(){
	//Load the quizbox

	//Load the questions into the question array
	
		
}

function getQuestion(){
	return questions[currentQuestion];
}

function displayCurrentQuestion(q){
	$("#questionBox").html("<h1 class='questionText'>"+q.question+"</h1>");
}

function displayCurrentAnswers(q){
	for (var i = 0; i < q.choices.length; i++) {
		$('#answerBox').append("<button class='btn btn-default'>"+q.choices[i]+"</button>");
	}
}

start();