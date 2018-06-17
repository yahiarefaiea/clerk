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
        Request.fetch({
          type: 'company',
          companyName: company
        }, function(data) {
          Request.inject(data, function() {
            Router.push('company')
          })
        })
      }

      //  VACANCY
      else {
        var vacancy = location[1]

        if(location[2] === undefined) {
          Request.fetch({
            type: 'vacancy',
            companyName: company,
            jobTitle: vacancy
          }, function(data) {
            Request.inject(data, function() {
              Router.push('vacancy')
            })
          })
        }

        //  ERROR
        else
          Router.error()
      }
    }
  }

  Router.callback(callback)
}
