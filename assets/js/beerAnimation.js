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

function tipGlass(down){
  var r = "";

  if(down){
    r = "-45"
    console.log(down);
  }else{
    r = "0"
    console.log(down);
  }

  $('#logoBox img')
    .animateRotate(r,1000);
}

function displayBeer(){
  $("#container").toggle()
}

$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};
