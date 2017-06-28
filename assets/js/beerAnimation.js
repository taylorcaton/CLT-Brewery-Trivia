function fillBeer(b){ //if true fill up
  
  var h = "";
  var r = "";

  if(b){
    h="100%"
    r="-45"
    $("#container").toggle()
  }else {
    h="0%";
    r="";
  }

  $('#liquid') // I Said Fill 'Er Up!
    .animate({
      height: h
    }, 2000);

  $('#logoBox img')
    .animateRotate(-45,1000);

};

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
