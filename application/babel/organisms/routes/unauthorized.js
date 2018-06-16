Router.unauthorized = function(location) {
  Router.classes = ['unauthorized']

  if(location[0] == '' || location[0] == undefined) {
    Router.classes.push('auth', 'intro')

    setTimeout(function() {
      Router.updateClasses('switch', 'intro')
    }, 5000)
  }

  else {
    Router.classes.push('app')

    //	VACANCIES
    if(location[0] == 'vacancies') {
      Router.classes.push('vacancies')
    }

    //	COMPANY
    else {
      var company = location[0]

      if(location[1] == undefined) {
        Request.fetch({
          type: 'company',
          companyName: company
        }, function(data) {
          Request.inject(data, function() {
            Router.classes.push('company')
          })
        })
      }

      //	VACANCY
      else {
        var vacancy = location[1]

        if(location[2] == undefined) {
          Request.fetch({
            type: 'company',
            companyName: company
          }, function(data) {
            Request.inject(data, function() {
              Router.classes.push('company', 'vacancy')
            })
          })
        }

        else {
          Router.classes.push('notFound')
        }
      }

    }
  }
}
