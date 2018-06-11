$(document).ready(function() {
  $('#burger').on('click', function(e) {
    $('.wrapper').toggleClass('menu--open')
    e.preventDefault()
  })
})
