$(document).ready(function() {
  turnSpans($('.spans'))
  tippyInit()
  Clerk.wait()

  // JPRELOADER INIT
  $('body').jpreLoader({
    showSplash: false,
    showPercentage: false,
    loaderVPos: 0,
    splashVPos: 0
  }, function() {
    Router.route('', function() {

      //  CALLBACK
      Pops.init()
      $('#loading').removeClass('loading')
      setTimeout(function() {
        $('#loading').remove()
      }, 500)
    })
  })
})
