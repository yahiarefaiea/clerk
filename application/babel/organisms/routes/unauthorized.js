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
    if(location[0] == 'vacancies' && location[1] === undefined) {
      Request.inject('vacancies', Mock.Company.Vacancies)
    }

    //  COMPANY
    else {
      var company = location[0]

      if(location[1] === undefined) {
        Request.inject('company', Mock.Company)
      }

      //  VACANCY
      else {
        var vacancy = location[1]

        if(location[2] === undefined) {
          Request.inject('vacancy', Mock.Company.Vacancies[0])
        }

        else Router.push('notFound')
      }
    }
  }

  //  CALLBACK
  Router.callback(callback)
}
