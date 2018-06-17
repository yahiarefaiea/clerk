Router.unauthorized = function(location, callback) {
  location = Router.location.split('/')

  Router.wrapper = ['unauthorized']
  console.log('session is: unauthorized')

  if(location[0] == '' || location[0] == undefined) {
    Router.push('auth intro')

    setTimeout(function() {
      Router.updateWrapper('switch', 'intro')
    }, 5000)
  }

  callback()
}
