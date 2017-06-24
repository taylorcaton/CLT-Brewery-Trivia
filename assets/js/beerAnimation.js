function fillBeer(b){ //if true fill up
  
  var h = "";

  if(b){
    h="100%"
    $("#container").toggle()
  }else {
    h="0%";
  }

  $('#liquid') // I Said Fill 'Er Up!
    .animate({
      height: h
    }, 2000);

};

function displayBeer(){
  $("#container").toggle()
}
