function tippyInit() {
  var tipSelector = document.querySelector('[title]')
  var tipSelectorAll = document.querySelectorAll('[title]')
  var tipSelectorLength = $('[title]').length

  tippy('[title]', {
    arrow: false,
    theme: 'clerk',
    followCursor: true
  })

  function runTippy() {
    for (var i = 0; i < tipSelectorLength; i++) {
      if($(window).width() > 991)
        tipSelectorAll[i]._tippy.enable()
      else
        tipSelectorAll[i]._tippy.disable()
    }
  }

  var resizeTimer
  runTippy()
  $(window).on('resize', function(e) {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(runTippy, 250)
  })
}
