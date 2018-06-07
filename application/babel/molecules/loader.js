$(document).ready(function() {
  turnSpans($('.spans'))
  tippyInit()
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
        Router.route('home')
        Pops.init()
        $('body').removeClass('loading')
        setTimeout(function() {
          $('#loading').remove()
        }, 1500)
      })
    }, 200)
  })
})
