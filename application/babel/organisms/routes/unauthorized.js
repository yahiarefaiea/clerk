Router.unauthorized = function(callback) {
  var location = Router.location.split('/')
  Router.wrapper = ['unauthorized']

  //  AUTH
  if(location[0] == '') {
    Router.push('auth intro')

    setTimeout(function() {
      Router.updateWrapper('switch', 'intro')
    }, 1500 * 4)
  }

  Router.callback(callback)
}
