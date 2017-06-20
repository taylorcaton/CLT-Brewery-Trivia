var questions = [];

var	q1: {
		question: "Click on answer 1",
		answers: ["Answer1", "Answer2", "Answer3"],
		correct: 0
	};

var	q2: {
		question: "Click on answer 2",
		answers: ["Answer1", "Answer2", "Answer3"],
		correct: 1
	};


function start(){
	//Load the quizbox
	$('.quiz').append("<div class='carousel slide'>");
}

start();