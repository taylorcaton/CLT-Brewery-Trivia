var questions

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        questions = JSON.parse(this.responseText);
    }
};
xmlhttp.open("GET", "assets/js/questions.txt", true);
xmlhttp.send();


function start(){
	//Load the questions into the question array

	//Load the quizbox
	$('.quiz').append("<div class='carousel slide'>");


}

start();