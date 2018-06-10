var Clerk = {
  duration: 1500,
  iteration: 0,
  processing : false,
  enough : false,
  interval: null,
  callback : null,
  selector : '#clerk .symbol, #clerk .symbol circle',

  //  WAIT
  wait: function() {
    if(Clerk.processing != true) {
      Clerk.processing = true
      $('#clerk').addClass('waiting')
      Clerk.waiting()
      Clerk.interval = setInterval(Clerk.waiting, Clerk.duration)
    }
  },

  //  WAITING
  waiting: function() {
    if(Clerk.enough != true) {
      ++Clerk.iteration
      return
    }

    Clerk.stopping()
  },

  //  STOP
  stop: function(callback) {
    if(Clerk.processing == true) {
      Clerk.enough = true
      Clerk.callback = callback

      $(Clerk.selector).attr('style',
      'animation-iteration-count: ' + Clerk.iteration +
      '; -webkit-animation-iteration-count: ' + Clerk.iteration + ';')
    }
  },

  //  STOPPING
  stopping: function() {
    clearInterval(Clerk.interval)
    if(typeof Clerk.callback === 'function' && Clerk.callback)
      Clerk.callback()

    //  do we really need a setTimeout?
    setTimeout(Clerk.reset, 200)
  },

  //  RESET
  reset: function() {
    Clerk.iteration = 0
    Clerk.processing = false
    Clerk.enough = false
    Clerk.interval = null
    Clerk.callback = null

    $('#clerk').removeClass('waiting')
    $(Clerk.selector).removeAttr('style')
  }
}
