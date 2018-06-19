Router.unauthorized = function(callback) {
  var location = Router.location.split('/').filter(Boolean)
  Router.wrapper = ['unauthorized']

  //  AUTH
  if(location[0] === undefined) {
    Router.push('auth intro')

    setTimeout(function() {
      Router.updateWrapper('switch', 'intro')
    }, 1500 * 4)
  }

  //  APP
  else {
    Router.push('app')

    //  VACANCIES
    if(location[0] == 'vacancies') {
      if(location[1] === undefined) {
        // TODO: Add a fetch request
        Router.push('vacancies')
      }

      else Router.push('notFound')
    }

    //  COMPANY
    else {
      var company = location[0]

      if(location[1] === undefined) {
        // TODO: Add a fetch request
        Router.push('company')
      }

      //  VACANCY
      else {
        var vacancy = location[1]

        if(location[2] === undefined) {
          // TODO: Add a fetch request
          Router.push('vacancy')
        }

        else Router.push('notFound')
      }
    }
  }

  //  CALLBACK
  Router.callback(callback)
}
