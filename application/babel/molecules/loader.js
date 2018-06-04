$(document).ready(function() {
  turnSpans($('.spans'))
  iterationCount()

  // JPRELOADER INIT
  $('body').jpreLoader({
    showSplash: false,
    showPercentage: false,
    loaderVPos: 0,
    splashVPos: 0
  }, function() {
    setTimeout(function() {
      iterationClear(function() {
        //  CALLBACK
        $('body').removeClass('loading')
        tippyInit()
        setTimeout(function() {
          $('#loading').remove()
        }, 1500)
      })
    }, 200)
  })
})
