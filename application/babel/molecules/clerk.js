//  ITERATION COUNT
var x, iteration
function iterationCount() {
  $('body').addClass('waiting')
  x= 1
  iteration= setInterval(function() {
    x= ++x
  }, 1500)   //  .5s * 3 = 1.5s
}

//  ITERATION CLEAR
function iterationClear(callback) {
  if(x<2) x= 2  //  At least run twice
  $('#clerk, #clerk circle')
    .attr('style', 'animation-iteration-count: '+x+'; -webkit-animation-iteration-count: '+x+';')
  clearInterval(iteration)
  setTimeout(function() {
    $('body').removeClass('waiting')
    $('#clerk, #clerk circle').removeAttr('style')
    x= 1
    callback()
  }, 1500)
}
