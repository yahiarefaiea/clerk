$(document).ready(function() {
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
      })
    }, 200)
  })
})
