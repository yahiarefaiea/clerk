var Clerk = {
  duration: 1500,
  iteration: 0,

  processing : false,
  enough : false,
  interval: null,
  callback : null,

  //  WAIT
  wait: function() {
    if(this.processing == false) {
      this.processing = true
      $('body').addClass('waiting')
      this.waiting()
      this.interval = setInterval(this.waiting, this.duration)
    }
  },

  //  WAITING
  waiting: function() {
    if(Clerk.enough == false) {
      Clerk.iteration = ++Clerk.iteration
      return
    }

    Clerk.stopping()
  },

  //  STOP
  stop: function(callback) {
    if(this.processing == true) {
      this.enough = true
      this.callback = callback

      $('#clerk .symbol, #clerk .symbol circle').attr('style',
      'animation-iteration-count: '+this.iteration+
      '; -webkit-animation-iteration-count: '+this.iteration+';')
    }
  },

  //  STOPPING
  stopping: function() {
    clearInterval(this.interval)
    if(typeof Clerk.callback === 'function' && Clerk.callback)
      Clerk.callback()

    setTimeout(function() {
      Clerk.iteration = 0
      Clerk.processing = false
      Clerk.enough = false
      $('body').removeClass('waiting')
      $('#clerk .symbol, #clerk .symbol circle').removeAttr('style')

      Clerk.callback = null
    }, 200)
  }
}
