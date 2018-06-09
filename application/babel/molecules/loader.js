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
    setTimeout(function() {
      Router.route('home')
      Pops.init()
      $('#loading').removeClass('loading')
      setTimeout(function() {
        $('#loading').remove()
      }, 1500)
    }, 200)
  })
})
