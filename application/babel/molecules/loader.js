$(document).ready(function() {
  turnSpans($('.spans'))
  tippyInit()
  Clerk.wait()

  //  HIDE ON SCROLL
  $('.template').scroll(function() {
    if(this.scrollTop > 21)
      $('#clerk, #burger').addClass('hidden')
    else
      $('#clerk, #burger').removeClass('hidden')
  })

  //  JPRELOADER INIT
  $('body').jpreLoader({
    showSplash: false,
    showPercentage: false,
    loaderVPos: 0,
    splashVPos: 0
  }, function() {
    Router.route(undefined, function() {

      //  CALLBACK
      Pops.init()
      $('#loading').removeClass('loading')
      setTimeout(function() {
        $('#loading').remove()
      }, 500)
    })
  })
})
