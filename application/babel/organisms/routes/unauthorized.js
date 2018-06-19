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

  //  APP
  else {
    Router.push('app')

    //  VACANCIES
    if(location[0] == 'vacancies') {
      Router.push('vacancies')
    }

    //  COMPANY
    else {
      var company = location[0]

      if(location[1] === undefined) {
        console.log('Requested a company')
      }

      //  VACANCY
      else {
        var vacancy = location[1]

        if(location[2] === undefined) {
          console.log('Requested a vacancy')
        }

        //  ERROR
        else
          Router.error()
      }
    }
  }

  Router.callback(callback)
}
