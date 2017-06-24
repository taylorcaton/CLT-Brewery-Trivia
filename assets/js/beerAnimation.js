function fillBeer(b){ //if true fill up
    var h = "";

  if(b){
    h="100%"
  }else {
    h="0%";
  }

  $('#liquid') // I Said Fill 'Er Up!
    .delay(1000)
    .animate({
      height: h
    }, 2500);

};
